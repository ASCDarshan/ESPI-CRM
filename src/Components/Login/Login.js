import React from "react";

const Login = () => {
  const data = {
    title: "Tailwind CSS Configuration Test",
    description:
      "This card is designed to test your custom Tailwind CSS configuration. It uses custom colors, gradients, and styling.",
    accentText: "Random Data",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-600">{data.title}</h2>
        <p className="mt-4 text-gray-500">{data.description}</p>
        <span className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-300 rounded-full">
          {data.accentText}
        </span>
      </div>
    </div>
  );
};

export default Login;
