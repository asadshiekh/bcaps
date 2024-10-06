"use client";
import { useState } from "react";

export default function Slider() {
  const [showModal, setShowModal] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  const videos = [
    {
      id: 1,
      title: "Video 1",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://www.youtube.com/embed/5NV6Rdv1a3I",
    },
    {
      id: 4,
      title: "Video 4",
      src: "https://www.youtube.com/embed/ktvTqknDobU",
    },
    {
      id: 5,
      title: "Video 5",
      src: "https://www.youtube.com/embed/lWA2pjMjpBs",
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
    <section className="relative bg-[#000000] flex flex-col justify-center items-center text-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-white text-4xl font-bold mb-4">Kerala Tour Packages</h1>

      {/* Description */}
      <p className="text-white text-lg mb-8 max-w-lg">
      Hire a BCabs for your Kerala tour from BCabs and have total peace of mind with Guranteed satisfaction.
      </p>

      {/* Video Slider */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thumb-rounded scroll-smooth">
          {videos.map((video) => (
            <div
              key={video.id}
              className="min-w-[400px] bg-gray-900 rounded-lg p-4 cursor-pointer"
              onClick={() => openModal(video.src)}
            >
              <iframe
                className="rounded-lg"
                width="360"
                height="400"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="text-white mt-2">{video.title}</p>
            </div>
          ))}
        </div>
      </div>



    </section>
  );
}
