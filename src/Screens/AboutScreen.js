import React, {useEffect, useState} from "react"
import IosQuote from "react-ionicons/lib/IosQuote"

function AboutScreen() {

    const [currentReview, setCurrentReview] = useState(0)
    const [reviews] = useState(
        ["Top-notch service. I couldn't have been more pleased.",
        "They always leave a big smile on my face and much more relaxed than when i arrived.",
        "It has a bright, modern, stylish and a wonderful environment."])

    const [names] = useState(["Ben","Peter ","John"])

    const [showAddReview, setShowAddReview] = useState(false)
    const [review, setReview] = useState("")
    const[name, setName] = useState("") 

    const submitReview = () => {
        if(review !== null && name !== null){
            reviews.push(review)
            names.push(name)
        }
        setShowAddReview(false)
    }


    const switchReview = () => {
        if(currentReview < reviews.length - 1){
            setCurrentReview(currentReview + 1)
        }else{
            setCurrentReview(0)
        }
        return currentReview
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            switchReview()
        }, 3000)
        return() => {
            clearInterval(interval)
        }
    })

    return(
        <div className="about-container">
            <div className="about">
                    <div className="about-head">
                        <h1>About Us</h1>
                    </div>    
                    <div className="about-details">
                        <p>
                        <b>ClipN'Rip</b> now in Convent garden, UK 
                        providing you unheralded experience like never before. 
                        Established in 2020 and Owned by Mr. Kushagra Jain. 
                        Our aim is to make you look alluring and feel fabulous . 
                        Led by Mr. Kushagra the focus of our hairstylist is to provide finest level of service and ascertain all you requirements.
                        </p>
                    </div>
            </div>
            <div className="reviews">
                <div className="review-head">
                    <h1>Reviews</h1>
                </div>
                {showAddReview ?
                    <div className="addreview-details">
                        <textarea name="review" id="review" placeholder="Enter Review" value={review} onChange={(e) => setReview(e.target.value)} />
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <div className="row">
                            <button className="submitreview" onClick={submitReview}>Submit</button>
                            <button className="backreview" onClick={() => setShowAddReview(false)}>Back</button>
                        </div>
                    </div>
                    :
                    <div className="review-details">
                        <h4><IosQuote className="invert" fontSize="25px" />  {reviews[currentReview]}  <IosQuote fontSize="25px" /></h4>
                        <h6>- {names[currentReview]}</h6>
                    </div>
                }
                {showAddReview ? null : <button onClick={() => setShowAddReview(true)} className="addreview-btn">Add Review</button>}
            </div>
        </div>
    )
}

export default AboutScreen