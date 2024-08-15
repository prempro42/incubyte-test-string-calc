import { add } from "@/utils/calculator";
import { useState } from "react";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const calculate = () => {
    try {
      const sum: number = add(input);
      setResult(sum.toString());
      setIsError(false);
    } catch (error) {
      setResult(`${error}`);
      setIsError(true);
    }
  };

  const clear = () => {
    setIsError(false);
    setInput("");
    setResult("");
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4 mt-12 bg-white rounded-lg shadow-md bg-gradient-to-r from-teal-500 to-green-500">
        <h2 className="text-lg font-bold mb-4 text-white">String Calculator</h2>
        <div className="flex flex-col">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            cols={50}
            className="p-2 text-sm text-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter numbers separated by commas"
          />
          <div className="flex flex-row">
            <button
              onClick={calculate}
              className="mt-4 py-2 px-4 text-sm text-white bg-teal-700 rounded-lg hover:bg-teal-900"
            >
              Calculate
            </button>
            <button
              onClick={clear}
              className="ml-4 mt-4 py-2 px-4 text-sm text-white bg-lime-600 rounded-lg hover:bg-lime-700"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <p className="mt-4 text-lg font-bold mx-auto text-center">
        Result:{" "}
        <span className={` ${isError ? "text-red-500" : "text-green-600"} `}>
          {result}
        </span>
      </p>
    </>
  );
};

export default StringCalculator;
