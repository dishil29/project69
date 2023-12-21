import "./index.css"
import React from 'react';
import pics from './pics.jpg';

const About = () => {
  return ( 
    <div className="about">
      <h2> About </h2>
      <div className="intro">
        <div className="img"> <img src={pics} alt="Profile photo" /></div>
        <article>
          <p>My name is Dishil Zalavadiya.</p>
          <p>I am a first year Undergraduate Student in the <br/> department of Mechanical Engineering enrolled in it's Dual Degree course.</p>
          <p>I am a boarder of Gokhale hall of Residence.</p>
          <p>I am from Ahmedabad Gujarat.</p>
        </article>
      </div>
    </div>
   );
}
 
export default About;
