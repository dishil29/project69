import React from 'react';
import proj from "./proj.webp";

const Project = () => {
  return ( 
    <div>
      <div className="Project">
        <h2> Projects </h2>
        <div className="item1"> 
          <div> <img src={proj} alt="project" /> </div>
          <p> It was a Portfolio webpage. The main skills that were used are CSS and HTML. This was my first responsive web-page. <br/> <br />
          <span> <a href="https://dishil29.github.io/dishil.github.io/">Project 1</a></span> </p>
        </div>
        <div className="item2">
          <p> It was one of my first webpage. I learnt basic HTML and CSS to make this one. It was a small form having input fields of various types. <br/> <br />
        <span><a href="https://dishil29.github.io/demo/">Project 2</a></span> </p>
          <div> <img src={proj} alt="project" /></div> 
        </div>
      </div>
      <div className="Skills">
        <h3> Skills </h3>
        <p> Leadership Qualities. <br/>
            Skills in Web Development<br/>
            Problem solving abilities. <br />
            Improving continously  to achieve better results. <br/>
            Good Communication Skills.
        </p>
      </div>
    </div>
   );
}
 
export default Project;