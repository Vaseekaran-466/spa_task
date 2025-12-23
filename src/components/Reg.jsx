import { useState } from "react"

 const Reg = () => {

const[form,setForm]=useState({name:"",age:"",email:"",number:"",password:"",genter:""});

const handlechange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
}
const handlesumbit =(e)=>{

    e.preventDefault()
    alert(
        `
        your details check it
        
        name    :${form.name}
        age    :${form.age}
        email   :${form.email}
        number   :${form.number}
        password   :${form.password}
        genter   :${form.genter} `
    )
}





  return (
   
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Registration Form</h2>

    <form className="space-y-5" onSubmit={handlesumbit} >

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" name="name" onChange={handlechange} value={form.name}
          className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      {/* Age */}
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
        <input type="number" id="age" placeholder="Enter your age" min="1" max="100" name="age" onChange={handlechange} value={form.age}
          className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" id="email" placeholder="Enter your email" name="email" onChange={handlechange} value={form.email}
          className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" name="number" onChange={handlechange} value={form.number}
          className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input type="password" id="password" placeholder="Enter your password" name="password" onChange={handlechange} value={form.password}
          className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
        <div className="flex items-center gap-4">
          <label className="flex items-center">
            <input type="radio" name="genter" value="Male" checked={form.genter==="Male"} className="text-blue-500 focus:ring-blue-500" onChange={handlechange}  />
            <span className="ml-2 text-gray-700">Male</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="genter" value="Female" checked={form.genter==="Female"} className="text-blue-500 focus:ring-blue-500"onChange={handlechange} />
            <span className="ml-2 text-gray-700">Female</span>
          </label>
        </div>
      </div>

      {/* Submit */}
      <button type="submit"
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
        Register
      </button>
    </form>
  </div>
</div>

  )

}
export default Reg
