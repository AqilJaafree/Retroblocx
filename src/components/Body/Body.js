import React from 'react'
import './Body.css';

const Body = () => {
  return (
    <div className="body">
      <h1>Body</h1>
      <div className="image-container">
        <a
          href="https://example.com/page1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="image1.jpg" alt="Sample Image 1" />
        </a>
        <a
          href="https://example.com/page2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="image2.jpg" alt="Sample Image 2" />
        </a>
        {/* Add more image links as needed */}
      </div>
    </div>
  );
}

export default Body
