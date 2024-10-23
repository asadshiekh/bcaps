"use client";
import { useState } from "react";
import Image from 'next/image';

export default function Slider() {
  const [showModal, setShowModal] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  const videos = [
    {
      id: 1,
      title: "",
      src: "https://www.youtube.com/embed/95MXNUlm22M",
      thumbnail: "/images/assets/thumb1.jpg",
    },
    {
      id: 2,
      title: "",
      src: "https://www.youtube.com/embed/exCuiobQYPM",
      thumbnail: "/images/assets/thumb2.jpg",
    },
    {
      id: 3,
      title: "",
      src: "https://www.youtube.com/embed/j1iHMqjRLIU",
      thumbnail: "/images/assets/thumb3.jpg",
    },
    {
      id: 4,
      title: "",
      src: "https://www.youtube.com/embed/MTuFumSGbfo",
      thumbnail: "/images/assets/thumb4.jpg",
    },
  ];

  const openModal = (src) => {
    setIframeSrc(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setIframeSrc("");
    setShowModal(false);
  };

  return (
    <section className="relative bg-[#2A2E33] flex flex-col justify-center items-center text-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-white text-4xl font-bold mb-4">Kerala Tour Packages</h1>

      {/* Description */}
      <p className="text-lg mb-8 max-w-lg text-[#a7a7a7]">
        Hire a BCabs for your Kerala tour taxi and have total peace of mind with Guaranteed satisfaction.
      </p>

      {/* Video Slider */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thumb-rounded scroll-smooth">
          {videos.map((video) => (
            <div
              key={video.id}
              className="min-w-[400px] relative cursor-pointer"
              onClick={() => openModal(video.src)}
            >
              {/* Thumbnail Image */}
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={360}
                height={400}
                className="rounded-lg"
              />
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-5.197-3.003A1 1 0 008 9.065v5.869a1 1 0 001.555.832l5.197-3.003a1 1 0 000-1.664z"
                  />
                </svg>
              </div>
              <p className="text-white mt-2 text-center">{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Video */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 focus:outline-none"
            >
              ✕
            </button>
            {/* Embedded YouTube Video */}
            <iframe
              className="w-full h-[500px] rounded-lg"
              src={iframeSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
