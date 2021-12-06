import Navbar from "../components/Navbar";
import { Container } from "@mui/material";


export default function Home({data}){
  return(
    <Container>
      <Navbar movies={data}/>
      {/* <div>{movies.title}</div> */}

    </Container>
  );
}