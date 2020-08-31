import React from 'react';
import './App.css';
import gsap from 'gsap';

function App() {
  return (
    <div className="App">
      <div id="main-container">
        <div id="nav-container">

        </div>
        <div id="content-container" class="container">
          <div id="intro-container" class="row">
            <div id="intro-button" class="button">
                <a href="#about-container">Learn more</a>
            </div>
          </div>
          <div id="about-container">
            <h3 class="heading">About Me</h3>
            <img src="profilePicture.jpg" id="profile-picture"></img>
            <div id="about-paragraph-container">
              <p>Hi! I'm Peter, an engineer based in San Francisco, CA.</p>
              <p>Since graduating Gannon University with a B.S. in Mechanical Engineering, I have worked in automotive manufacturing and biotech/pharma. Somwehere in between, I spent six months backpacking wild and remote wilderness in the U.S., but those stories will have to wait until we're around a campfire.</p>
              <p>Outside of the outdoors and art, my passion lies in building software. Here are a few of the technologies I like to use:</p>
            </div>
            <div id="about-skills-container">
              <li>Javascript (ES6+)</li>
              <li>React & Redux</li>
              <li>Java (8+)</li>
              <li>Python</li>
              <li>Node.js & Express</li>
              <li>MongoDB</li>
              <li>Adobe Illustrator</li>
              <li>Adobe After Effects</li>
            </div>
            <div id="about-photo-container">
              <a href="" id="about-photo-element"></a>
            </div>
          </div>
          <div id="career-container">
            <h3 class="heading">Where I've Worked</h3>
            <div id="career-tablist-container">
              <li>
                <button id="career-tab-01">CAI</button>
              </li>
              <li>
                <button id="career-tab-02">Mapal</button>
              </li>
              <li>
                <button id="career-tab-03">ISM Erie</button>
              </li>
              <span id="career-tablist-highlight"></span>
            </div>
            <div id="career-panel-container">
              <div id="career-panel-01">
                <h3 class="career-panel-titleCompany">
                  <span>Validation Engineer</span>
                  <span>
                    <span>&nbsp;@&nbsp;</span>
                    <a href="" class="career-panel-companyLink">CAI</a>
                  </span>
                </h3>
                <h5 class="career-panel-dates">
                  <span>Jul 2019 - Present</span>
                </h5>
                <div class="career-panel-description">
                  <ul>
                    <li>Subject Matter Expert (SME) for Biomarin Pharmaceutical’s electrical infrastructure</li>
                    <li>Built electrical system digital twin for Novato, CA manufacturing plant, increasing its digital footprint from 45% to 100%</li>
                    <li>Drove and facilitated all system changes while managing cross-functional teams</li>
                    <li>Increased quality of internal and vendor standards for electrical procedures through cause mapping and risk assessment analysis</li>
                  </ul>
                </div>
              </div>
              <div id="career-panel-02">
                <h3 class="career-panel-titleCompany">
                  <span>Mechanical Engineer</span>
                  <span>
                    <span>&nbsp;@&nbsp;</span>
                    <a href="" class="career-panel-companyLink">Mapal</a>
                  </span>
                </h3>
                <h5 class="career-panel-dates">
                  <span>Jan 2017 - Apr 2018</span>
                </h5>
                <div class="career-panel-description">
                  <ul>
                    <li>Led key account General Motors team while developing technical strategies with upper management and sales</li>
                    <li>Slashed quotation time 30% by creating a program utilizing excel and visual basic</li>
                  </ul>
                </div>
              </div>
              <div id="career-panel-02">
                <h3 class="career-panel-titleCompany">
                  <span>Mechanical Engineer</span>
                  <span>
                    <span>&nbsp;@&nbsp;</span>
                    <a href="" class="career-panel-companyLink">ISM Erie</a>
                  </span>
                </h3>
                <h5 class="career-panel-dates">
                  <span>Oct 2015 - Jan 2017</span>
                </h5>
                <div class="career-panel-description">
                  <ul>
                    <li>Reduced part classification errors by 80% with a custom program built in excel and visual basic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="projects-container">
            <h3 class="heading">Software I've Built</h3>
            <div>
              <div id="project-01">
                <h5 class="project-name">Sorting Algorithm Visualizer</h5>
                <div class="project-description">
                  <p>Interactive visualizer animating common sorting algorithms in real time. Hosted on DDNS and personal Apache web server with Linux raspberry pi.</p>
                </div>
                <ul id="project-technology-container">
                  <li class="project-technology">Javascript</li>
                  <li class="project-technology">React</li>
                  <li class="project-technology">Bootstrap</li>
                  <li class="project-technology">Apache</li>
                  <li class="project-technology">Raspberry Pi</li>
                </ul>
                <div class="project-link-container">
                  <a href="">
                    <svg></svg>
                  </a>
                  <a href="">
                    <svg></svg>
                  </a>
                </div>
              </div>
              <div id="project-02">
                <h5 class="project-name">Moon Phase Calculator</h5>
                <div class="project-description">
                  <p>Geolocation-based calculator showing moon properties for any given date and set of coordinates, such as rise/set times, phase and illumination.</p>
                </div>
                <ul id="project-technology-container">
                  <li class="project-technology">Javascript</li>
                  <li class="project-technology">React</li>
                  <li class="project-technology">Bootstrap</li>
                </ul>
                <div class="project-link-container">
                  <a href="">
                    <svg></svg>
                  </a>
                  <a href="">
                    <svg></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="photography-container">
            <h3 class="heading">Photos I'm Proud Of</h3>
            <div id="photography-description-container">
              <p>In 2018, I spent six months backpacking some of the wildest and most remote regions of the United States wilderness. These travels led me to breathtaking nature, unforgettable experiences and amazing people.</p>
              <p>These photos are a collection of those travels and everything since. Enjoy!</p>
            </div>
            <div class="photography-button">Photography</div>
          </div>
          <div id="contact-container">
            <h3 class="heading">Let's Connect</h3>
            <p>I am currently looking for new opportunities in software development and would be happy to chat about a potential fit. Whether you would like to discuess business, have some questions or just want to say hi, feel free to reach out!</p>
            <div id="contact-button">Say Hello</div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
