import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';
const Search = () => {
  const [user, setUser] = React.useState('');
  const { requests, error, searchGithubUser, loading } = React.useContext(GithubContext);

  // get things from global context
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  }

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {error.show && <ErrorWrapper>
          <p>{error.msg}</p>
        </ErrorWrapper>
        }
        <h3>requests : {requests} / 60</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <input type='text' placeholder='Search' value={user} onChange={(e) => setUser(e.target.value)} />
            {requests > 0 && !loading && (<button type='subimt'>
              <MdSearch />
            </button>)}
          </div>
        </form>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  @media (min-width: 1220px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h1 {
      padding: 0 0.5rem;
    }
  }

  h3{
    grid-row-start: 2;
  }



  .form-control {
    overflow: hidden;
    float: right;
    height: 4em;
    width: 4em;
    border-radius: 2em;
    box-shadow: 0 0 5px #fff;
    transition: all 0.35s;

    &:hover, &:focus, &:focus-within {
      width: 48em;
      border-radius: 5px 2rem 2rem 5px;
      outline: none;
    @media (max-width: 830px) {
       width: 20em;
    }
    input {
      display: inline-block;
      width: 32em;
      padding: 10px;
    @media (max-width: 830px) {
       width: 12em;
    }
    }
    } 
  }  

    input {
      appearance: none;
      float: left;
      width: 0em;
      height: 2em;
      margin: 1rem;
      margin-right: -4.5rem;
      background: #fff;
      color: #ff006e;
      font-size: 1rem;
      font-weight: 600;
      padding: 0px;
      border: 0;
      border-radius: 5px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2) inset;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
      transition: all 0.25s;
      &:focus {
      outline: none;
      box-shadow: 0 -1px 1px rgba(255, 255, 255, 0.25), 0 1px 5px rgba(0, 0, 0, 0.15);
     }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      float: right;
      width: 1.75em;
      height: 1.75em;
      margin: 3.5px;
      background: #ff006e;
      text-align: center;
      font-size: 2rem;
      color: #fdf6e3;
      border: 0;
      border-radius: 50%;
      box-shadow: 0 -1px 1px rgba(255, 255, 255, 0.25), 0 1px 1px rgba(0, 0, 0, 0.25);
      text-shadow: 0 -2px 1px rgba( 0, 0, 0, 0.3);
      cursor: pointer;
    @media (max-width: 800px) {
       width: 1.5em;
       height: 1.5em;
    }
      &:active {
        border: 0 !important;
        text-shadow: 0 0 0; 
      }
       
    }
  
  h3 {
    margin-bottom: 0;
    color: var(--clr-white);
    font-weight: 400;
    background: linear-gradient(to right, #0052d4, #4364f7, #6fb1fc);
    position: absolute;
    padding: 1rem 2rem;
    border-radius: 6px;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
    text-align: center;
    font-size: 1.5rem;
  }
`;
export default Search;
