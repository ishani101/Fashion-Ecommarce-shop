
const CategoriesSection = () => {
  const categories = [
    { icon: "💳", text: "Secure Payment" },
    { icon: "💰", text: "Cash on Delivery" },
    { icon: "🇮🇳", text: "Made in India" },
    { icon: "🔄", text: "Easy 7 Day returns and exchange" },
    { icon: "🌍", text: "Shipping Worldwide" },
  ];

  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-5 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center border-gray">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-4xl">{item.icon}</span>
            <p className="text-base md:text-lg font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;


