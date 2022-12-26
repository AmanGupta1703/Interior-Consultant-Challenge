import React from 'react'

export default function Main() {
    return (
        <section className="main-content">
            <div className="top-wrapper">
                <h1 className="main-title">Modern interior</h1>
                <p className="main-text">A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>

                <p>
                    <a className="read-more" href="">Read more</a>
                </p>
            </div>
            
            <div className="bottom-wrapper">
                <img src="../images/hero-image.png" className="hero-img" />

                <div className="card" id="card">

                    <div className="user-info">
                        <img src="../images/avatar.png" className="left-img" />
                        <div className="user-info-body">
                            <h4 className="name">Aliza Webber</h4>
                            <p className="position">Interior designer</p>
                        </div>
                    </div>
                    <h3 className="design-by">Designed in 2020 by Aliza Webber</h3>
                </div>
            </div>

        </section>
    )
}