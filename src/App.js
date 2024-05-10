import './App.css';
import SearchAppBar from './components/SearchAppBar';
import TourCard from './components/TourCard';
// import Container from '@mui/material/Container';
import { Grid, Container } from '@mui/material';


function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <Container sx={{marginY: 5}}>
          <Grid container spacing={3}>
             <TourCard/>
             <TourCard/>
             <TourCard/>
             <TourCard/>
          </Grid>
        
      </Container>
    </div>
  );
}

export default App;
