import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';

const UserDetailsPage = () => {
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
    <div className='userdetailed-page container'>
      <div className="card text-white bg-dark">
  <h5 className="card-header">User - {userLogin.name}</h5>
  <img src={userLogin.avatar_url} className="card-img-top" alt={userLogin.avatar_url} />
  <div className="card-body">
    <h5 className="card-title">User Name: {userLogin.login}</h5>
    <section className='summary-wrap'>
    <section className='summary'>
    {userLogin.location && <p className="card-text">Location: {userLogin.location}</p>}
    {userLogin.email && <div className="card-text">Email: {userLogin.email}</div>}
    {userLogin.company && <div className="card-text">Company: {userLogin.company}</div>}
    </section>
    <section className='summary'>
    <p className="card-text">Followers: {userLogin.followers}</p>
    <p className="card-text">Following: {userLogin.following}</p>
    </section>
    <section className='summary'>
    <div className="card-text">Public Repos: {userLogin.public_repos}</div>
    <div className="card-text">Public Gists: {userLogin.
public_gists}</div>
    </section>
    <section className='summary'>
    <div className="card-text">Subscription Url: <a href={userLogin.subscriptions_url}>{userLogin.subscriptions_url}</a> </div>
    <div className="card-text">Organizations Url: <a href={userLogin.
organizations_url}>{userLogin.
  organizations_url} </a></div>
    </section>
    {/* <section className='summary'>
    <div className="card-text">Followers Url: <a href={userLogin.followers_url}>{userLogin.followers_url}</a> </div>
    <div className="card-text">Following Url: <a href={userLogin.
following_url}>{userLogin.
  following_url} </a></div>
    </section> */}
    </section>
  </div>
</div>
    </div>
  )
}

export default UserDetailsPage
