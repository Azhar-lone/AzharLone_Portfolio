import React from "react";

const Services = () => {
  return (
    <div className="flex flex-wrap gap-6  py-5 flex-col w-full" id="services">
      <h3 className="text-4xl  p-4 ">Services</h3>

      <div className="flex flex-wrap gap-3 justify-center ">
        {services.map((service, index) => (
          <h1
            className="text-3xl text-primary p-4 bg-secondary rounded-2xl "
            key={index}
          >
            {service}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Services;

let services: string[] = [
  " E-commerce website Developement",
  "Landing Pages Developement",
  "E-Learning platform Developement",
  " Custom Website Developement",
  "Bloging website Developement",
  "Business Website Developement",
  "RESTful API development and/or integration",
  "Website updates and upgrades",
  "Telemedicine platforms",
  "Implementing security best practices",
];

