import React, { useEffect, useState } from 'react'
import axios from "../utils/axios";    // Using Axios Instance:

const Gallery = () => {
    const [allPics, setALlPics] = useState([]);

    const getImages = async() => {
        const response = await axios.get('/gallery')
        console.log(response.data);
        setALlPics(response.data);
    }

    useEffect(() => {
        getImages()
    }, [])
    
    const handleClick = (e) => {
        getImages();
        console.log("Btn click");
    }

  return (
      <>
        <button onClick={handleClick} className='px-3 py-1 bg-blue-800 cursor-pointer text-white font-extrabold'>Images Gallery</button>

          <div className="card-container flex-around ">
              {allPics.map((pic) => {
                  console.log(pic.url);
                  return (
                      <>
                      <img key={pic.id} src={pic.url} alt="" height= "200px" width= "200px"/>
                      
                      </>
                  )
              })  }
          </div>
      </>
  )
}

export default Gallery