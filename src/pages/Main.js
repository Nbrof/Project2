import {useState, useEffect} from 'react'
import { Button } from 'reactstrap';
import Quotebox from '../components/Quotebox'


const Main = (props) => {



    const url = "https://xkcd.vercel.app/?comic=latest" //This create a variable that can be used to place the API url anywhere

  const [comic, setComic] = useState(null)

  const getComic = async () => {
    const response = await fetch(url); //This fetchs the data from the API


    const Data = await response.json()
     
      setComic(Data)  //This sets the state of the data so its saved.
        
    }
 
    useEffect(() => {getComic()}, []) //This renders the data on the page at the first render

const loaded = () => {

  console.log("Comictest", comic)

  return (
    <div>
      <h2>{comic.title}</h2>
      <h5>Comic Number:{comic.num}</h5>
      <h3>Originally posted on: {comic.month}/{comic.day}/{comic.year}</h3>
      <img src={comic.img} alt={comic.alt} className="comicimage" ></img>
      <h6>{comic.alt}</h6>
      <br></br>
      <Quotebox />
      
    </div>

  )
}


const loading = () => {

  
return (<div>
  <h1>Click here to get a Comic!</h1>
  <Button color="secondary" size="lg" onClick={getComic} className="button" >Click me!</Button>
  <br></br>
      <Quotebox />
      
  </div>
)

}

return comic ? loaded() : loading() //This Ternary operator renders elements based on if it received Data
   
}

export default Main