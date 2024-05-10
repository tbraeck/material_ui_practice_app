import './App.css';
import SearchAppBar from './components/SearchAppBar';
import TourCard from './components/TourCard';
// import Container from '@mui/material/Container';
import { Grid, Container, Typography } from '@mui/material';
import cities from "./data.json"
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <SearchAppBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
