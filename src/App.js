import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListView from './components/UserListView';
import UserListPage from './components/UserListPage';
import UserDetailsPage from './components/UserDetailsPage';
import axios from 'axios';

function App() {
  const [users, setUsers]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [offset, setOffset]= useState(0)

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.github.com/users");            
      setUsers(response.data);
    } catch (error) {
      throw(error)
    } finally {
      setIsLoading(false);
    }
  };
console.log("users Count:", users.length);
  useEffect(()=>{
      fetchData();
  },[])
  
    // const handleScroll = () => {
    //   console.log("working");
    //   if (
    //     window.innerHeight + document.documentElement.scrollTop !==
    //       document.documentElement.offsetHeight ||
    //     isLoading
    //   ) {
    //     return;
    //   }
    //   fetchData();
    // };

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
      console.log("working");
      if (currentHeight + 1 >= scrollHeight) {
        setOffset(offset + 5)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="App">
   <BrowserRouter>

      <Routes>
        <Route path="/" element={<UserListView users={users} isLoading={isLoading} />} />
        <Route path={`/user/:login`} element={<UserListPage />} />
        <Route path='/user-details/:login' element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
