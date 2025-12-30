import { useState } from "react";

const Logic = () => {
  console.log("initail")

  const [input, setInput] = useState("");
  const [multi, setMulti] = useState("");
  const[type,setType]=useState('')
 console.log("second")
  const handleinput = (e) => {
    const value = e.target.value;
    setInput(value);

    const num = Number(value);




    if (!isNaN(num)) {
      if (num % 2 === 0) {
        setType("even")
        const even = Math.floor(Math.random() * 100);
        setMulti(even*2);
      }

      else {
        setType("odd")
        const odd = Math.floor(Math.random() * 100);
        setMulti(odd);
      }

    }
    else{
      setType('')
      setMulti('')
    }
  };



console.log("end");

  return (
    <>
      <div>
        <input
          className="border bg-amber-50"
          onChange={handleinput}
          type="text"
          value={input}
        />
      </div>
      <p>enter value:{input}    <span>type  :</span> {type}</p>
      <div>result :{multi}</div>
    </>
  );
};

export default Logic;
