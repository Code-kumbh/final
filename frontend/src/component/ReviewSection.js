
import React from "react";
import image1 from  '../images/testi1.avif'
import image2 from '../images/testi3.jpeg'
import image3 from '../images/testi4.jpeg'
const reviews = [
  {
    name: "Fannie Rowe",
    image: image1,
    rating: 5,
    review: "It was a life experience to visit such a beautiful cultural country."
  },
  {
    name: "Lillie Summers",
    image: image2,
    rating: 5,
    review: "Just one Word - Incredible!"
  },
  {
    name: "Bob Marley",
    image: image3,
    rating: 5,
    review: "Damn! I'm thinking of staying here in this world."
  },
  {
    name: "Jackie Chan",
    image: image1,
    rating: 5,
    review: "Now, I am a big fan of Power Yoga. Thanks for such a gift to this world."
  }
];

const ReviewSection = () => {
  return (
    <section id="testimonial" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">How Our Customers Felt About Us</h1>
          <p className="text-gray-600 mt-2">Who are in extreme love with friendly & inviting people</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src={review.image} alt={review.name} className="w-16 h-16 mx-auto mb-4 rounded-full" />
              <h4 className="text-xl font-semibold text-gray-800">{review.name}</h4>
              <div className="flex justify-center my-2">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;


