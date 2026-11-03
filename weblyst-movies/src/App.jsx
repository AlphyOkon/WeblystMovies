import './App.css';

import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import MovieCard from './components/MovieCard.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route> 
         <Route path="/Header" element={<Header />}></Route> 
        <Route path="/moviedetails" element={<MovieDetails />}></Route>
          <Route path="/moviedetails" element={<MovieDetails />}></Route>
      </Routes>


      <Footer />

    </div>
  );
}

export default App;