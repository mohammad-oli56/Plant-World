import { useLottie } from 'lottie-react';
import React from 'react';


const Hok = () => {
  const options = {
    // animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="w-full flex justify-center items-center">
      {View}
    </div>
  );
};

export default Hok;
