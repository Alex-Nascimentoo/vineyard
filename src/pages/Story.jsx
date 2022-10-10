import React from 'react'

import Header from '../components/Header'
import '../styles/css/story.css'

import woman from '../assets/woman.png'

function Story() {
  return (
    <>
      <section className="legend">
        <Header />

        <div className="container legend__content">
          <h1 className="title">THE LEGEND IS TRUE...</h1>

          <p className="text">&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus dolor porro quasi consequuntur temporibus modi consequatur aliquam. Voluptate, sequi optio. Consectetur harum exercitationem iusto odio perferendis placeat repellendus quibusdam.</p>

          <a href="/" className="link">Scroll to Explore</a>
        </div>
      </section>

      <section className="first-part">
        <div className="container first-part__content">
          <h1 className="title">FIRST PART</h1>
          <p className="subtitle first-part__subtitle">Love For Wine</p>

          <div className="text-wrapper">
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae inventore impedit dignissimos aut similique assumenda laudantium quo enim, commodi sunt consectetur eligendi quos qui sit quae expedita earum! Libero aut ut adipisci sint odio. Eaque ratione blanditiis saepe doloremque quidem dicta ex cumque nesciunt, illum adipisci nisi nihil minima.</p>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae inventore impedit dignissimos aut similique assumenda laudantium quo enim, commodi sunt consectetur eligendi quos qui sit quae expedita earum! Libero aut ut adipisci sint odio. Eaque ratione blanditiis saepe doloremque quidem dicta ex cumque nesciunt, illum adipisci nisi nihil minima.</p>
          </div>
        </div>
      </section>

      <section className="second-part">
        <div className="container second-part__content">
          <h1 className="title">SECOND PART</h1>
          <p className="subtitle second-part__subtitle">The Dedication</p>

          <div className="text-wrapper">
            <img src={woman} alt="woman" className='woman-pic' />

            <p className='text woman-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, optio nisi, cupiditate quasi aperiam vel alias minus, eum aspernatur nobis voluptatum asperiores cumque repellendus laudantium quis veniam id ut dignissimos?
            <br /> <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet neque architecto odio enim eligendi quia itaque, numquam molestiae? Eos vitae necessitatibus sunt facere tenetur maiores libero beatae incidunt eveniet ea!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Story