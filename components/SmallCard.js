export default function SmallCard({ img, location, distance }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg p-3 m-2 flex items-center space-x-4 rounded-md cursor-pointer">
      <img
        className="w-16 rounded-md"
        src={img}
        alt=""
      />
      <div className="flex-grow">
        <h4 className="font-semibold text-gray-800 text-lg">{location}</h4>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  )
}
