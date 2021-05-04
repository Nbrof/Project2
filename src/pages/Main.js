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
      <img src={comic.img} alt={comic.alt} className="comicimage" ></img>
      
    </div>

  )
}


const loading = () => {

  
return (<div>
  <h1>Loading..</h1>
  <button onClick={getComic}>Testing</button>
  </div>
)

}

return comic ? loaded() : loading()




   
}

export default Main