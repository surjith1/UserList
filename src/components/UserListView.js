import React from 'react'
import "./userliststyles.css"
import { Link } from 'react-router-dom';
const UserListView = ({users, isLoading}) => {
    
  return (
    <div className='user-view-page container'>
      <h2 className='title-header'>List of Users</h2>
      <div className='grid-wrap'>
        
    
      {users.map((item)=>{
        return(
          <div className='grid-item' key={item.id}>
<Link to={`/user/${item.login}`} >
        <div className="card" style={{width:"25rem"}} >
        <img src={item.avatar_url} className="card-img-top" alt={item.avatar_url} />
        <div className="card-body">
          <h5 className="card-title">{item.login}</h5>
          <p className="card-text">Type: <strong className='text-success'>{item.type} </strong></p>
        </div>
      </div>
      </Link>
      </div>
      )
      })}
      {isLoading &&<p>Loading... </p>}
        </div>
    </div>
  )
}

export default UserListView
