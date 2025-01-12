import React, { useState } from 'react';
import './Slide.css'; // Import your CSS file for styling

function Slide() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      title: "Chapter 1: A Happy Child",
      videos: [
        {
          title: "Video 1: Introduction to Poem",
          url: "https://www.youtube.com/embed/up_yL6J4hCs?rel=0&si=wNjM5R7CpouRSU4I&amp;start=12&end=53",
        },
        {
          title: "Video 2: Summary of the Poem",
          url: "https://www.youtube.com/embed/up_yL6J4hCs?rel=0&si=wNjM5R7CpouRSU4I&amp;start=54&end=89",
        },
        {
          title: "Video 3: Basic Word And Meaning",
          url: "https://www.youtube.com/embed/up_yL6J4hCs?rel=0&si=wNjM5R7CpouRSU4I&amp;start=91&end=126",
        },
        {
          title: "Video 4: Exercise New Word",
          url: "https://www.youtube.com/embed/up_yL6J4hCs?rel=0&si=wNjM5R7CpouRSU4I&amp;start=128&end=223",
        },
      ],
    },
    {
      title: "Chapter 2: Three Little Pigs",
      videos: [],
    },
    {
      title: "Chapter 3: After a Bath",
      videos: [],
    },
    // Add more chapters as needed
  ];

  const totalSlides = slides.length;

  const moveSlide = (direction) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return (newIndex + totalSlides) % totalSlides; // Loop around slides
    });
  };

  return (
    <div className="slider-container">
      <div className="slider" id="slider" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide-item" key={index}>
            <h1>{slide.title}</h1>
            {slide.videos.length > 0 ? (
              slide.videos.map((video, videoIndex) => (
                <div key={videoIndex} className="video-frame">
                  <h2>{video.title}</h2>
                  <iframe
                    width="340"
                    height="315"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ))
            ) : (
              <p>No videos available.</p>
            )}
          </div>
        ))}
      </div>
      <div className="slider-arrows">
        <button className="left-arrow" onClick={() => moveSlide(-1)}>&#10094;</button>
        <button className="right-arrow" onClick={() => moveSlide(1)}>&#10095;</button>
      </div>
    </div>
  );
}

export default Slide;
