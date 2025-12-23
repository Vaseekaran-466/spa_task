import { useState } from "react";

const Color = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [normal, setNormal] = useState(true);
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [error, setError] = useState("");

  const Colorprocess = (e) => {
    const invalue = e.target.value.trim().toLowerCase();
    setInputValue(invalue);

    if (invalue === "red") {
      setNormal(false);
      setRed(true);
      setBlue(false);
      setError("");
    } else if (invalue === "blue") {
      setNormal(false);
      setRed(false);
      setBlue(true);
      setError("");
    } else if (invalue === "") {
      setNormal(true);
      setRed(false);
      setBlue(false);
      setError("");
    } else {
      setNormal(false);
      setRed(false);
      setBlue(false);
      setError("Color is not defined");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-4">
        <input
          value={inputValue}
          onChange={Colorprocess}
          className="border-2 border-gray-600 p-2 rounded"
          type="text"
          placeholder="Enter your favourite color"
        />
      </div>

      <div className="flex justify-center items-center mt-4 gap-2">
        {normal && (
          <p className="bg-amber-400 px-4 py-2 rounded text-center">Normal</p>
        )}
        {red && (
          <p className="bg-red-600 text-white px-4 py-2 rounded text-center">
            Red
          </p>
        )}
        {blue && (
          <p className="bg-blue-600 text-white px-4 py-2 rounded text-center">
            Blue
          </p>
        )}
        {error && (
          <p className="bg-cyan-500 text-white px-4 py-2 rounded text-center">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Color;
