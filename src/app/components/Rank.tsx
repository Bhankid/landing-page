function Rank() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden sm:block md:block lg:hidden xl:hidden">
      <div className="p-6">
        <h1 className="text-xl text-black font-bold text-center mb-2">
          WEEKLY RAIN RANKING
        </h1>
        <p className="text-center text-black text-sm">
          <a href="#" className="text-blue-500 underline">
            Register
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-500 underline">
            Login
          </a>{" "}
          to check your rank
        </p>
      </div>
      <div className="bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4 text-black">Weekly Update</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 text-black">Name</th>
              <th className="py-2 text-black">Total Rain</th>
              <th className="py-2 text-black">Rank</th>
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
              { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
              { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
              { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
              { name: "0546***058", rain: "₵ 1,797.80", rank: "4th" },
            ].map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 text-gray-400">{item.name}</td>
                <td className="py-2 text-gray-400">{item.rain}</td>
                <td className="py-2 text-gray-400">{item.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rank;
