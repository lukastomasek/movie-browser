import { Box, AppBar,Toolbar, Typography, Button, Container } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState} from "react";
import Body from './MovieList'

const theme = createTheme({
  palette:{
    secondary:{
      main: '#ab003c'
    }
  }
});

export default function Navbar({movies}){
  const [searchVal, SetSearchValue] = useState('');
  const [movie, SetMovies] = useState(movies);

  const KEY = "<<your key>>";
  const SEARCH_API = `
    https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${searchVal}&page=1&include_adult=false`;

  const searchMovie = (e) =>{
    e.preventDefault();
    SetSearchValue(e.target.value);
  };

  const getNewMovies = async() =>{
    try{
      const promise = await fetch(SEARCH_API);
      const searchedMovie = await promise.json();

      if(searchedMovie){
        if(searchVal == ''){
          SetMovies(movies);
          SetSearchValue('');
        }else{
           SetMovies(searchedMovie);
           SetSearchValue('');
        }
      }
    }catch(error){
      console.log(error.message);
    }
  };

  return(
    <ThemeProvider theme={theme}>
     <Box>
      <AppBar elevation={1}>
        <Toolbar>
            <Typography noWrap sm={{display:'none'}} variant="h4" color="primaryText" align="left">Movie Browser Engine</Typography>
                <div style={{
                  display: 'flex',
                  justifyContent:'space-between',
                  alignContent:'space-between'
                }}>
                   <input type="text" style={{
                   width: 260,
                   height: 35,
                   border: 'none',
                   outline: 'none',
                   marginLeft:50
                 }} 
                  placeholder="search for movies" required
                  onChange={(e)=> searchMovie(e)}
                 /> 
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<SearchIcon/>}
                    sx={{ml:1}}
                    onClick={()=> getNewMovies()}
                  >Search</Button>
                </div>
        </Toolbar>
      </AppBar>
    </Box>
    <Container>
        <Body movies={movie}/>
    </Container>
    </ThemeProvider>
  );
}