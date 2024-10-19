// components/WhyChooseUs.jsx

const ThreeBlockSection = () => {
    return (
      <div className="flex flex-col lg:flex-row w-full">
        {/* Block 1: Red Background */}
        <div className="flex-1 bg-[#ed2124] p-10 py-20 overflow-hidden">
          <h3 className="text-uppercase font-semibold text-white text-3xl mb-5">Why choose Us</h3>
          <p className="text-white leading-8">
            BCabs taxi service offers the best value, comfort and safety for your travel needs. Whether you need a ride to or from the various airports in Kerala, a business meeting, wedding, a shopping trip or a night out, we have the apt vehicle for you. Our drivers are friendly, professional and knowledgeable, and our vehicles are clean, modern and well-maintained. With BCabs, you can relax and enjoy the ride, knowing that you are in good hands.
          </p>
          <i className="bi-lightbulb bg-icon"></i>
        </div>
  
        {/* Block 2: Black Background */}
        <div className="flex-1 bg-[#34495E] p-10 py-20 overflow-hidden">
          <h3 className="text-uppercase font-semibold text-white text-3xl mb-5">BCabs Mission</h3>
          <p className="text-white leading-8">
            At BCabs 24x7 Taxi Service, we are on a mission to revolutionise the way people travel. We believe that quality, comfort and technology are the key factors that make a difference in the transportation industry. That's why we offer our customers a fleet of modern, clean and safe vehicles, equipped with the latest features and amenities. Our goal is to make every ride an enjoyable and hassle-free experience for our customers.
          </p>
          <i className="bi-gear-fill bg-icon"></i>
        </div>
  
        {/* Block 3: Red Background */}
        <div className="flex-1 bg-[#ed2124] p-10 py-20 overflow-hidden">
          <h3 className="text-uppercase font-semibold text-white text-3xl mb-5">BCabs Vision</h3>
          <p className="text-white leading-8">
            Our vision at BCabs 24x7 Taxi Service is to become the preferred choice of transportation for people who value quality, comfort and technology. We aspire to create a network of loyal customers who trust us to deliver a superior service every time. We also aim to be a leader in innovation and sustainability, by adopting the best practices and technologies in the industry. We envision a future where travel is easy, enjoyable and eco-friendly.
          </p>
          <i className="bi-hand-thumbs-up bg-icon"></i>
        </div>
      </div>
    );
  };
  
  export default ThreeBlockSection;
  