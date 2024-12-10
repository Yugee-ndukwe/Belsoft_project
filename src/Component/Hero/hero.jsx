import React, { useEffect } from 'react';
import './hero.css';
import images from '../../Assets/images';

export default function Hero() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('slide-left')) {
                            entry.target.classList.add('animate__animated', 'animate__slideInLeft');
                        } else if (entry.target.classList.contains('slide-right')) {
                            entry.target.classList.add('animate__animated', 'animate__slideInRight');
                        }
                        // Stop observing the element after the animation is applied
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        // Select all elements to animate
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach((element) => observer.observe(element));

        // Cleanup the observer on component unmount
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section>
                <div className="container hero-container">
                    <div className="row hero-row">
                        <div className="col-10 col-lg-7 text-container animate-on-scroll slide-left">
                            <div className="text-holder">
                                <span>Join our premier monthly meetup for startup founders and tech visionaries</span>
                                <h1 className="here-title">Connect, Collaborate, Innovate!</h1>
                                <p>Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.</p>
                            </div>
                            <div className="btn-text">
                                <button>Register For Our Next Event <img src={images.RIGHT} alt="" /></button>
                                <p>Join Us for our next meetup on the 26th of July 2024</p>
                            </div>
                            <div className="d-flex flex-wrap logos">
                                <img src={images.ROUNDED_1} alt="" />
                                <img src={images.ROUNDED_2} alt="" />
                                <img src={images.ROUNDED_3} alt="" />
                                <img src={images.ROUNDED_4} alt="" />
                                <img src={images.ROUNDED_5} alt="" />
                            </div>
                            <p className="under-logo-text">Become a collaborator today</p>
                        </div>
                        <div className="col-10 col-lg-5 hero-image">
                            <div className="image-container">
                                <div className="card-1">
                                    <div className="img-text-1">
                                        <img src={images.HERO_IMG1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container founders-section">
                    <div className="row founders-row-section">
                        <div className="col-10 col-lg-5">
                            <div className="section-image">
                                <img className="parts" src={images.FOUNDERS} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-1 d-flex gap-2">
                            <div className="line">
                                <img src={images.LINE} alt="" />
                            </div>
                        </div>
                        <div className="col-10 col-lg-5 text-col animate-on-scroll slide-right">
                            <div className="text-section">
                                <h1>Who Are We?</h1>
                                <p>Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
                                <div className="d-flex gap-4 button-row">
                                    <button className="btn-arrow"> Register <img src={images.ARROW_RIGHT_LIGHT} alt="" /></button>
                                    <button className="btn-bag">Donate <img src={images.MONEY_BAG} alt="" /></button>
                                </div>
                                <span>Founder's Friday is more than just a meetup — it's a movement.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
