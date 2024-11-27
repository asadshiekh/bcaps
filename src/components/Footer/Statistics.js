const stats = [
  { value: "15,065,421", label: "Total Trips" },
  { value: "18,465", label: "Regular Clients" },
];

const Statistics = () => (
  <div className="flex flex-col col-span-2 text-gray mt-8 md:my-8 md:mb-0">
    <div className="flex">
      {stats.map(({ value, label }, index) => (
        <div key={index} className="mr-12 md:mr-20">
          <h4 className="font-bold text-2xl leading-5">{value}</h4>
          <p className="text-gray-400 uppercase">{label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Statistics;
