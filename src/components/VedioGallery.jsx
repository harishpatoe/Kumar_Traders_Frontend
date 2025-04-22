import React from "react";
import { Carousel } from "antd";

const VideoGallery = () => {
  const videoLinks = [
    "https://www.youtube.com/embed/VdkGNedh7yI",
    
  ];

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-6 text-[#c69639]">Construction Videos</h2>

      <Carousel autoplay autoplaySpeed={5000} dots>
        {videoLinks.map((link, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full flex justify-center">
              <iframe
                className="rounded-xl shadow-lg max-w-4xl w-full aspect-video"
                src={`${link}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoGallery;
