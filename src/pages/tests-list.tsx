import { useState } from "react";
import NavBar from "../components/ui/navbar";
import { testSeries } from "../lib/index.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../components/ui/card";
import { Link } from "react-router-dom";

const TestsList = () => {
  const [tests, setTests] = useState([]);

  const fetchTests = () => {
    return testSeries;
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold tracking-tight text-green-900 my-4">
        Tests List
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {testSeries.map((test) => (
          <Link to={`./${test.id}`}>
            <Card className="hover:shadow-xl"> 
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://picsum.photos/1024/768"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4m-4-4H6"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {test.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {test.instructor.firstName +
                        " " +
                        test.instructor.lastName}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500">
                    {test.description.slice(0, 100)}
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    ${test.price}
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xs font-medium text-gray-500">
                      {test.tests.length} Tests
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {test.tests.reduce((accumulator:number,test) => accumulator+test.duration , 0)} minutes
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestsList;
