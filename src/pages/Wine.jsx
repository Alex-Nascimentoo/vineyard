import React from 'react'

import '../styles/css/wine.css'

import Header from '../components/Header'

function Wine() {
  return (
    <>
      <section className="toscana">
      <Header />

        <div className="container content toscana-content">
          <h1 className="title-big">Toscana</h1>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum voluptatum vero, est nostrum cum, mollitia corporis repellat ab asperiores temporibus quibusdam id. Harum nemo error aliquid alias suscipit voluptate.</p>
          <a href="/" className="link">Discover Toscana &mdash;</a>
        </div>
      </section>

      <section className="cabernet-sauvignon">
        <div className="container content cabernet-sauvignon__content">
          <h1 className="title-big">Cabernet Sauvignon</h1>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quas modi velit cupiditate beatae asperiores blanditiis nam, harum voluptatum est fugit, quod dolorum? Nisi quo reiciendis laborum illo eaque delectus.</p>
          <a href="/" className="link">Discover Cabernet Sauvignon &mdash;</a>
        </div>
      </section>

      <selection className="sauvignon-blanc">
        <div className="container content sauvignon-blanc__content">
          <h1 className="title-big">Sauvignon Blanc</h1>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut, quis a debitis expedita quasi est soluta pariatur ipsa vero? Hic aliquid ratione error enim! Modi similique deserunt in necessitatibus!</p>
          <a href="/" className="link">Discover Sauvignon Blanc &mdash;</a>
        </div>
      </selection>
    </>
  )
}

export default Wine