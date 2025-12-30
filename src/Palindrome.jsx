import { useState } from "react"


const Palindrome = () => {

const[text,setText]=useState('');
const[check,setCheck]=useState("")


 const handleclick=(e)=>{
     const value=e.target.value
     setText(value)
 }

 const handlecheck=()=>{
    const clean=text.toLowerCase()
    const reverse=clean.split("").reverse().join("")

    console.log(reverse)
 }

  

 handlecheck()
  return (
   <>
   <div>
   <input className="bg-amber-50 border" type="text" value={text} onChange={handleclick}  />
   </div>
   </>
  )
}

export default Palindrome