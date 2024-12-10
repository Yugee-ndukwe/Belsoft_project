import Images from '../../Assets/images';
import '../Main/main.css';

import React, { useEffect, useRef } from 'react';

export default function Main(){
    const sections = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);
    return(
        <>
            <main>
            <section>
                <div className="container happen-container">
                    <div className="row happen-row">
                        <div className="col-10 col-lg-5 happen">
                            <span>Founders Friday</span>
                            <h2>What Happens At Founders Friday </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>

                            <div className="happen-btn">
                                <button>Learn More <img src={Images.ARROW_RIGHT_LIGHT} alt="" /></button>
                            </div>

                        </div>
                        <div className="col-10 col-lg-6">
                            <div className='founders'>
                                <img src={Images.FRAMES} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container form-content-container">
                    <span>Sponsor The Next Friday</span>
                    <div className="row form-content-row">
                        <h2>Why Sponsor Founders Friday?</h2>
                        <div className="col-10 col-lg-6 rounded-col">
                            <div className='d-flex gap-3 rounded-text'>
                                <div className='dark-purple'>
                                    <h4>Networking Opportunities</h4>
                                    <p>Connect with industry leaders, founders, and potential partners.</p>
                                </div>
                                <div className='light-purple'>
                                    <h4>Community Impact</h4>
                                    <p>Support the growth and development of the startup ecosystem.</p>
                                </div>

                            </div>
                            <div className='d-flex gap-3 rounded-text'>
                                <div className='light-purple'>
                                    <h4>Brand Association</h4>
                                    <p>Align your brand with innovation and entrepreneurial success.</p>
                                </div>
                                <div className='dark-purple'>
                                    <h4>Visibility</h4>
                                    <p>Gain exposure to a targeted audience of young professionals and entrepreneurs.</p>
                                </div>

                            </div>

                        </div>
                        <div className="col-10 col-lg-6 form-col">
                            <div className='form-header'>
                                <h4>How To Sponsor</h4>
                                <span>Ready to Make an Impact?</span>

                                <p>Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday</p>
                            </div>

                            <div className="form-container">
                                <div className='d-flex  gap-4 form '>
                                    <label>
                                        Name
                                        <input type="text"placeholder='Full name' />

                                    </label>
                                    <label>
                                        Company (optional)
                                        <input type="text" placeholder='Company name' />

                                    </label>
                                </div>
                                <div className='d-flex gap-4 form'>
                                    <label>
                                    Email
                                        <input type="email"placeholder='Email address' />

                                    </label>
                                    <label>
                                    Phone
                                        <input type="phone number" placeholder='Phone number' />

                                    </label>
                                </div>
                                <button>Sponsor <img src={Images.ARROW_RIGHT_LIGHT} alt="" /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid kaduna-container">
                    <div className="row px-3 kaduna-row">
                        <div className="col-10 col-lg-6 kd-text">
                            <span>Founders Friday is coming to</span>
                            <h2>Kaduna </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                            <div>
                                <button>Register <img src={Images.ARROW_RIGHT} alt="" /></button>
                            </div>
                        </div>
                        <div className="col-10 col-lg-6">
                            <div className='kd-logo'>
                                <img src={Images.LOGO_KD} alt="" />
                            </div>
                        </div>
 
                    </div>
                </div>
            </section>

            <section>
                <div className="container rounded-image-container">
                    <div className="row rounded-image-row">
                        <div className="col-10 col-lg-10 rounded-image-col">
                            <h3>Register And Be Part of Our Community</h3>
                            <p>Join our community of over 1000+ founders, developers, and tech junkies in general.Be inspired by people who live to inspire!</p>
                            <div className="image-bg">
                                <img src={Images.ROUNDED_HEAD} alt="" />
                            </div>
                            <button>Register Now <img src={Images.ARROW_RIGHT} alt="" /></button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container f-container">
                    <div className="row g-3 f-row" >
                        <div className="col-10 col-lg-6">
                            <div className="f-image">
                                <img src={Images.F_FRIDAY} alt="" />
                            </div>
                        </div>
                        <div className="col-10 col-lg-6 f-friday-text">
                            <p>At Founder’s Friday, Every Friday Is a Learning Experience! <br />
                            <span>Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.</span></p>

                            <div className='f-btn'>
                                <button>Register <img src={Images.ARROW_RIGHT_LIGHT} alt="" /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container slides-container">
                    <div className="row gap-3 slides-row">
                        <h3>What Do Our Attendees Have To Say?</h3>
                        <span>Well See For Yourself!</span>
                        <div className='arrow'>
                            <img src={Images.ARROW_LEFT_BLACK} alt="" />
                            <img src={Images.ARROW_RIGHT_BLACK} alt="" />
                        </div>
                        <div className="col-10 col-lg-3 slides">
                            <div className='slide-img'>
                                <img src={Images.PERSON} alt="" />
                                <div className='slide-img-text'>
                                    <h5>Mr Belba Ngoy</h5>
                                    <p>Always a remarkable experience for my team and myself</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-10 col-lg-3 slides">
                        <div className='slide-img'>
                                <img src={Images.PERSON} alt="" />
                                <div className='slide-img-text'>
                                    <h5>Mr Belba Ngoy</h5>
                                    <p>Always a remarkable experience for my team and myself</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-10 col-lg-3 slides">
                        <div className='slide-img'>
                                <img src={Images.PERSON} alt="" />
                                <div className='slide-img-text'>
                                    <h5>Mr Belba Ngoy</h5>
                                    <p>Always a remarkable experience for my team and myself</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section>
                <div className="container faq-container">
                    <div className="row faq-row">
                        <h4>FAQs</h4>
                        <div className="col-10 col-lg-6 faqs">
                            <p>Lorem ipsum dolor sit amet, consectetur adi elit.<img src={Images.DROPDOWN} alt="" /></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adi elit.<img src={Images.DROPDOWN} alt="" /></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adi elit.<img src={Images.DROPDOWN} alt="" /></p>
                            

                        </div>
                        <div className="col-10 col-lg-6 faqs">
                        <p>Lorem ipsum dolor sit amet, consectetur adi elit.<img src={Images.DROPDOWN} alt="" /></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adi elit.<img src={Images.DROPDOWN} alt="" /></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adi elit.<img src={Images.DROPDOWN} alt="" /></p>



                        </div>
                    </div>
                </div>
            </section>
            </main>
        
        </>
    )
}