// import '../Footer/footer.css'
import '../Footer/footer.css'
import images from '../../Assets/images';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';



export default function Footer(){

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
    const [isActive, setIsActive] = useState('home')
    return(
        <>
        <hr />
            <div className="container footer">
                        <div className="footer-logo">
                            <img src={images.FOOTER_LOGO} alt="" />
                            <p></p>
                        </div>
                <div className="row footer-row animate-on-scroll slide-left">
                    {/* <div className="col-10 col-lg-3 footer-logo-col">
                        <div className="footer-logo">
                            <img src={images.FOOTER_LOGO} alt="" />
                            <p></p>
                        </div>
                    </div> */}
                    <div className="col-10 col-lg-10 5 pt-5 footer-center">
                        <h3>Want To Be A Part Of Abuja’s Biggest Tech Community?</h3>
                        <div className="footer-btn py-5">
                            <button>Register For Our Next Event <img src={images.RIGHT} alt="" /></button>
                        </div>
                    </div>
                    <hr />
                    <div className="col-10 col-lg-10 d-flex justify-content-between align-items-center gap-5 py-4">
                        <div className="socials">
                            <img src={images.FB} alt="" />
                            <img src={images.IG} alt="" />
                            <img src={images.TWITTER} alt="" />
                        </div>

                        <div className=" d-flex gap-4 px-2 flex-wrap links">
                            <a href="/" 
                            className={` footer-link ${isActive === 'home' ? 'active' : '' }`}
                            onClick={() => {setIsActive('home')}}>Home</a>
                            <a href="/about" className={` footer-link ${isActive === 'about' ? 'active' : '' }`}
                            onClick={() => {setIsActive('about')}}>About</a>
                            <a href="/gallery"  className={` footer-link ${isActive === 'gallery' ? 'active' : '' }`}
                            onClick={() => {setIsActive('gallery')}}>Gallery</a>
                            <a href="/contactUs"  className={` footer-link ${isActive === 'contactUs' ? 'active' : '' }`}
                            onClick={() => {setIsActive('contactUs')}}>Contact Us</a>
                        
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}