import {useState, useEffect} from 'react'
import { Button } from 'reactstrap';
import Quotebox from '../components/Quotebox'


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
  <Button color="secondary" size="lg" onClick={getComic} classnName="button" >Click me!</Button>
  <br></br>
      <Quotebox />
      
  </div>
)

}

return comic ? loaded() : loading()




   
}

export default Main