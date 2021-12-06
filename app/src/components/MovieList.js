import { Container, Grid, Typography, Stack, } from "@mui/material";
import Masonry from '@mui/lab/Masonry';


export default function MovieList({movies}){
  const IMG_API = "https://image.tmdb.org/t/p/w500";
  const data  = movies.results;
  
  return(
    <Container>
        <Grid sx={{flexGrow:1, paddingTop:20}} container spacing={2}>
           {data.map(movie=>(
            <Grid item xs={4}>
              <Masonry key={movie.id} columns={2} spacing={1}>
                <Stack>      
                  <img
                    src={IMG_API + movie.poster_path}
                    alt={movie.title}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius:4,
                      borderBottomRightRadius:4
                    }}
                  />
                  <Typography>{movie.title}</Typography>
                </Stack>
              </Masonry>
            </Grid>
           ))}
        </Grid>
    </Container>
  );
}