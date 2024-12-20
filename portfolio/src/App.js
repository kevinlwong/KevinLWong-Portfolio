import "./App.css";
import React from "react";
// import CallButton from './CallButton'; // Import the CallButton component
// import './CallButton.css'; // Import CSS for styling
// import './utilities.css';
import "./styles.css";
import Sidebar from "./Sidebar";
import profilePic from "./assets/images/ProfilePicofKevinWong.jpg";
import kevinArt from "./assets/images/kevinart.JPG";
import twitterIcon from "./assets/images/bw twitter.jpeg";
import duolingoIcon from "./assets/images/duolingo icon.png";
import facialExpressions from "./assets/images/facial_expressions.jpg";
import patchPal from "./assets/images/patchPal.webp";
import spotifyIcon from "./assets/images/spotify.jpeg";
import faIcon from "./assets/images/fa.jpg";
import githubIcon from "./assets/images/github.jpeg";
import linkedinIcon from "./assets/images/linkedin.png";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        {/* Hero Section */}
        <div id="home" className="hero flex items-centre justify-between">
          <div className="left flex-1 justify-center">
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="right flex-1">
            <h1>Kevin Wong</h1>
            <h2>
              Computer Science Student & <br />{" "}
              <span>Aspiring Software Engineer</span>
            </h2>
            <p>
              Hey there! I'm Kevin Wong, a passionate 4th year Computer Science
              major at Cal Poly Pomona, specializing in full-stack development.
              I love turning complex problems into elegant solutions and
              bringing ideas to life through code. Whether it's building robust
              web applications, designing intuitive user interfaces, or diving
              deep into database management, I'm always up for a challenge. I'm
              a firm believer in continuous learning and constantly seek out
              opportunities to sharpen my skills and explore new technologies.
              Check out my projects below to see what I’ve been working on! Feel
              free to reach out to me if you have any questions or just want to
              chat!
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container flex items-centre">
          <div className="left flex-1 justify-right about">
            <img src={kevinArt} width="500px" alt="profile pic" />
          </div>
          <div className="right flex-1">
            <h1>
              About <span>Me</span>
            </h1>

            <p>
              My hobbies consist of working out, kickboxing, relaxing with my
              dog, and spending time with friends and family. I also love to
              dance and I am currently the Treasurer of Cal Poly Pomona’s
              hip-hop dance team, Inner Essence Dance Company. Since I assumed
              this position, I have helped the team gain $6,500 through
              donations and fundraisers, and I am constantly in charge of our
              team’s finances, payments, and budgets.
            </p>

            <p>
              I chose my current field of study because as a child, I always
              admired my father and his work with computers. I learned that he
              majored in Computer Science at SFSU and while I was in high
              school, I decided to follow in his footsteps. In addition to this,
              my love for technology and building digital solutions that can
              help solve and deal with real-world problems motivated me even
              more to pursue this career.
            </p>

            <h2>
              What skills or experiences am I looking to gain in an internship?
            </h2>

            <p>
              I am looking to gain more collaborative and teamwork-related
              skills, technical oral and verbal communication skills, and an
              opportunity to learn from professionals in the industry while
              adapting to new working environments. I look forward to gaining as
              much knowledge as I can and using that to help my peers as well as
              those that I will serve.
            </p>

            <p>
              I chose my current field of study because as a child, I always
              admired my father and his work with computers. I learned that he
              majored in Computer Science at SFSU and while I was in high
              school, I decided to follow in his footsteps. In addition to this,
              my love for technology and building digital solutions that can
              help solve and deal with real-world problems motivated me even
              more to pursue this career.
            </p>

            <h2>
              What skills or experiences am I looking to gain in an internship?
            </h2>

            <p>
              My hobbies consist of working out, kickboxing, relaxing with my
              dog, and spending time with friends and family. I also love to
              dance and I am currently the Treasurer of Cal Poly Pomona’s
              hip-hop dance team, Inner Essence Dance Company. Since I assumed
              this position, I have helped the team gain $6,500 through
              donations and fundraisers, and I am constantly in charge of our
              team’s finances, payments, and budgets.
            </p>
          </div>
        </div>
      </section>

      {/* projects section */}

      <section id="projects" class="services">
        <div class="container">
          <h1 class="services-head">Projects</h1>
          <p>
            Here is a compilation of some of my projects! Click them to learn
            more about each one!
          </p>
          <div class="card-grid">
            <a
              href="https://github.com/kevinlwong/CS3560-Programming-Assignment-3---Mini-Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card">
                <img src={twitterIcon} alt="WIP"></img>
                <h2>Mini Twitter</h2>
                <p>
                  {" "}
                  Java-based Mini Twitter with graphical user interface using
                  Java Swing, uses the Singleton, Observer, Visitor, and
                  Composite Design Patterns, while allowing for following other
                  users and posting messages.
                  {/* messages. NEED NEW PROJECT TO BE THE FIRST ONE THEY SEE */}
                </p>
              </div>
            </a>

            <a
              href="https://github.com/kevinlwong/Duolingo-Learner-Dropoff-Prediction-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card">
                <img src={duolingoIcon} alt="Mini Twitter Logo"></img>
                <h2>Duolingo Dashboard for Learner Drop-off Prediction</h2>
                <p></p>
              </div>
            </a>

            <a
              href="https://github.com/kevinlwong/FacialExpressionClassifier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card">
                <img src={facialExpressions} alt="Mini Twitter Logo"></img>
                <h2>Facial Expression Classifier</h2>
                <p></p>
              </div>
            </a>

            <a
              href="https://github.com/kevinlwong/PatchPal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card">
                <img src={patchPal} alt="Mini Twitter Logo"></img>
                <h2>Patch Pal</h2>
                <p></p>
              </div>
            </a>

            <a
              href="https://github.com/kevinlwong/Spotify-Python-Programs-Using-Spotipy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card">
                <img src={spotifyIcon} alt="Mini Twitter Logo"></img>
                <h2>Spotify with Spotipy</h2>
                <p></p>
              </div>
            </a>

            <a
              href="https://github.com/kevinlwong/Universal-Finite-Automata-Simulator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card">
                <img src={faIcon} alt="Mini Twitter Logo"></img>
                <h2>Universal Finite Automate Simulator</h2>
                <p></p>
              </div>
            </a>

            {/* <!-- Repeat for other projects, ensuring correct image paths --> */}
          </div>
        </div>
      </section>

      <section id="more" class="more">
        <div class="container">
          <h1>Achievements</h1>
          {/* <h2>Accolades</h2> */}
          <ul>
            <li>
              <h3>Cal Poly Pomona President's Honor List | 2021-2023</h3>
              <ul>
                <li>
                  An honor in which the President recognizes students who have
                  demonstrated exceptional academic standing for the entire
                  academic year.
                </li>
              </ul>
            </li>
            <li>
              <h3>
                Cal Poly Pomona College of Science's Dean’s Lists | Fall
                2021-2023 Spring 2022-2024
              </h3>
              <ul>
                <li>
                  An honor in which the Dean of the College of Science
                  recognizes students for completing a semester at Cal Poly
                  Pomona with an outstanding Grade Point Average.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section id="more" class="socials">
        <div class="container">
          <h1>Contact Me</h1>

          {/* Additional Sections (Projects, More, etc.) go here */}
          <div className="socials">
            <a href="https://github.com/kevinlwong">
              <img src={githubIcon} width="40px" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/kevinlwong88/">
              <img src={linkedinIcon} width="40px" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
