import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout';
import axios from 'axios';
import Spinner from '../component/Spinner';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [newsitems, setNewsItems] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate()

  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get('/api/newsitems/getallnewsitems');
      setLoading(false);
      setNewsItems(result.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, []);



  return (
    <Layout>
      {loading && <Spinner />}
      <div className='grid px-20 sm:px-5 mt-5'>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type='text'
          className='border-2 h-10 w-full border-gray-300 px-5'
          placeholder='Search News'
        />
      </div>

      {newsitems.length > 0 && (
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-5 mx-20 sm:mx-5 my-5'>
          {newsitems.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
            .map((item) => {
              console.log(item.postedBy);
              return <div className='shadow-md p-3 border cursor-pointer' onClick={() => navigate(`/newsdesc/${item._id}`)}>
                <h1 className='text-primary text-lg font-bold'>{item.title}</h1>
                <p>{item.description}</p>
                <div className='flex justify-end flex-col items-end'>
                  {/* <span className='text-gray-500 text-sm'>By :{item.postedBy}</span> */}
                  <span className='text-gray-500 text-sm'>on :{item.createdAt.slice(0, 10)}</span>

                </div>
              </div>
            })}
        </div>
      )}
    </Layout>
  )
}

export default HomePage