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
      const response = await fetch('http://localhost:5000/submit-form', {
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
    <div id="contact" className="bg-green-900 pt-20 px-5 lg:px-36">
      <div className="text-center space-y-6">
        <h1 className="font-bold text-2xl lg:text-4xl text-green-500">Ready to Collaborate?</h1>
        <p className="text-sm lg:text-lg text-gray-400">
          Let's build something amazing together. Whether you have a project in mind or just want to discuss ideas, feel free to get in touch.
        </p>
      </div>

      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 lg:gap-8 pt-8 pb-4 w-full lg:max-w-3xl mx-auto"
      >
        <input
          type="text"
          onChange={handleInputChange}
          value={formData.name}
          name="name"
          placeholder="Enter your name"
          className="w-full py-2 px-4 bg-green-800 focus:bg-green-950 outline-none rounded-md text-gray-200"
          required
        />
        <input
          type="email"
          onChange={handleInputChange}
          value={formData.email}
          name="email"
          placeholder="Enter your Email"
          className="w-full py-2 px-4 bg-green-800 focus:bg-green-950 outline-none rounded-md text-gray-200"
          required
        />
        <input
          type="text"
          onChange={handleInputChange}
          value={formData.mobile}
          name="mobile"
          placeholder="Enter your Mobile Number"
          className="w-full py-2 px-4 bg-green-800 focus:bg-green-950 outline-none rounded-md text-gray-200"
          required
        />
        <input
          type="text"
          onChange={handleInputChange}
          value={formData.subject}
          name="subject"
          placeholder="Enter your Subject"
          className="w-full py-2 px-4 bg-green-800 focus:bg-green-950 outline-none rounded-md text-gray-200"
          required
        />

        <button
          type="submit"
          className="py-2 px-5 lg:py-3 lg:px-8 bg-green-950 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.7)] hover:bg-green-500 hover:text-black duration-300 text-gray-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Hire;
