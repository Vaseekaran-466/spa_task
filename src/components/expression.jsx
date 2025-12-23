import { useState } from "react";

const Expression = () => {
  const [input1, setInput] = useState("");
  const [expression1, setExpression1] = useState("");
  const [expression2, setExpression2] = useState("");
  const [expression3, setExpression3] = useState("");
  const [expression4, setExpression4] = useState("");
  const [error, setError] = useState("");

  const inputhandle = (emojie) => {
    const expvalues = emojie.target.value.trim();
    setInput(expvalues);

    if (expvalues === "angry") {
      setExpression1(true);
      setExpression2(false);
      setExpression3(false);
      setExpression4(false);
      setError("");
    } else if (expvalues === "smile") {
      setExpression1(false);
      setExpression2(true);
      setExpression3(false);
      setExpression4(false);
      setError("");
    } else if (expvalues === "cry") {
      setExpression1(false);
      setExpression2(false);
      setExpression3(true);
      setExpression4(false);
      setError("");
    } else if (expvalues === "happy") {
      setExpression1(false);
      setExpression2(false);
      setExpression3(false);
      setExpression4(true);
      setError("");
    } else {
      setExpression1(false);
      setExpression2(false);
      setExpression3(false);
      setExpression4(false);
      setError("expression not match");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Mood Expression Detector 🎭
        </h1>

        <input
          value={input1}
          type="text"
          placeholder="Enter your current mood..."
          onChange={inputhandle}
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5 text-gray-700 placeholder-gray-400"
        />

        {expression1 && (
          <p className="text-lg font-medium text-red-600">😡 Angry</p>
        )}
        {expression2 && (
          <p className="text-lg font-medium text-yellow-500">😊 Smile</p>
        )}
        {expression3 && (
          <p className="text-lg font-medium text-blue-500">😭 Cry</p>
        )}
        {expression4 && (
          <p className="text-lg font-medium text-green-600">😁 Happy</p>
        )}
        {error && (
          <p className="text-md font-medium text-gray-500 mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Expression;
