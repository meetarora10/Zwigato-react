import React from 'react'
import './style.css'
const About = () => {
    return (
        <>
            <section className="seRight" id="about">
                <div className="para">
                    <p className="big">We build your trust.</p>
                    <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam doloremque cumque vel, eos facilis sint ad quidem fuga voluptatem ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptatum laborum quas optio consectetur velit reiciendis magni dignissimos dolorem, repellendus dolores sunt.</p>
                </div>
                <div className="food">
                    <img src="https://source.unsplash.com/random/300x400/?cake" alt="cake" srcset="" />
                </div>
            </section>
            <section className="seLeft" id="services">
                <div className="food">
                    <img src="https://source.unsplash.com/random/300x400/?burger" alt="cake" srcset="" />
                </div>
                <div className="para">
                    <p className="big">How we are different?</p>
                    <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam doloremque cumque vel, eos facilis sint ad quidem fuga voluptatem ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptatum laborum quas optio consectetur velit reiciendis magni dignissimos dolorem, repellendus dolores sunt.</p>
                </div>
            </section>
            <section className="seRight">
                <div className="para">
                    <p className="big">Available at more than 1500+ restraunts and food places.</p>
                    <p className="small">Lorem ipsum dolor sit amet consectetur adipam doloremque cumque vel, eos facilis sint ad quidem fuga voluptatem ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptatum laborum quas optio consectetur velit reiciendis magni dignissimos dolorem, repellendus dolores sunt.</p>
                </div>
                <div className="food">
                    <img src="https://source.unsplash.com/random/300x400/?pizza" alt="cake" srcset="" />
                </div>
            </section>

        </>
    )
}

export default About
