import React, { useEffect, useState } from 'react'
import Layout from '../component/Layout';
import axios from 'axios';
import Spinner from '../component/Spinner';
import { useNavigate } from 'react-router-dom';

function PostedNews() {
    const [loading, setLoading] = useState(false);
    const [newsitems, setNewsItems] = useState([]);
    const user = JSON.parse(localStorage.getItem('ShreyNews-users'))
    const getData = async () => {
        setLoading(true);
        try {
            const result = await axios.post('/api/newsitems//getnewsitemsbyuserid', { userid: user._id });
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
            {loading && (<Spinner />)}
        </Layout>
    )
}

export default PostedNews