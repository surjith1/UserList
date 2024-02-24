import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const UserListPage = () => {
  const [userLogin, setUserLogin] = useState([])
  let {login}=useParams();
  useEffect(()=>{
    async function getUserByLogin() {
        const response = await axios.get(`https://api.github.com/users/${login}`);            
        setUserLogin(response.data);
      }
      getUserByLogin();
},[])
console.log(userLogin);
  return (
    <div className='user-list-page container'>
     <div className="card">
  <h5 className="card-header">User Info</h5>
  <img src={userLogin.avatar_url} className="card-img-top" alt={userLogin.avatar_url} />
  <div className="card-body">
    {userLogin.name ? <h5 className="card-title">Full Name: {userLogin.name}</h5> : <h5 className="card-title">User Name: {userLogin.login}</h5>}
    {userLogin.location && <p className="card-text">Location: {userLogin.location}</p>}
    <Link to={`/user-details/${userLogin.login}`} className="btn btn-primary">More Details</Link>
  </div>
</div>
      
    </div>
  )
}

export default UserListPage
