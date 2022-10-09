import '../styles/css/global.css'
import '../styles/css/home.css'

import barrel from '../assets/barrel.png'
import whiteWineGlass from '../assets/whiteWineGlass.png'

import Header from '../components/Header'

function Home() {
  return (
    <>
      <section className="hero">
        <Header />
        <div className="container content">
          <div className="title-box">
            <h1 className='hero__title title'>IMPACTANT TEXT FOR TITLE</h1>
            <p className="hero__subtitle subtitle">Right Here</p>
            <a href="/wines" className="hero__link link big-link">Meet Our Wines &mdash;</a>
          </div>

          <div className="call-to-action">
            <p className="hero__text text">
            &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non dui ut augue lobortis vulputate. Mauris nibh leo, venenatis id volutpat id, tincidunt in augue. In sit amet est sed lectus dictum interdum.
            <br /><br />
            &emsp;Nullam bibendum, lorem vel imperdiet vestibulum, lacus sapien volutpat nisl, vel dictum sem eros eu libero. Pellentesque nec neque molestie, vestibulum lectus ut, venenatis leo. Aenean convallis velit at dui tristique vulputate. Nam vitae sodales arcu. Suspendisse eget tempus leo.
            </p>
            <a href="/wines" className="hero__link link small-link">Meet Our Wines &mdash;</a>
            
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <img src={barrel} alt='Wine barrel' className='barrel' />

          <h1 className="story__title title">WHEN PASSION MEETS</h1>
          <p className="story__subtitle subtitle">Dedication</p>
          <div className="col">
            <p className="story__text text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsum, dolorum, odit quasi doloribus nisi eveniet quisquam saepe cumque velit aliquam doloremque veritatis quae animi recusandae porro asperiores sed alias aspernatur sint consectetur nostrum excepturi?</p>
            <a href="/story" className="story__link link">Discover Our Story &mdash;</a>
          </div>

          <div className="white-wine">
            <img src={whiteWineGlass} alt="Wine falling into the glass" /></div>
        </div>
      </section>

      <section className="project">
        <div className="container">
          <h1 className="title project__title">WE ARE CONSTANTLY STRIVING FOR PERFECTION</h1>
          <p className="text project__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus, iure odit earum itaque recusandae nesciunt deleniti tempore nobis eius fuga tenetur natus accusantium ab.</p>
          <a href="/" className="link project__link">Sustainable project &mdash;</a>
        </div>
      </section>
    </>
  )
}

export default Home