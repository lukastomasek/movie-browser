import { Container, Grid, Typography, Stack, } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { makeStyles } from "@mui/styles";

 const useStyles = makeStyles((theme) =>({
    card:{
      backgroundColor : theme.palette.primary.main,
      paddingBottom: theme.spacing(1),
    },
    txt:{
      color: 'white',
    },
 }));

export default function MovieList({movies}){
  const IMG_API = "https://image.tmdb.org/t/p/w500";
  const data  = movies.results;

  const styles = useStyles();
  
  return(
    <Container>
        <Grid sx={{flexGrow:1, paddingTop:20}} container spacing={2}>
           {data.map(movie=>(
            <Grid item xs={4}>
              <Masonry key={movie.id} columns={1} spacing={1}>
                <Stack
                 className={styles.card}
                >      
                  <img
                    src={IMG_API + movie.poster_path}
                    alt={movie.title}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius:4,
                      borderBottomRightRadius:4
                    }}
                  />
                  <Typography 
                  className={styles.txt}
                  color="textPrimary" 
                  align="center">{movie.title}</Typography>
                  <Typography align="left">{movie.vote_count}</Typography>
                </Stack>
              </Masonry>
            </Grid>
           ))}
        </Grid>
    </Container>
  );
}