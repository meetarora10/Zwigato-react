import React from 'react';

const About = () => {
  return (
    <div className="max-w-full mx-auto text-black">
      {/* First Section - Right-aligned image (seRight) */}
      <section id="about" className="flex flex-col md:flex-row justify-evenly items-center bg-gray-50 py-8">
        <div className="flex flex-col px-6 md:w-1/2 max-w-lg">
          <p className="text-2xl md:text-3xl font-bold mb-3 font-serif">We build your trust.</p>
          <p className="text-lg leading-7 font-medium">
            At Zwigato, trust is our most cherished ingredient. From sourcing the freshest ingredients to delivering your favorite dishes with care and consistency, we're committed to quality every step of the way. Join thousands of satisfied customers who rely on us for their daily food cravings.
          </p>
        </div>
        <div className="md:w-1/2 max-w-lg mt-6 md:mt-0 px-4">
          <img
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Delicious cake"
            className="rounded-lg w-full md:w-96 h-64 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* Second Section - Left-aligned image (seLeft) */}
      <section id="services" className="flex flex-col md:flex-row-reverse justify-evenly items-center bg-gray-50 py-8">
        <div className="flex flex-col px-6 md:w-1/2 max-w-lg">
          <p className="text-2xl md:text-3xl font-bold mb-3 font-serif">What makes us different?</p>
          <p className="text-lg leading-7 font-medium">
            Unlike others, Zwigato combines technology with culinary artistry. We partner with handpicked chefs and local favorites to bring you meals that not only taste amazing but are delivered hot, fresh, and right on time. Our AI-powered recommendations make sure you always discover something new and delicious.
          </p>
        </div>
        <div className="md:w-1/2 max-w-lg mt-6 md:mt-0 px-4">
          <img
            src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gourmet Dish"
            className="rounded-lg w-full md:w-96 h-64 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* Third Section - Right-aligned image (seRight) */}
      <section className="flex flex-col md:flex-row justify-evenly items-center bg-gray-50 py-8">
        <div className="flex flex-col px-6 md:w-1/2 max-w-lg">
          <p className="text-2xl md:text-3xl font-bold mb-3 font-serif">Available at 1500+ restaurants and counting.</p>
          <p className="text-lg leading-7 font-medium">
            With a growing network of over 1500 restaurants and food partners, Zwigato is now a household name. Whether you're in a metro city or a cozy town, a delicious meal is always just a click away. We're growing fast — and so is our passion for food!
          </p>
        </div>
        <div className="md:w-1/2 max-w-lg mt-6 md:mt-0 px-4">
          <img
            src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Food Delivery"
            className="rounded-lg w-full md:w-96 h-64 md:h-96 object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;