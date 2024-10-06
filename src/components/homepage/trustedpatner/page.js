// components/ImageGrid.jsx
import Image from 'next/image';

const ImageGrid = ({ images }) => {
  return (
    <section>
      <div className="flex flex-wrap justify-center p-4">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 md:w-auto p-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={120} // Adjust width for smaller logo size
              height={120} // Adjust height for smaller logo size
              className="object-contain" // Ensures logos maintain aspect ratio
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
