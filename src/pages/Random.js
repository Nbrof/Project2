import {useState, useEffect} from 'react'
import { Button } from 'reactstrap';

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
      const url = `https://xkcd.vercel.app/?comic=${getRandomInt(comicStart.num)}`
      const response = await fetch(url);
  
  
      const Data = await response.json()
       
  
  
        setComic(Data)
  
  
          
      }
   




const loaded = () => {

  console.log("Comictest", comic)

  return (
    <div>
         <h2>{comic.title}</h2>
         <h3>Originally posted on: {comic.month}/{comic.day}/{comic.year}</h3>
      <img src={comic.img} alt={comic.alt} className="comicimage" ></img>
      <br></br>
      <br></br>
      <Button color="secondary" size="lg" onClick={getComic} >Randomizer!</Button>
      
    </div>

  )
}


const loading = () => {

return (<div>
  <h1>Click here to get a Comic!</h1>
  <Button color="secondary" size="lg" onClick={getComic} >Click me!</Button>
  </div>
)


}

return comic ? loaded() : loading()


}

export default Random