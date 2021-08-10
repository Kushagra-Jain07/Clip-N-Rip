import React, { useState, useEffect } from "react"
import {quotes} from "../Components/quotes"
import IosQuote from "react-ionicons/lib/IosQuote"

function HomeScreen() {

    const [currentImage, setCurrentImage] = useState(0)
    const [images] = useState(["/images/1.jpg","/images/2.jpg","/images/3.jpg","/images/4.jpg"])

    const switchImage = () => {
        if(currentImage < images.length - 1){
            setCurrentImage(currentImage + 1)
        }else{
            setCurrentImage(0)
        }
        return currentImage
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            switchImage()
        }, 3500)
        return() => {
            clearInterval(interval)
        }
    })

    return(
        <div className="main-img">
            <div className="quote">
                <h3><IosQuote className="invert" fontSize="30px" /> {quotes[currentImage]} <IosQuote fontSize="30px" /></h3>
            </div>
            <img src={images[currentImage]} alt=""></img>
        </div> 
    )
}

export default HomeScreen