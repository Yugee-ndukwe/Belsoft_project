// import '../Footer/footer.css'
import '../Footer/footer.css'
import images from '../../Assets/images';
import {Link} from 'react-router-dom';



export default function Footer(){
    return(
        <>
        <hr />
            <div className="container footer">
                        <div className="footer-logo">
                            <img src={images.FOOTER_LOGO} alt="" />
                            <p></p>
                        </div>
                <div className="row footer-row">
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
                    <div className="col-10 col-lg-10 d-flex justify-content-between align-items-center flex-wrap py-4">
                        <div className="socials">
                            <img src={images.FB} alt="" />
                            <img src={images.IG} alt="" />
                            <img src={images.TWITTER} alt="" />
                        </div>

                        <div className=" d-flex gap-4 px-2 flex-wrap links">
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Gallery</a>
                            <a href="/">Contact Us</a>
                        
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}