import {useState, useEffect} from 'react'
import { Jumbotron, Container } from 'reactstrap';

const Main = (props) => {



    const url = "https://xkcd.vercel.app/?comic=latest"


  const [comic, setComic] = useState(null)

  const getComic = async () => {
    const response = await fetch(url);


    const Data = await response.json()
     


      setComic(Data)


        
    }
 


    useEffect(() => {getComic()}, [])




const loaded = () => {

  console.log("Comictest", comic)

  return (
    <div>

    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </Container>
    </Jumbotron>
  </div>

  )
}


const loading = () => {

return (
  <h1>Loading..</h1>
)


}

return comic ? loaded() : loading()




   
}

export default Main