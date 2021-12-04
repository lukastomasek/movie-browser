import { Box, AppBar,Toolbar, Typography, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



export default function Navbar(){


  return(
    <Box>
      <AppBar elevation={1}>
        <Toolbar>
            <Typography variant="h4" color="primaryText" align="left" >Movie Browser Engine</Typography>
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
                 }} placeholder="search for movies" required /> 
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<SearchIcon/>}
                    sx={{ml:1}}
                    onClick={()=> console.log('searching')}
                  >Search</Button>
                </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}