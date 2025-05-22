import React from 'react';

const reviews = [
  {
    name: 'Lily Greenfield',
    image: 'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg',
    text: 'I\'m absolutely in love with the plants I received! Each one arrived healthy, vibrant, and beautifully packaged. The care tips included were super helpful. It\'s clear this team cares deeply about greenery and their customers. Highly recommend for plant lovers!'
  },
  {
    name: 'Jade Rivera',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/003/597/506/small_2x/portrait-of-a-young-woman-in-profile-free-vector.jpg',
    text: 'Fantastic quality and amazing variety of plants! My indoor space feels so much fresher and greener now. The customer support was prompt and knowledgeable. I’ve already placed my next order—this shop is a plant paradise I’ll keep coming back to.'
  },
  {
    name: 'Sage Thompson',
    image: 'https://static.vecteezy.com/system/resources/previews/005/218/469/non_2x/portrait-of-a-beautiful-young-woman-with-short-wavy-hair-vector.jpg',
    text: 'From the moment I opened the box, I knew I’d found my favorite plant store. Everything was fresh, carefully packed, and full of life. My monstera and snake plant are thriving. A beautiful way to bring nature indoors. Thank you!'
  },
  {
    name: 'Leroy Jenkins',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkDCKc_rqTSls5_qlfKiNuRukqNC_pPZZ_uEHCEtuP48TaBU6etTWylOBdzYX5AfNcww&usqp=CAU',
    text: 'This store has completely transformed my balcony into a green sanctuary. The plants were lush, healthy, and exactly as described. Delivery was quick and the care guide made things easy. A truly wonderful experience for any urban plant enthusiast!'
  }
];

const Happychient = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 xl:grid-cols-3 items-center">
          <div className="text-center xl:text-left xl:col-span-2 max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold">Happy Client Reviews</h2>
            {/* Optional description here if needed */}
          </div>
          <div className="xl:col-span-3 grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md bg-white space-y-4"
              >
                <p className="text-sm leading-relaxed">"{review.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={review.image}
                    alt={`Photo of ${review.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold">{review.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happychient;
