import Hero from "../Hero/hero";
import MyNav from "../Navbar/navbar";
import Main from "../Main/main";
import Footer from "../Footer/footer";

export default function Home(){
    return(
        <>
            <MyNav/>
            <Hero/>
            <Main/>
            <Footer/>
            {/* <Main/> */}
        </>
    )
}