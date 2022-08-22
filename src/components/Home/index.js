import memoji from "../../assets/images/memoji-laptop.png"
import "../../index.css"


const Home = (props) => {

  return (
    <>
      <section className="hero-jumbotron" id="home">
        <div>
            <img id="memoji" src={ memoji } alt="Kyle Bort Memoji"/>
        </div>
        <div id="intro">
            <h1 id="hi">Hello, my name is</h1>
            <br />
            <h1 id="name">Kyle Bort</h1>
            <br />
            <p id="job">Full Stack Web Developer</p>
        </div>
      </section>
      <article className="welcomeInfo">
        <h2>Welcome to my portfolio page!</h2>
        <p>
          Please use the navigation bar at the top of the page to checkout different sections of my portfolio. 
          At the bottom of each page will be links to my GitHub and LinkedIn pages if you would like to see more about me.
          If you have any questions or would like to get in touch with me directly, please navigate to the contact section where my phone and email information will be available for you.
          Thank you for visiting and I hope to hear from you!
        </p>
      </article>
    </>
  )
}

export default Home