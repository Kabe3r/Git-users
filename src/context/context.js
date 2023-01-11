import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

// Provider, Consumer -  GithubContext.Provider

const GithubProvider = ({ children }) => {
      const [githubUser, setGithubUser] = useState(mockUser);
      const [repos, setRepos] = useState(mockRepos);
      const [followers, setFollowers] = useState(mockFollowers);
      // request loading
      const [requests, setRequests] = useState(0);
      const [loading, setLoading] = useState(false);
      // error
      const [error, setError] = useState({
            show: false,
            msg: '',
      })

      const searchGithubUser = async (user) => {
            toggleError();
            setLoading(true);
            // fetch users
            const response = await axios(`${rootUrl}/users/${user}`)
            .catch(err => console.log(err));
            
            if (response) {
                  setGithubUser(response.data);
                  const { login, followers_url} = response.data;
                  // fetch repositories
                  await axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(data => setRepos(data.data));
                  // fetch followers
                  await axios(`${followers_url}?per_page_100`).then(data => setFollowers(data.data))
                  
            } else {
                  toggleError(true, 'User not found');
            }
            checkRequests();
            setLoading(false);
      }
      // check limit
      const checkRequests = () => {
            axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                  let { rate:{ remaining } } = data;
                  setRequests(remaining);
                  if (!remaining) {
                        toggleError(true, 'sorry, you have exceeded your hourly rate limit!');
                  }
            })
            .catch(err => console.log(err));
      }

      function toggleError(show = false, msg = '') {
            setError({show, msg});
      }
      // error
      // console.log(githubUser)
      useEffect(checkRequests, [requests]); 
      return (
            <GithubContext.Provider value={{
                  githubUser,
                  repos,
                  followers,
                  requests,
                  error,
                  searchGithubUser,
                  loading
            }}>
                  {children}
            </GithubContext.Provider>
      );
}

export {GithubContext, GithubProvider};