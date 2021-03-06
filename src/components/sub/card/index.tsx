export default function Card({ title, children }) {
  return (
    <div
      data-aos="fade-up"
      className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
    >
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-wrap">
          <p className="w-full mb-2 font-bold text-xl text-gray-800 px-6">
            {title}
          </p>
          <p className="text-gray-600 text-base px-6 mb-5">{children}</p>
        </div>
      </div>
    </div>
  );
}
