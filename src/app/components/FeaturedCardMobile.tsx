const FeaturedCardMobile = () => {
  const features = [
    { icon: "fas fa-money-bill-wave", text: "Instant Withdrawals" },
    { icon: "fas fa-headset", text: "24/7 Online Help" },
    { icon: "fas fa-crown", text: "Best Odds" },
    { icon: "fas fa-gamepad", text: "Casino Games" },
    { icon: "fas fa-ticket-alt", text: "Free Vouchers" },
  ];

  return (
    <div className="flex overflow-x-auto space-x-4  items-center justify-start p-4 md:hidden">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-md p-4 flex flex-col items-center justify-center w-48 h-40"
        >
          <i className={`text-blue-600 text-4xl mb-4 ${feature.icon}`}></i>
          <p className="text-blue-600 text-lg font-medium">{feature.text}</p>
          <div className="w-8 h-1 bg-blue-600 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCardMobile;
