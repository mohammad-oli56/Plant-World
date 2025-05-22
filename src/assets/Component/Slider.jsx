import React, { useEffect, useState } from 'react';

const images = [
  "https://thumbs.dreamstime.com/b/green-palm-leaves-flowers-banner-tropical-plant-hand-painted-watercolor-illustration-isolated-white-background-realistic-178542042.jpg",
  "https://www.shutterstock.com/image-photo/banner-green-echeveria-front-window-260nw-1352072093.jpg",
  "https://as2.ftcdn.net/jpg/02/25/44/15/1000_F_225441554_FBM3BPaYiliBNZfGnf0mvEFp1zQlINuN.jpg",
  "https://img.pikbest.com/backgrounds/20190708/small-fresh-green-plant-banner-poster-background_1897711.jpg!bw700"
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2000); // 4-second delay between slides

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full">
      {images.map((img, i) => (
        <div
          key={i}
          className={`carousel-item relative w-full ${i === index ? 'block' : 'hidden'}`}
        >
          <img src={img} className="w-full" alt={`Slide ${i + 1}`} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() => setIndex((index - 1 + images.length) % images.length)}
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() => setIndex((index + 1) % images.length)}
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
