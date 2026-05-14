import React, { useState } from 'react';

const Hire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile || !formData.subject) {
      alert('Please fill all the fields!');
      return;
    }

    try {
      const response = await fetch('https://portfolio-ne2s.onrender.com/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      console.log('response', result);
    } catch (error) {
      console.error('error submitting form:', error);
    }
  };

  return (
    <div id="contact" className="bg-green-900 pt-20 px-5 lg:px-36 pb-16">
      <div className="text-center space-y-6">
        <h1 className="font-bold text-2xl lg:text-4xl text-green-500">Let's Build Something Together</h1>
        <p className="text-sm lg:text-lg text-gray-400">
          Whether you need a full stack web app, an AI-powered automation system, or just want to discuss an idea — I'm available. Let's talk.
        </p>

        {/* Quick contact info */}
        <div className="flex justify-center gap-6 flex-wrap text-sm text-gray-300 pt-2">
          <span><i className="fa-solid fa-envelope text-green-400 mr-2"></i>alok08996@gmail.com</span>
          <a href="https://linkedin.com/in/alok-sonig" target="_blank" rel="noreferrer" className="text-green-400 hover:underline">
            <i className="fa-brands fa-linkedin mr-2"></i>LinkedIn
          </a>
          <a href="https://github.com/al0k0" target="_blank" rel="noreferrer" className="text-green-400 hover:underline">
            <i className="fa-brands fa-github mr-2"></i>GitHub
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 lg:gap-8 pt-8 pb-4 w-full lg:max-w-3xl mx-auto"
      >
        <input
          type="text"
          onChange={handleInputChange}
          value={formData.name}
          name="name"
          placeholder="Your Name"
          className="w-full py-2 px-4 bg-green-800 focus:bg-green-950 outline-none rounded-md text-gray-200"
          required
        />
        <input
          type="email"
          onChange={handleInputChange}
          value={formData.email}
          name="email"
          placeholder="Your Email"
          className="w-full py-2 px-4 bg-green-800 focus:bg-green-950 outline-none rounded-md text-gray-200"
          required
        />
        <input
          type="text"
          onChange={handleInputChange}
          value={formData.mobile}
          name="mobile"
          placeholder="Your Mobile Number"
          className="w-full py-2 px-4 bg-green-800 focus:bg-green-950 outline-none rounded-md text-gray-200"
          required
        />
        <input
          type="text"
          onChange={handleInputChange}
          value={formData.subject}
          name="subject"
          placeholder="What do you need? (e.g. Web App, AI Bot, Bug Fix)"
          className="w-full py-2 px-4 bg-green-800 focus:bg-green-950 outline-none rounded-md text-gray-200"
          required
        />

        <button
          type="submit"
          className="py-2 px-5 lg:py-3 lg:px-8 bg-green-950 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.7)] hover:bg-green-500 hover:text-black duration-300 text-gray-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Hire;