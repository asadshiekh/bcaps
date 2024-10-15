import Image from 'next/image'; // Ensure you import the Image component
import { FaStar } from 'react-icons/fa'; // Import the star icon

const RatingList = () => {
    // Images and their respective ratings
    const ratingData = [
        {
            src: '/images/assets/facebook-lastest.png', // Replace with your actual image paths
            rating: 4.9,
        },
        {
            src: '/images/assets/trip-advisor-icon.png',
            rating: 4.7,
        },
        {
            src: '/images/assets/google-latest.png',
            rating: 4.9,
        },
    ];

    return (
        <ul className='flex items-center justify-center space-x-10 text-medium'>
            {ratingData.map((item, index) => (
                <li key={index} className='flex items-center justify-center text-[18px]'>
                    <Image 
                        src={item.src} 
                        alt={`Image ${index + 1}`} 
                        width={50} // Set width as needed
                        height={50} // Set height as needed
                        className='mr-2' // Add margin if needed
                    />
                    {item.rating} {/* Dynamic rating */}
                    <FaStar style={{ color: 'yellow', fontSize: '18px' }} className='ml-2' />
                </li>
            ))}
        </ul>
    );
};

export default RatingList;
