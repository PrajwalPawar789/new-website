import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from "../images/dinner.jpg";
import image1 from "../images/hotel.jpg";
import image3 from "../images/room.jpg";
import image4 from "../images/corporate1.jpeg";
import image5 from "../images/corporate.jpg";

// Sample location highlights data
const locationHighlights = [
  {
    id: 1,
    heading: 'Prime City Center',
    image: image,
    content: 'Located in the heart of the city with easy access to malls, offices, and entertainment.',
  },
  {
    id: 2,
    heading: 'Scenic Views',
    image: image1,
    content: 'Experience breathtaking views of the surrounding landscapes and waterfront.',
  },
  {
    id: 3,
    heading: 'Well Connected',
    image: image3,
    content: 'Nearby metro stations and highways make commuting a breeze.',
  },
  {
    id: 4,
    heading: 'Lush Green Surroundings',
    image: image4,
    content: 'A peaceful environment surrounded by greenery and parks.',
  },
  {
    id: 5,
    heading: 'Corporate Excellence',
    image: image5,
    content: 'Top-notch corporate facilities for business needs and events.',
  },
];

// Custom arrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition`}
      style={{ ...style, right: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition`}
      style={{ ...style, left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const Location = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold mb-8"
          style={{
            color: "#06a34e",
            fontSize: "30px",
            fontFamily: "Inter, sans-serif",
            marginTop: "50px",
          }}>Location Advance / Key Distance - Near to MAP</h2>
        <Slider {...settings}>
          {locationHighlights.map((highlight) => (
            <div key={highlight.id} className="relative overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 z-10 text-pop-up transition-transform hover:scale-110 hover:bg-opacity-70"
                style={{ backdropFilter: 'blur(5px)' }}
              >
                <h3
                  className="text-white font-semibold mb-4 md:text-5xl lg:text-6xl transition-all duration-300 hover:text-green-400"
                  style={{ fontSize: '25px', fontFamily: 'Inter, sans-serif' }}
                >
                  {highlight.heading}
                </h3>
                <p
                  className="text-white text-center max-w-2xl md:text-xl lg:text-2xl transition-opacity duration-300 hover:opacity-90"
                  style={{ fontSize: '15px', fontFamily: 'Inter, sans-serif' }}
                >
                  {highlight.content}
                </p>
              </div>
              <img
                src={highlight.image}
                alt={highlight.heading}
                className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy" // This will help improve load performance
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Location;
