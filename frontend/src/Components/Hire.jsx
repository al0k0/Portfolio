import React, { useState } from 'react'

const Hire = () => {

  const [formData, setFormData]=useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    expertise: '',
  })
const handleInputChange = (e)=>{
  const {name, value} = e.target;
  setFormData((prevData)=> ({...prevData, [name]: value }))
}
  const [selected, setSelected]= useState('')
  const handleOption =(Option)=>{
    setSelected(Option)
    setFormData((prevData)=>({...prevData, expertise: Option}))

  }


  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.mobile || !formData.subject ||  !selected){
      alert("Please fill all the fields!")
      return;
    }
  

try {
  const response = await fetch('http://localhost:5000/submit-form',{

    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData),
  })
  const result = await response.json();
alert(result.message)
console.log('response', result);

}
 catch (error) {
  console.error('error submitting form:', error);
  
}
  }
  return (
    <div id='contact' className='bg-green-900 pt-20'>
<div className='text-center space-y-2 lg:space-y-6 mx-auto '>
    <h1 className=' font-bold text-2xl lg:text-4xl'>Ready to Collaborate?</h1>
<p className='text-xs lg:text-lg text-gray-300'>Let' build something amazing together. Whether you have a project in mind or just want to discuss ideas, feel free to get in touch.</p>
{/* <div className='flex justify-center  gap-4 '>
<button className='bg-green-500 hover:bg-green-600 duration-300 py-3  px-8 font-semibold  rounded-lg'>Contact Us</button>
<button className='bg-gray-800 hover:bg-gray-700 duration-300 py-3 px-8  font-semibold   rounded-lg'>LinkedIn Profile</button>

</div> */}
<form action="" onSubmit={handleSubmit} className='flex flex-col justify-center gap-4 lg:gap-8 lg:px-36 pt-8 pb-4 '>

  <input type="text" onChange={handleInputChange} value={formData.name} name="name" placeholder='Enter your name ' className=' lg:py-2 px-3 bg-green-800 focus:bg-green-950 outline-none rounded-md' required />
  <input type="email" onChange={handleInputChange} value={formData.email} name="email" placeholder='Enter your Email ' className=' lg:py-2 px-3 bg-green-800 focus:bg-green-950 outline-none rounded-md' required />
  <input type="text" onChange={handleInputChange} value={formData.mobile} name="mobile" placeholder='Enter your Mobile Number ' className=' lg:py-2 px-3 bg-green-800 focus:bg-green-950 outline-none rounded-md'required />
  <input type="text" onChange={handleInputChange} value={formData.subject} name="subject" placeholder='Enter your Email ' className=' lg:py-2 px-3 bg-green-800 focus:bg-green-950 outline-none rounded-md' required/>
 <div className='col-span-2  space-y-4'>
  <h1 className='font-bold text-2xl lg:text-3xl'>Our expertise</h1>
 
 <div className='flex flex-wrap justify-center gap-2 lg:gap-4'>
{['Fronted', 'Backend', 'Frontend', 'API Integration'].map(
  (Option)=>(
    <button type='button' key={Option}
    className={` text-xs px-2 py-1 lg:text-base lg:px-6 lg:py-2 rounded-lg ${
      selected=== Option
      ? 'bg-green-500'
      : 'bg-green-950'
    }`}
    onClick={()=> handleOption(Option)}
    >
      
{Option}
    </button>
  )
)}

 </div>
 </div>
 
 <button className='mx-auto px-3 py-2 lg:px-8 lg:py-3 text-xs lg:text-base bg-green-950  rounded-full  shadow-[0_0_12px_rgba(34,197,94,0.7)] hover:bg-green-500 duration-300'>
  Submit
</button>


</form>

    </div>
    <div className='bg-green-950 text-center pb-4 space-y-2'>
    <h1 className='pt-2 font-bold text-xl lg:text-2xl'>Our Expertise</h1>
    <p className='text-gray-300 text-xs lg:text-base'>React.js | Tailwind CSS | MongoDB | Firebase | Responsive Design | API Integration</p>
    </div>
    </div>
  )
}

export default Hire