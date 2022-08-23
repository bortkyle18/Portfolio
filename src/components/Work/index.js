import "../../index.css"
import gitHub from "../../assets/images/github.png"


const Work = (props) => {

  return (
    <>
      <section id="workPage" className="portfolio-section">
        <h2>Work</h2>
        <article>
          <div className="sampleText" id="travelot">
            <a href="https://travelot-app.herokuapp.com/" target="_blank" rel="noreferrer">
              Travelot App
            </a>
            <div>
              <a href="https://github.com/angelagola-ko/Travelot-Destination-Planner" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>Express/MySQL/JavaScript</p>
            <br/>
            <br/>
            <h5>This application makes travel planning easier and also lets you cherish past traveling memories. Plan your trip, add to your wishlist, and save your memories.</h5>
          </div>
          <div className="sampleText" id="note-taker">
            <a href="https://young-meadow-06036.herokuapp.com/" target="_blank" rel="noreferrer">
              Note Taker
            </a>
            <div>
              <a href="https://github.com/bortkyle18/note-taker" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>Express</p>
            <br/>
            <br/>
            <h5>An application that can be used to write, save, and delete notes using node.js and express.js.</h5>
          </div>
          <div className="sampleText" id="social-networking-nosql">
            <a href="https://github.com/bortkyle18/social-network-api-nosql" target="blank" rel="noreferrer">
              Social Network Database
            </a>
            <div>
              <a href="https://github.com/bortkyle18/social-network-api-nosql" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>Mongodb/Mongoose</p>
            <br/>
            <br/>
            <h5>An API for a social network web application where users can share their thoughts, react to their friends' thoughts, and create a friend list.</h5>
          </div>
          <div className="sampleText" id="employee-tracker">
            <a href="https://github.com/bortkyle18/employee-tracker" target="blank" rel="noreferrer">
              Employee Tracker
            </a>
            <div>
              <a href="https://github.com/bortkyle18/employee-tracker" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>Node/SQL</p>
            <br/>
            <br/>
            <h5>A command-line application for managing a company's employees using node, inquirer, and MySQL.</h5>
          </div>
          <div className="sampleText" id="run-buddy">
            <a href="https://bortkyle18.github.io/run-buddy/" target="blank" rel="noreferrer">
              Run Buddy
            </a>
            <div>
              <a href="https://github.com/bortkyle18/run-buddy" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>HTML/CSS</p>
            <br/>
            <br/>
            <h5>This is a professional web-friendly designed website for a fictional business called Run Buddy Inc that offers personal training services.</h5>
          </div>
        </article>
      </section>
    </>
  )
}

export default Work