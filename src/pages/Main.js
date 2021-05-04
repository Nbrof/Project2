import {useState, useEffect} from 'react'


const Main = (props) => {



    const url = "https://xkcd.vercel.app/?comic=latest"


  const [comic, setComic] = useState(null)

  const getComic = async () => {
    const response = await fetch(url);


    const Data = await response.json()
     


      setComic(Data)


        
    }
 




    // useEffect(() => {getComic()}, [])




const loaded = () => {

  console.log("Comictest", comic)

  return (
    <div>
      <h2>{comic.title}</h2>
      <h3>Originally posted on: {comic.month}/{comic.day}/{comic.year}</h3>
      <img src={comic.img} alt={comic.alt} className="comicimage" ></img>
      
    </div>

  )
}


const loading = () => {

  
return (<div>
  <h1>Click here to get a Comic!</h1>
  <button onClick={getComic}>Testing</button>
  </div>
)

}

return comic ? loaded() : loading()




   
}

export default Main