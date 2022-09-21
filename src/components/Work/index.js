import "../../index.css"
import gitHub from "../../assets/images/github.png"


const Work = (props) => {

  return (
    <>
      <section id="workPage" className="portfolio-section">
        <h2>Work</h2>
        <article>
          <div className="sampleText" id="book-den">
            <a href="https://glacial-ridge-11514.herokuapp.com/" target="blank" rel="noreferrer">
              The Book Den
            </a>
            <div>
              <a href="https://github.com/bortkyle18/book-den" target="_blank" rel="noreferrer" className="gitLink">
                <img src={ gitHub } alt="github logo"/>
              </a>
            </div>
            <p>MERN Stack</p>
            <br/>
            <br/>
            <h5>A social media website for book lovers. Keep your own Library consisting of wishlist books, favorite books, and other books on your bookshelf. Leave reviews and comment on reviews with your thoughts!</h5>
          </div>
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
        </article>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>In Development</h2>
        <article>
          <div className="sampleText" id="leonard-maltin-game">
              <a href="https://theleonardmaltingame.herokuapp.com/" target="blank" rel="noreferrer">
                The Leonard Maltin Game
              </a>
              <div>
                <a href="https://github.com/bortkyle18/leonard-maltin-game" target="_blank" rel="noreferrer" className="gitLink">
                  <img src={ gitHub } alt="github logo"/>
                </a>
              </div>
              <p>MERN Stack</p>
              <br/>
              <br/>
              <h5>A movie trivia app in which users can test their knowledge of movies with fun public categories. Sign up to be able to create your own categories and add friends to gain access to categories they have created.</h5>
            </div>
          </article>
          <br/>
          <br/>
        </section>
    </>
  )
}

export default Work