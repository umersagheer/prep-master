import { questions } from "../lib/index.types"

const TestAttempt = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">Attempt Test</h2>
        <p className="text-lg">Please attempt the test below. You have {questions.length} questions to complete.</p>
        <div className="flex flex-col w-full">
          {questions.map((question, index) => (
            <div key={index} className="p-4 border-b-2 border-gray-300">
              <h3 className="text-lg font-bold">{question.text}</h3>
              <ul className="list-none">
                {Object.entries(question.options).map(([key, value]) => (
                  <li key={key}>
                    <input
                      type="radio"
                      name={`${question.id}`}
                      value={key}
                      className="mr-2"
                    />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
          Submit
        </button>
      </div>
    </div>
  )
}

export default TestAttempt