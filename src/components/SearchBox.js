import React from 'react';
import { useState, useEffect } from 'react';
import Users from "../components/Users";

const APIURL = "https://api.github.com/users";

const SearchBox = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect (() => {
    getProfile(APIURL);
  }, []);

  const getProfile = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      fetch(APIURL + "/" + searchTerm) 
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProfiles(() => [data]);
        })

      setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <div>
        <div>
            <form className="form-wrapper" onSubmit={handleOnSubmit}>
                <input
                  className="search"
                  type="search"
                  value={searchTerm}
                  onChange={handleOnChange}
                  placeholder="Search User"   
                /> 
            </form>
          </div>
        </div>
        <div className="profile-container">
          {profiles.length > 0 && profiles.map((profile) =>
            <Users key={profile.id} {...profile} />
          )}
      </div>
    </>
  )
}

export default SearchBox;