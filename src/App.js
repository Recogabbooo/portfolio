import React, { useState, useEffect } from 'react';
import './App.css';
import MatrixIntro from './MatrixIntro';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, []);

return (
  <div className="App">
    <nav><ul className="navbar_ul">
      <li className="navbar_li">About_Me</li>
      <li className="navbar_li">My_Experience</li>
      <li className="navbar_li">Contact_Me</li>
      <li className="navbar_li">My_Projects</li>
      </ul>
      </nav>
    <header className="App-header">
      <img className="profile-picture" src="/portfolio.jpg"></img> 
      <p className="welcome">Welcome to my Portfolio</p>
      </header> 
      <h1> <MatrixIntro />
      </h1>
      <div>
        
        <p className="about_me">ABOUT ME</p>
        <p className="p_about_me">Hello! I'm a passionate Software Developer with one year of professional experience in creating dynamic and responsive web applications. 
          My journey in the tech world started with a deep dive into technologies like TypeScript, HTML, CSS, Angular, and Ionic, where I have built 
          several robust projects.
          Currently, I am working at Social Vibes, where I continue to enhance my skills and contribute to innovative projects. My role involves collaborating 
          with a talented team to deliver high-quality software solutions that meet user needs and business goals.
          In addition to my work experience, I am continuously expanding my technical knowledge. I am currently studying and building this portfolio using React 
          Native with JavaScript. I am also exploring cloud technologies with AWS and diving into database management with MySQL. This learning journey helps me
          stay updated with the latest industry trends and tools.
          Here’s a quick summary of the technologies I work with:
</p>
<ol>
  <ul>Languages & Frameworks: TypeScript, JavaScript, HTML, CSS, Angular, React Native</ul>
  <ul>Mobile Development: Ionic</ul>
  <ul>Cloud Services: AWS</ul>
  <ul>Database: MySQL</ul>
</ol>
      </div>
      <p className="p_about_me">I am enthusiastic about leveraging these technologies to solve real-world problems and create impactful software. 
        Thank you for visiting my portfolio, and feel free to explore my projects and get in touch!</p>
    <ul>

      <br></br>
      <br></br>
      <br></br>

      {data.map((item, index) => (
        <div key={index}>
          <ul>{item.my_description}</ul>
          <ul>{item.my_name}</ul>
          <ul>{item.my_surname}</ul>
          <ul>{item.my_phone}</ul>
          <ul>{item.my_email}</ul>
          <ul>{item.my_git}</ul>
          <ul>{item.my_linkedin}</ul>
          
        </div>
      ))}
    </ul>
  </div>
)
}
export default App;
