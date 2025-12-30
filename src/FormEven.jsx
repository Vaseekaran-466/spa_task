import { useState } from "react"


const Conatact = () => {

const [input, setInput] = useState("")

const [showdata, setShowdata] = useState({ data: "", newdata: "" })


const handlinginput = (e) => {
  setInput(e.target.value)
}



const getData = (e) => {
  e.preventDefault()
  setShowdata(input)

  const num = Number(input)
  if (input === "") {
    setShowdata({ data: "Please enter a value", newdata: "" })
    return
  }

  if (!isNaN(num)) {
    if (num % 2 === 0) {
      setShowdata({ data: "Even Number", newdata: input })
    } else {
      setShowdata({ data: "Odd Number", newdata: input })
    }
  } else {
    setShowdata({ data: "Not a number", newdata: input })
  }
}






  return (
  <>
 <div className="flex min-h-screen items-center justify-center bg-gray-100">

  <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
    <form className="space-y-6">

        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Enter a number:
          </label>
          <input
            id="number"
            type="number"
            value={input}
            onChange={handlinginput}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="enter a number"
          />
        </div>

    

     

      <button onClick={getData}
        type="submit"
        className="w-full rounded-lg bg-indigo-600 text-white font-semibold py-2 hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </form>

  </div>
  <div className="mt-8 text-center">
    <div className="font-semibold">{showdata.data}</div>
    <div className="text-sm text-gray-600">{showdata.newdata}</div>
  </div>
</div>

  </>
  )
}

export default Conatact