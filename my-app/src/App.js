import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddNews from './pages/AddNews';
import LandingPage from './pages/LandingPage';
import NewsDesc from './pages/NewsDesc';
import PostedNews from './pages/PostedNews';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/add' element={<AddNews />} />
          <Route path='/posted' element={<PostedNews />} />
          <Route path='/newsdesc/:newsid' element={<NewsDesc />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// export const ProtectedRoute = (children) => {
//   if (localStorage.getItem('shreyNews-users')) {
//     return children
//   } else {
//     return <Navigate to='/' />
//   }
// }
