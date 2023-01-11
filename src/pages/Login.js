import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { FaGithubSquare } from 'react-icons/fa';
import loginImg from '../images/login-img.png';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <Wrapper>
    <div className="container">
      <img src={loginImg} alt="github user" />
      <button onClick={loginWithRedirect} >
      <FaGithubSquare className='git' />
      <span>Login/Signup</span>
      </button>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(to right, #1e5799 0%,#ff006e 19%,#76dd2c 40%,#ffecd1 60%,#e02cbf 83%,#1e5799 100%); 
  background-size: 100000px 100%;
  animation: bg 15s linear infinite;

  @keyframes bg {
    0%{
      background-position-x: 0;
    }
    100%{
      background-position-x: 100000px;
    }
  }

  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }

  img {
    margin-bottom: 2rem;
    border-radius: 10px;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  button {
    over-flow: hidden;
    transition: all 500ms ease-in-out;
    max-width: 105px;
    white-space: nowrap;
    background-color: #18191f;
    color: #ffffff;
    box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080, 
      2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,
      inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
      inset 2px 2px 10px #00000080;
    border-radius: 29px;
    padding: 19px 19px 0;
    cursor: pointer;
    text-transform: uppercase;
    font-family: auto;
    letter-spacing: 6px;
    .git {
      font-size: 4rem;
    }
    span {
      opacity: 0;
      text-indent: -6px;
      display: inline-block;
      transition: all 500ms ease-in-out;
      display: flex;
    }
    &:hover {
      max-width: 500px;
      transition: all 300ms ease-in-out;
      color: white;
  
      span {
        opacity: 1;
        text-indent: 10px;
        transition: all 400ms ease-in-out;
        padding: 5px 0;
        font-size: 1.5rem;
      }
    }

  }
`;
export default Login;
