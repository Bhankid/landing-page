import Image from "next/image";
import FeaturedCard from "./components/FeaturedCard";
import Quiz from "./components/Quiz";
import FeaturedCardMobile from "./components/FeaturedCardMobile";
import Rank from "./components/Rank";
import QuizMObile from "./components/QuizMobile";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black text-center sm:block md:block lg:hidden xl:hidden relative">
        <h1 className="text-5xl font-bold text-white mb-4 transparent-text">
          SmartyBet
        </h1>
        <p className="text-lg text-white mb-4">
          Fixtures, scores and more exciting games.
          <br />
          Join with your phone number now!
        </p>
        <div className="absolute inset-0">
          <Image
            src="/glass.png"
            alt="Background with people"
            layout="fill"
            className="object-cover opacity-50"
          />
        </div>
      </div>
      <div className="bg-blue-100 w-full max-w-lg p-2  mx-auto md:block lg:hidden">
        <div className="bg-white rounded-md shadow-md p-2 flex justify-around items-center mb-4">
          <div className="flex flex-col items-center">
            <i className="fas fa-home text-gray-400"></i>
            <span className="text-xs text-center text-gray-500">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-play-circle text-gray-400"></i>
            <span className="text-xs text-center text-gray-500">
              Live Quizzes
            </span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-question-circle text-gray-400"></i>
            <span className="text-xs text-center text-gray-500">Quizzes</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-user-circle text-gray-400"></i>
            <span className="text-xs text-center text-gray-500">
              My Quizzes
            </span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-tv text-gray-400"></i>
            <span className="text-xs text-center text-gray-500">Virtuals</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-ellipsis-h text-gray-400"></i>
            <span className="text-xs text-center text-gray-500">More</span>
          </div>
        </div>
        <div className="bg-white rounded-full shadow-md p-1 flex items-center mb-4">
          <span className="text-gray-500 pl-4">+233</span>
          <input
            type="text"
            placeholder="Enter Mobile Phone Here"
            className="flex-grow p-1 rounded-full outline-none text-gray-500"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-full shadow-md">
          Join Now
        </button>
      </div>
      <div className="bg-blue-100 p-4 space-y-4 sm:block md:block lg:hidden xl:hidden ">
        <FeaturedCardMobile />
        <Rank />
        <QuizMObile />
      </div>

      {/* Desktop */}
      <div className="relative h-screen hidden md:flex  items-center justify-center bg-black">
        <Image
          src="/glass.png"
          alt="Background with people"
          layout="fill"
          className="absolute inset-0 object-cover opacity-50"
        />
        <div className="relative text-center text-white">
          <h1
            style={{ fontSize: "9rem" }}
            className=" font-bold mb-4 transparent-text"
          >
            SmartyBet
          </h1>
          <p className="text-lg mb-6">
            Fixtures, scores and more exciting games.
            <br />
            Join with your phone number now!
          </p>
          <div className="flex justify-center items-center">
            <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
              <span className="px-4 text-gray-700">+233</span>
              <input
                type="text"
                placeholder="Enter Mobile Phone Here"
                className="py-2 px-4 outline-none"
              />
            </div>
            <button className="ml-4 bg-blue-500 text-white py-2 px-6 rounded-full">
              Join Now !
            </button>
          </div>
        </div>
      </div>

      {/* New Content Starts Here */}
      <div className="flex-col items-center hidden md:flex  justify-center min-h-screen p-4 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-black">
          WEEKLY RAIN RANKING
        </h1>
        <div className="flex items-center mb-6">
          <div className="flex-grow flex items-center justify-center space-x-2 mr-80">
            <a href="#" className="text-blue-500 underline">
              Register
            </a>
            <span className="text-black">or</span>
            <a href="#" className="text-blue-500 underline">
              Login
            </a>
            <span className="text-black">to check your rank</span>
          </div>
          {/* Button */}
          <div className="flex items-center bg-blue-600 rounded-full p-2 w-40 relative ml-auto">
            <div className="bg-blue-600 rounded-full p-1">
              <i className="fa-solid fa-headset text-white text-xl"></i>
            </div>
            <div className="absolute right-0 bg-blue-600 rounded-3xl p-2 border-2 border-white">
              <i className="fas fa-arrow-left text-white text-xl"></i>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-5xl">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-6 bg-gray-100 text-left text-black">
                  Weekly Update
                </th>
                <th className="py-2 px-6 bg-gray-100 text-left"></th>
                <th className="py-2 px-6 bg-gray-100 text-left"></th>
              </tr>
              <tr>
                <th className="py-2 px-6 bg-gray-100 text-left text-gray-600">
                  Name
                </th>
                <th className="py-2 px-6 bg-gray-100 text-left text-gray-600">
                  Total Rain
                </th>
                <th className="py-2 px-6 bg-gray-100 text-left text-gray-600">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "0509***980", rain: "₵ 13,226.00", rank: "1st" },
                { name: "0554***866", rain: "₵ 7,035.90", rank: "2nd" },
                { name: "0546***058", rain: "₵ 1,797.80", rank: "3rd" },
                { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
                { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
                { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
                { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
                { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
                { name: " 0546***058", rain: "₵ 1,797.80", rank: "4th" },
                { name: "0546***058", rain: "₵ 1, 797.80", rank: "4th" },
                { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
                { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
                { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
              ].map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-6 text-gray-400">{item.name}</td>
                  <td className="py-2 px-6 text-gray-400">{item.rain}</td>
                  <td className="py-2 px-6 text-gray-400">{item.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Featured */}
      <FeaturedCard />

      {/* Quiz */}
      <Quiz />
    </>
  );
}
