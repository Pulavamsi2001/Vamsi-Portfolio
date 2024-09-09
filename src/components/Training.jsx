import React, { useEffect, useRef, useState } from 'react';

const Training = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger the observer when 50% of the card is in view
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <section className='text-white py-16 px-4 md:px-8 lg:px-16'>
      <h1 className="text-4xl font-bold pb-8 text-center">Training</h1>

      <div
        ref={cardRef}
        className={`mt-4 max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg border border-gray-600 shadow-lg transform transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Frontend Development Training</h3>
        <p className='text-lg mb-1'>Besant Technologies, Bangalore</p>
        <p className='text-lg text-gray-400'>Completed : August 2024</p>
        <p className='text-lg mb-1'>Skills Acquired :  HTML, CSS, JavaScript, Bootstrap, React.JS</p>
        <p className='text-lg mb-1'>Projects : Developed multiple responsive web applications</p>
        <p className='text-lg'>Team Experience : Collaborated on group projects to enhance communication and teamwork skills.</p>
      </div>
    </section>
  );
};

export default Training;