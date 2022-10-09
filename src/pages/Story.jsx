import React from 'react'

import Header from '../components/Header'
import '../styles/css/story.css'

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
        <div className="container second-part__content"></div>
      </section>
    </>
  )
}

export default Story