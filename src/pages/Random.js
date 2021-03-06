import {useState, useEffect} from 'react'
import { Button } from 'reactstrap';
import Quotebox from '../components/Quotebox'

const Random = (props) => {

  const [comicStart, setComicStart] = useState(null)

  const getComicStart = async () => {

    const urlStart = "https://xkcd.vercel.app/?comic=latest"
    const response = await fetch(urlStart);
  
  
    const DataStart = await response.json()
     setComicStart(DataStart)

  }

    useEffect(() => {getComicStart()}, [])
   
    function getRandomInt(num) {
      return Math.floor(Math.random() * num);
    } 

    const [comic, setComic] = useState(null)

    const getComic = async () => {
      const url = `https://xkcd.vercel.app/?comic=${getRandomInt(comicStart.num)}` //This uses the previous API fetch to get the present amount of comics, And then uses that number in a random number generator
      const response = await fetch(url);
  
      const Data = await response.json()
       
        setComic(Data)
    
      }
   

const loaded = () => {

  console.log("Comictest", comic)

  return (
    <div className="comicdiv">
         <h2>{comic.title}</h2>
         <h5>Comic Number: {comic.num}</h5>
         <h3>Originally posted on: {comic.month}/{comic.day}/{comic.year}</h3>
      <img src={comic.img} alt={comic.alt} className="comicimage" ></img>
      <h6>{comic.alt}</h6>
      <br></br>
      <br></br>
      <Button color="secondary" size="lg" onClick={getComic} className="button" >Randomizer!</Button>
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

return comic ? loaded() : loading()

}

export default Random