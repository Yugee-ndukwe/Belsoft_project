import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/home';
import MyNav from './Component/Navbar/navbar';
import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>}/>
    </Routes>
   </BrowserRouter>
      {/* <MyNav/> */}

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
