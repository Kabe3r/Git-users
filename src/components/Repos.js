import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {

  const { repos } = React.useContext(GithubContext);
// console.log(repos)
  // collecting all languages from repos and merging them into languages object
  const languages = repos.reduce((sum, item) => {

    const { language, stargazers_count } = item;
    // if language property is null then return
    if (!language) return sum;

    // if sum hadn't the property of language then create one and equal to an object
    if (!sum[language]) {
      sum[language] = {label: language, value: 1, stars: stargazers_count};
    } 
    // other wise keep the previous value and add the current value to it
    else {
      sum[language] = {
        ...sum[language], 
        value: sum[language].value + 1,
        stars: sum[language].stars + stargazers_count
      };
    }

    return sum;
  }, {});

  // initialize object into array && sort the values in descending order && limiting to only six languages
  const popular = Object.values(languages).sort((a,b) => {
    return b.value - a.value;
  }).slice(0, 6);

  // stars per language && overwriting value property to stars
  const mostStars = Object.values(languages).sort((a, b) => {
    return b.stars - a.stars;
  }).map(item =>{
    return {...item, value: item.stars}
  }).slice(0, 6);

  // summing stars && forks from repos in their respective objects
  let {stars, forks} = repos.reduce((sum, item) => {
    const {stargazers_count, name, forks} = item;
    
    sum.stars[stargazers_count] = { label: name, value: stargazers_count};

    sum.forks[forks] = {label: name, value: forks}
    
       return sum;
  }, {
    stars: {},
    forks: {}
  })

  // object into arrays
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();
  // console.log(forks)
  
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={popular} />
          <Column3D data={stars} />
          <Doughnut2D data={mostStars}/>
          <Bar3D data={forks}/>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
