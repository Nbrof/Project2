import {useState, useEffect} from 'react'

const Random = (props) => {


   
    const url = "https://xkcd.vercel.app/?comic=300"


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
      <img src={comic.img}></img>
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

export default Random