import Image from "next/image";
import FeaturedCard from "./components/FeaturedCard";
import Quiz from "./components/Quiz";

export default function Home() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center bg-black">
        <Image
          src="/glass.png" // Use the local image from the public directory
          alt="Background with people"
          layout="fill"
          className="absolute inset-0 object-cover opacity-50"
        />
        <div className="relative text-center text-white">
          <h1 className="text-6xl font-bold mb-4">SmartyBet</h1>
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
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
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
