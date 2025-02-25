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
                    <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{height:'400px',width:'400px'}} alt="cake" srcset="" />
                </div>
            </section>
            <section className="seLeft" id="services">
                <div className="food">
                    <img src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{height:'400px',width:'400px'}} alt="cake" srcset="" />
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
                    <img src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{height:'400px',width:'400px'}}  alt="cake" srcset="" />
                </div>
            </section>

        </>
    )
}

export default About
