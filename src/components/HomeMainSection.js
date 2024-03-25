import React, { useState, useEffect } from 'react';
import reviews from '../data/review';

function HomeMainSection() {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedReviews = randomIndexes.map(index => reviews[index]);
    setRandomReviews(selectedReviews);
  }, []);

  return (
    <main>
      <section className="about-us">
        <h2>About Us</h2>
        <p>Company's vision and mission description here.</p>
        <button onClick={() => console.log("Shop Now clicked")}>Shop Now</button>
      </section>
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-list">
          {randomReviews.map((review, index) => (
            <div key={index} className="review">
              <p>{review.customerName}</p>
              <p>{review.reviewContent}</p>
              <div className="rating">
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomeMainSection;
