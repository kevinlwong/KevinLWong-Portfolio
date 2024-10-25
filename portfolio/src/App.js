import './App.css';
import React from 'react';
// import CallButton from './CallButton'; // Import the CallButton component
// import './CallButton.css'; // Import CSS for styling
// import './utilities.css';
import './styles.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        {/* Portfolio Header Section */}
        <div className="container">
          <nav className="flex items-center justify-between">
            <div className="left flex justify-right">
              {/* <div className="logo"> */}
                {/* <img src="./images/bronco.jpg" width="50px" alt="logo" /> */}
              {/* </div> */}
              {/* <div>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#more">More</a>
              </div> */}
            </div>
            {/* <div class="right"> */}
                    {/* <button class="btn btn-primary">Contact</button>
                    <a class="btn btn-primary" href="mailto:your-email@example.com">Contact Me</a> */}
                    {/* <button class="btn btn-primary" */}
                        {/* onclick="window.location.href='mailto:kevinwong973@gmail.com'">Contact Me</button> */}
                {/* </div> */}

            <div className="right">
              {/* Add the CallButton component here */}
              {/* <CallButton /> */}
            </div>
          </nav>
        </div>

        {/* Hero Section */}
        <div id="home" className="hero flex items-centre justify-between">
          <div className="left flex-1 justify-center">
            <img src="./images/ProfilePicofKevinWong.JPG" alt="Profile" />
          </div>
          <div className="right flex-1">
            <h1>Kevin Wong</h1>
            <h2>
              Computer Science Student & <br /> <span>Aspiring Software Engineer</span>
            </h2>
            <p>
              Hey there! I'm Kevin Wong, a passionate 4th year Computer Science major at Cal Poly Pomona, specializing in
              full-stack development. I love turning complex problems into elegant solutions and bringing ideas to life
              through code. Whether it's building robust web applications, designing intuitive user interfaces, or diving
              deep into database management, I'm always up for a challenge. I'm a firm believer in continuous learning and
              constantly seek out opportunities to sharpen my skills and explore new technologies. Check out my projects
              below to see what I’ve been working on! Feel free to reach out to me if you have any questions or just want
              to chat!
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container flex items-centre">
          <div className="left flex-1 justify-right">
            <img src="./images/kevinart.JPG" width="500px" alt="profile pic" />
          </div>
          <div className="right flex-1">
            <h1>
              About <span>Me</span>
            </h1>
            
            <p>
  My hobbies consist of working out, kickboxing, relaxing with my dog, and spending time with friends
  and family. I also love to dance and I am currently the Treasurer of Cal Poly Pomona’s hip-hop dance
  team, Inner Essence Dance Company. Since I assumed this position, I have helped the team gain $6,500
  through donations and fundraisers, and I am constantly in charge of our team’s finances, payments,
  and budgets.
</p>

<p>
  I chose my current field of study because as a child, I always admired my father and his
  work with computers. I learned that he majored in Computer Science at SFSU and while I was in high school, I
  decided to follow in his footsteps. In addition to this, my love for technology and building digital solutions that can help solve
  and deal with real-world problems motivated me even more to pursue this career.
</p>

<h2>What skills or experiences am I looking to gain in an internship?</h2>

<p>
  I am looking to gain more collaborative and teamwork-related skills, technical oral and verbal
  communication skills, and an opportunity to learn from professionals in the industry while adapting
  to new working environments. I look forward to gaining as much knowledge as I can and using that to
  help my peers as well as those that I will serve.
</p>

<p>
  I chose my current field of study because as a child, I always admired my father and his
  work with computers. I learned that he majored in Computer Science at SFSU and while I was in high
  school, I decided to follow in his footsteps. In addition to this, my love for technology and building digital solutions that can help
  solve and deal with real-world problems motivated me even more to pursue this career.
</p>

<h2>What skills or experiences am I looking to gain in an internship?</h2>

<p>
  My hobbies consist of working out, kickboxing, relaxing with my dog, and spending time with friends
  and family. I also love to dance and I am currently the Treasurer of Cal Poly Pomona’s hip-hop dance
  team, Inner Essence Dance Company. Since I assumed this position, I have helped the team gain $6,500
  through donations and fundraisers, and I am constantly in charge of our team’s finances, payments,
  and budgets.
</p>



          </div>
        </div>
      </section>

      <section id="projects" class="services">
  <div class="container">
    <h1 class="services-head">Projects</h1>
    <p>Here is a compilation of some of my projects! Click them to learn more about each one!</p>
    <div class="card-grid">
    <a href="https://github.com/kevinlwong/CS3560-Programming-Assignment-3---Mini-Twitter" target="_blank" rel="noopener noreferrer">

        <div class="card">
          <img src="../public/images/bw twitter.jpeg" width="40px" alt="Mini Twitter Logo"></img>
          <h2>Mini Twitter</h2>
          <p>Java-based Mini Twitter with graphical user interface using Java Swing, uses the Singleton,
            Observer, Visitor, and Composite Design Patterns, while allowing for following other users and posting
            messages.
          </p>
        </div>
      </a>
      {/* <!-- Repeat for other projects, ensuring correct image paths --> */}
    </div>
  </div>
</section>

      
      {/* Additional Sections (Projects, More, etc.) go here */}
      <div className="socials">
  <a href="https://github.com/kevinlwong">
    <img src="./images/github.jpeg" width="40px" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/kevinlwong88/">
    <img src="./images/linkedin.png" width="40px" alt="LinkedIn" />
  </a>
</div>
      
    </div>
  );
}

export default App;
