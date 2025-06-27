import React, { useEffect, useState } from 'react';

const images = [
  "https://t4.ftcdn.net/jpg/08/10/91/51/360_F_810915126_mrvA7T9JZK0eEfgdDtkp0FeRYDO3vS87.jpg",
  "https://t3.ftcdn.net/jpg/09/34/45/84/360_F_934458498_ExtE5CqeHx8EjPLeVFgBRIUqS9JhqoUT.jpg",
  "https://t3.ftcdn.net/jpg/12/10/71/74/360_F_1210717429_LxyGFb1AyFTx4yKS9pYuS8mykGYBIKjL.jpg",
  "https://t3.ftcdn.net/jpg/12/34/31/46/360_F_1234314614_rFKd19t1Wfixhu9txtQ7c9Xq6zHPSMjn.jpg"
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
    <div className="w-full h-[60vh] overflow-hidden relative">
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
