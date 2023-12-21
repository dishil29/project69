import React from 'react';
import './index.css';
import prof from './prof.jpg';

const Home = () => {
  return (  
    <div className="home">
      <div className="homeIntro">
        <p className="homeP1">Hi There</p>
        <p className="homeP2">I'm  <span> Dishil Zalavadiya</span></p>
        <p className="shortIntro"> Enthusiastic and results-focused person with a passion for problem-solving and learning new things.</p>
      </div>
      <div className="photo">
        <img src={prof} alt="Photo self" />
      </div>
    </div>
  );
}

export default Home;