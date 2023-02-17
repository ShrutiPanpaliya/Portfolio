import React from 'react';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hii,My Name is Shruti Panpaliya</h2>
        <div className='prompt'>
          <h3>Every walk is a sort of crusade</h3>
          <p>A Computer Engineer with an objective to become more proficient </p>
          <i class="fa fa-github" aria-hidden="true"></i>
          <i className='fa fa-envelope' aria-hidden="true"></i>
          <i className='fa fa-linkedin' aria-hidden='true'></i>
        </div>
        
      </div>
      <div className='skills'>
        <h3>Skills</h3>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, Chartjs,Redux, HTML, CSS,AndroidStudio, BootStrap, Ant Design, StyledComponents,API call</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS,MySql,API creation</span>
          </li>
          <li className='item'>
            <h2>Programming Language</h2>
            <span> Python,Java,JavaScript,C</span>
          </li>

        </ol>

      </div>
    
      
    </div>
  );
}

export default Home;
