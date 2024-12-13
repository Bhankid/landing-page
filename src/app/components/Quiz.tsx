import Image from "next/image";

const Quiz = () => {
  return (
    <div className="w-full mx-auto p-4 px-20 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">
        MORE THAN A QUIZ
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2 justify-items-center">
        <Image
          alt="Three students holding a trophy"
          className="rounded-lg transition-transform duration-300 transform hover:scale-105" // Added hover effect
          height={200}
          src="/Frame 94.png"
          width={300}
        />
        <Image
          alt="Students celebrating with hands raised"
          className="rounded-lg transition-transform duration-300 transform hover:scale-105" // Added hover effect
          height={200}
          src="/Frame 95.png"
          width={300}
        />
        <Image
          alt="A trophy with a red background"
          className="rounded-lg transition-transform duration-300 transform hover:scale-105" // Added hover effect
          height={200}
          src="/Frame 97.png"
          width={300}
        />
        <Image
          alt="A person holding a sign that says 'WE ARE SEVEN A LIVING GOD"
          className="rounded-lg transition-transform duration-300 transform hover:scale-105" // Added hover effect
          height={200}
          src="/Frame 96.png"
          width={300}
        />
        <Image
          alt="Three students holding a trophy and smiling"
          className="rounded-lg transition-transform duration-300 transform hover:scale-105" // Added hover effect
          height={200}
          src="/Frame 98.png"
          width={300}
        />
        <Image
          alt="A person holding a sign that says 'WE ARE SEVEN A LIVING GOD ODADIE'"
          className="rounded-lg transition-transform duration-300 transform hover:scale-105" // Added hover effect
          height={200}
          src="/Frame 96.png"
          width={300}
        />
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center space-x-4">
          <i className="fas fa-circle text-blue-200 text-2xl transition-transform duration-300 transform hover:scale-125"></i>{" "}
          {/* Added hover effect */}
          <div className="h-6 border-l border-gray-300"></div>
          <i className="fas fa-circle text-blue-200 text-2xl transition-transform duration-300 transform hover:scale-125"></i>{" "}
          {/* Added hover effect */}
          <div className="h-6 border-l border-gray-300"></div>
          <i className="fas fa-circle text-blue-200 text-2xl transition-transform duration-300 transform hover:scale-125"></i>{" "}
          {/* Added hover effect */}
        </div>
      </div>
      <p className="text-center mt-4 text-gray-600">
        OFFICIAL BETTING PARTNERS IN GHANA
      </p>
    </div>
  );
};

export default Quiz;
