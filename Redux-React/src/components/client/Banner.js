import React from 'react';
import './css/banner.css'

const Banner = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://about.fb.com/wp-content/uploads/2022/04/Learn-More-About-Climate-Change-Make-an-Impact-for-Earth-Day_Header.jpg" className="slide-show d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/07/Climate_Change_1200_Social.jpg" className="slide-show d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.kcl.ac.uk/newimages/sspp/policy-institute/news/ice-cap.x192f438f.jpg?crop=780,440,0,5&f=webp" className="slide-show d-block w-100" alt="..." />
                </div>
            </div>
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default Banner