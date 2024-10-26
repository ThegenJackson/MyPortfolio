import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

// Array of texts to transition between
const swapText = ['Linux', 'Azure', 'Cyber Security', 'Python'];

export default function Home() {
  // State to keep track of the current index for text transition
  const [index, setIndex] = React.useState(0);

  // useEffect hook to set up an interval that updates the index every 1.5 seconds
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1), // Increment index
      1500 // Interval duration in milliseconds
    );

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearTimeout(intervalId);
  }, []);

    return ( 
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-screen">
    <h1 className="text-5xl font-bold mb-5">Hi, my name is Thegen.</h1>
    <h2 className="text-3xl font-bold mb-3">I'm a big fan of {' '}
      <TextTransition inline={true}>
        {swapText[index % swapText.length]}
      </TextTransition>
    </h2>
      <p className="py-6">
        This page is still under construction. <br /> Check back soon!
      </p>
      <button className="btn btn-primary m-10">Get Started</button>
    </div>
  </div>
</div>
    )
  }