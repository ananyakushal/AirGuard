import React from 'react'
import "../Reviews/Review.css"

const Review = () => {
  return (
    <div>
        {/* <!-- Main Container for Clients Review --> */}
    <div className="review-container">
        <h2> Our Happy Clients </h2>
        <p classNameName="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, atque? Repudiandae
            possimus asperiores hic nemo id a molestiae minus impedit!</p>
    
        {/* <!-- Clients Review Section --> */}
        <div className="reviewSection">

        {/* <!-- Clients Review-1 Section Starts from Here  --> */}
            <div className="reviewItem">
                <div className="top">
                    <div className="clientImage">
                        <img src="./client.png" alt=""/>
                        <span>Raju Sheoran</span>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p className="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                        voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                        facere exercitationem!</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>
            {/* <!-- Clients Review-2 Section Starts from Here  --> */}
            <div className="reviewItem">
                <div className="top">
                    <div className="clientImage">
                        <img src="./client.png" alt=""/>
                        <span>Raju Sheoran</span>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p className="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                        voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                        facere exercitationem!</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>
            {/* <!-- Clients Review-3 Section Starts from Here  --> */}
            <div className="reviewItem">
                <div className="top">
                    <div className="clientImage">
                        <img src="./client.png" alt=""/>
                        <span>Raju Sheoran</span>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p className="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                        voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                        facere exercitationem!</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Review
