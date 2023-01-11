import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
      bg: 'linear-gradient(to bottom,#ff73b9,#ff40a1)',
      fontColor: '#ff40a1'
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'followers',
      value: followers,
      color: 'green',
      bg: 'linear-gradient(to bottom,#47c2d7,#279eb2)',
      fontColor: '#279eb2'
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'following',
      value: following,
      color: 'purple',
      bg: 'linear-gradient(to bottom,#9b5de5,#7209b7)',
      fontColor: '#7209b7'
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
      bg: 'linear-gradient(to bottom, #fb9b88,#f86647)',
      fontColor: '#f86647'
    },
  ];

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ icon, label, value, color, bg, fontColor }) => {
  return (
    <article className='item'>
    <div className="card-front">
    <div className="card-front_tp card-icon" style={{background: `${bg}`}}>
      <span className={color}>{icon}</span>
        <h3>{value}</h3>
    </div>
    </div>
    <div className="card-front_bt">
        <p style={{color: `${fontColor}`}} >{label}</p>
    </div>
    </article>
  );
};


const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  gap: 1rem 2rem;
  width: 100%;
  height: 100%;
  @media (min-width: 1220px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  .item {
    box-shadow: -.1rem 1.7rem 6.6rem -3.2rem rgba(0,0,0,0.5);
    height: 12rem;
    position: relative;
    transition: all 1s ease;
    width: 15rem;

      .card-front {
        background: #fff;
        height: 12rem;
        width: 15rem;
      }
      .card-front_tp {
        align-items: center;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%);
        display: flex;
        flex-direction: column;
        height: 9rem;
        jusitfy-content: center;
        padding: 0.75rem;
      }
      .card-icon {
        background: linear-gradient(to bottom,#ff73b9,#ff40a1);
      }
      .card-front_bt {
        position: absolute;
        bottom: -8px;
        text-align: center;
        left: 0;
        right: 0;

        p {
          font-size: 1.2rem;
          text-transform: capitalize;
          font-weight: bold;
          letter-spacing: 4px;
        }
      }
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-top: 1.2rem;
      color: #fff;
      letter-spacing: 0;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
