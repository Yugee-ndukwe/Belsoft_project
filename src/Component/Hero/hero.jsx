import './hero.css';
import images from '../../Assets/images';

export default function Hero(){
    return(
        <>

         <section>
         <div className="container hero-container">
                <div className="row hero-row">
                    <div className="col-10  col-lg-7 text-container">
                        <div className="text-holder">
                        <span>Join our premier monthly meetup for startup founders and tech visionaries</span>
                        <h1 className="here-title">Connect, Collaborate, Innovate!</h1>
                        <p>Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.</p>
                        </div>

                        <div className="btn-text">
                            <button>Register For Our Next Event <img src={images.RIGHT} alt="" /></button>
                            <p>Join Us for our next meetup on the 26th of July 2024</p>
                        </div>

                        <div className=" d-flex flex-wrap logos">
                            <img src={images.ROUNDED_1} alt="" />
                            <img src={images.ROUNDED_2} alt="" />
                            <img src={images.ROUNDED_3} alt="" />
                            <img src={images.ROUNDED_4} alt="" />
                            <img src={images.ROUNDED_5} alt="" />
                        </div>
                        <p className='under-logo-text'>Become a collaborator today</p>

                    </div>
                    <div className="col-10 col-lg-5 hero-image">
                        <div className="image-container">
                            <div className="card-1">
                                <div className='img-text-1'>
                                <img src={images.HERO_IMG1} alt="" />
                                {/* <p>Founder's Friday</p> */}
                                </div>
                            </div>
                            {/* <div className="card-2">
                               <div className='img-text'>
                               <img src={images.HERO_IMG2} alt="" />
                               </div>
                            </div> */}
                        </div>
                      

                        {/* <div className='second-hero-image'>
                        <div className="card-image">
                                <img src={images.HERO_IMG4} alt="" />
                                <p>Founder's Friday</p>

                            </div>
                            <div className="card">
                                <img src={images.HERO_IMG3} alt="" />
                                <p>Founder's Friday</p>

                            </div>
                        </div> */}

                </div>
                   
                </div>
            </div>

         </section>

         <section>
            <div className="container founders-section">
                <div className="row founders-row-section" >
                <div className="col-10 col-lg-5">
                            <div className='section-image'>
                             <img className='parts' src={images.FOUNDERS} alt="" />

                            </div>
                    </div>

                    <div className="col-lg-1">
                        <div className="line">
                        <img src={images.LINE} alt="" />

                        </div>
                    </div>
                
                    <div className="col-10 col-lg-5 text-col">
                        <div className="text-section">
                            <h1>Who Are We?</h1>

                            <p>Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
                            
                            <div className="d-flex gap-4  button-row">
                                <button className='btn-arrow'> Register <img src={images.ARROW_RIGHT_LIGHT} alt="" /></button>
                                <button className='btn-bag'>Donate <img src={images.MONEY_BAG} alt="" /></button>

                            </div>

                            <span>Founder's Friday is more than just a meetup — it's a movement.</span>
                        </div>

                    </div>
                </div>
            </div>
         </section>

         {/* <main>
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-lg-7">
                            <span>Founders Friday</span>
                            <h2>What Happens At Founders Friday </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>

                        </div>
                        <div className="col-10 col-lg-5">
                            <div>
                                <img src={images.FRAMES} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </main> */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-10">

                        </div>
                        <div className="col-10">
                            
                            </div>
                    </div>
                </div>
            </section>


            {/* <div className='part'>
                 <div className="row">
                    
                        <div className='image parts'>
                        <img className='parts' src={images.HERO_IMG3} alt="" />
                        </div>
                        <div>

                        </div>
                </div>           
            </div> */}
        </>
    )
}