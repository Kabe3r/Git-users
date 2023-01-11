import React from 'react';
import { GithubContext } from '../context/context';
import Bg from '../images/card-bg.jpg';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {bio, blog, company, location, twitter_username, name, avatar_url, html_url } = githubUser;


  return (
    <Wrapper>
        <img src={avatar_url} alt={name} />
      <header>
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || 'chuck norris'}</p>
        </div>
        <a href={html_url}>follow</a>
      <p className='bio'>{bio}</p>
      <div className="links">
        <p>
        <MdBusiness />
        {company}
        </p>
        <p>
          <MdLocationOn />
          {location || 'pluto'}
        </p>
        <a href={`https://${blog}`}>
        <MdLink />
        {blog}
        </a>
      </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1.5rem 2rem;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 500px;
  box-shadow: 
    0px 30px 30px -20px rgba(0,0,0,1), 
    inset 0 0 0 1000px rgba(67,52,109,.6);
  transition: all .4s cubic-bezier(.37,.26,.35,1);
  
  &:hover {
    box-shadow: 
    0px 30px 30px -20px rgba(0,0,0,.9), 
    inset 0 0 0 1000px rgba(67,52,109,.2);
  }
  &:hover img {
    animation: none;
    box-shadow: 0;
    height: 150px;
    width: 150px;
  }
  &:hover header {
    opacity: 1;
    bottom: 0;
  }
    img {
      height: 120px;
      width: 120px;
      transition: all .4s cubic-bezier(.37,.26,.35,1);
      animation: circleAn 4s infinite;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 30%;
      right: 0; 
      margin: auto;
      background-size: cover;
      background-position: center center;
      border-radius: 100%;
      box-shadow:  30px 30px -25px rgba(0,0,0,0.6);
      }
@keyframes circleAn {
  0%   { 
    box-shadow:
      0px 30px 30px -25px rgba(0,0,0,0.6), 
      0px 0px 0px 0px rgba(102,52,105,1), 
      0px 0px 0px 0px rgba(102,52,105,.7),
      0px 0px 0px 0px rgba(102,52,105,.5);
  }
 100% { 
   box-shadow:
     0px 30px 30px -25px rgba(0,0,0,0.6), 
     0px 0px 0px 70px rgba(102,52,105,0),
     0px 0px 0px 200px rgba(102,52,105,0),
     0px 0px 0px 300px rgba(102,52,105,0);
  }
}
  header {
    transition: all .5s cubic-bezier(.37,.26,.35,1);
    opacity: 0;
    position: absolute; 
    bottom: 20px; 
    width: 100%;
    
    
    h4 {
      color:#fff;
      padding:0;
      margin:0;
    }
    p {
      color:#aaa;
      padding:0;
      margin: 2px 0 20px 0; 
      font-size: 0.9rem;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: #fff;
    font-weight: bold;
    margin-top: 12px;
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      &:hover {
        background: transparent;
      }
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
