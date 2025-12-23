import { useState } from "react"

const Formss = () => {

    const [form, setForm] = useState({
        Name: "", password: "", email: "", number: "", date: "", time: "",
        color: "", file:null, range: "", url: "", search: "", checkbox: null, radio: "", select: "", textarea: ""
    })


    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handlesumbit = (e) => {
        e.preventDefault()
        alert(
            `
          name      :${form. Name},
          password  :${form.password}
          email     :${form.email}
          number    :${form.number}
          date      :${form.date}
          taime     :${form.time}
          color     :${form.color}
          file      :${form. file}
          range     :${form.range}
          url       :${form. url}
          search    :${form.search}
          checkbox  :${form. checkbox}
          radio     :${form.radio}
          select    :${form. select}
          textarea  :${form. textarea}





    `

        )
     useState({
        Name: "", password: "", email: "", number: "", date: "", time: "",
        color: "", file:null, range: "", url: "", search: "", checkbox: null, radio: "", select: "", textarea: ""
    })


    }




    return (
        <div class="w-full min-h-screen flex justify-center items-center bg-gray-100 p-10">
            <form action="" onSubmit={handlesumbit}>
            <div class="w-full max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl space-y-6">

                {/* <!-- Text Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Name :</label>
                    <input type="text" class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.Name} name="Name" onChange={handlechange}
                        placeholder="Enter text" />
                </div>

                {/* <!-- Password Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Password :</label>
                    <input type="password" class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.password} name="password" onChange={handlechange}
                        placeholder="Enter password" />
                </div>

                {/* <!-- Email Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Email :</label>
                    <input type="email" class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.email} name="email" onChange={handlechange}
                        placeholder="Enter email" />
                </div>

                {/* <!-- Number Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Number :</label>
                    <input type="number" class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.number} name="number" onChange={handlechange}
                        placeholder="Enter number" />
                </div>

                {/* <!-- Date Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Date :</label>
                    <input type="date" class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.date} name="date" onChange={handlechange} />
                </div>

                {/* <!-- Time Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Time :</label>
                    <input type="time" class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.time} name="time" onChange={handlechange} />
                </div>

                {/* <!-- Color Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Color :</label>
                    <input type="color" class="border p-3 rounded-lg flex-1 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.color} name="color" onChange={handlechange} />
                </div>

                {/* <!-- File Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">File :</label>
                    <input type="file" class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.file} name="file" onChange={handlechange} />
                </div>

                {/* <!-- Range Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Range :</label>
                    <input type="range" class="flex-1" value={form.range} name="range" onChange={handlechange} />
                </div>

                {/* <!-- URL Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">URL :</label>
                    <input type="url" class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.url} name="url" onChange={handlechange}
                        placeholder="Enter URL" />
                </div>

                {/* <!-- Search Input --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Search :</label>
                    <input type="search" class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.search} name="search" onChange={handlechange}
                        placeholder="Search..." />
                </div>

                {/* <!-- Checkbox --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Checkbox :</label>
                    <div class="flex items-center space-x-3 flex-1">
                        <input type="checkbox" class="h-5 w-5" value={form.checkbox} name="checkbox" onChange={handlechange} />
                        <span>Check me</span>
                    </div>
                </div>

                {/* <!-- Radio --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Radio :</label>
                    <div class="flex space-x-6 flex-1">
                        <label class="flex items-center space-x-2"><input type="radio" value="option1" name="radio" onChange={handlechange} /> <span>Option 1</span></label>
                        <label class="flex items-center space-x-2"><input type="radio" value="option2" name="radio" onChange={handlechange} /> <span>Option 2</span></label>
                    </div>
                </div>

                {/* <!-- Select Dropdown --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Select :</label>
                    <select class="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.select} name="select" onChange={handlechange} >
                        <option>Select an option</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>

                {/* <!-- Textarea --> */}
                <div class="flex items-center justify-between gap-6">
                    <label class="font-semibold text-gray-700 w-40 text-right">Textarea :</label>
                    <textarea class="border p-3 rounded-lg flex-1 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write something..." value={form.textarea} name="textarea" onChange={handlechange} ></textarea>
                </div>
                <div>
                    <input type="submit" />
                </div>

            </div>
            </form>
        </div>
    )
}
export default Formss