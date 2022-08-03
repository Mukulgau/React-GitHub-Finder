import React from 'react';

const Users = (props) => {
  return (
    <div className="outer-wrapper">
      <div className="card-wrapper">
        <img 
          src={props.avatar_url} 
          alt="userImg" 
          className="user-img" 
        />
        <div className="text-content">
          <h2 className="text-name">
            {props.login}
          </h2>
            <button  
              className="view-btn">
              View
            </button>
        </div>
      </div>
    </div>
  )
}

export default Users;