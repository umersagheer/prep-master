import { useParams } from "react-router";
import { TestDTO, tests } from "../lib/index.types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TestDescription = () => {
    const [test, setTest] = useState<TestDTO|undefined>();
    const { testId } = useParams();
    const fetchTest = (testId:string) => {
        return tests.find((test) => test.id === testId);
    }
    
    useEffect(() => {
         if(testId){
         const test = fetchTest(testId);
         setTest(test);
        }
    },[])

  return (
    <div className="flex justify-center flex-col">
    <div className="bg-white p-4 rounded-lg shadow-lg ring-1 ring-green-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">
          {test?.title}
        </h2>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-500 mr-2">
            Multiple Choice Questions
          </span>
          {/* <select className="bg-white border border-gray-300 text-sm p-2 rounded-md">
            <option value="mcq">MCQ</option>
            <option value="true-false">True/False</option>
            <option value="open-ended">Open-Ended</option>
          </select> */}
        </div>
      </div>
      <p className="text-gray-600">
        This is a multiple-choice test. Read each question carefully and select the best answer from the options given.
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Duration</h3>
        <p className="text-gray-600">The test will last for {test?.duration}.</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Instructions</h3>
        <ul className="list-disc text-gray-600 ml-6">
          <li>Read each question carefully before answering.</li>
          <li>Select only one answer for each question.</li>
          <li>Do not leave any questions unanswered.</li>
          <li>Do not click the submit button until you have finished the test.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold">Test Description</h3>
        <p className="text-gray-600">This is a dummy test description.</p>
      </div>
      <div className="mt-8 flex justify-center">
        <Link to={`./attempt`}><button
          className="bg-primary px-4 py-2 rounded-md text-white font-bold hover:bg-primary-dark"
          type="button"
        >
          Start Test
        </button></Link>
      </div>
    </div></div>

  )
}

export default TestDescription