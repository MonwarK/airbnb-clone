export default function ImageCard({img, title, description, buttonText}) {
  return (
    <section className="h-96 relative my-16">
      <img
        className="absolute h-full w-full object-cover rounded-xl"
        src={img}
        alt=""
      />
      <div className="relative z-10 p-16 w-[600px] font-medium">
        <h2 className="text-5xl">{title}</h2>
        <p className="my-3 text-lg">{description}</p>
        <button className="bg-gray-800 hover:bg-gray-700 duration-200 rounded-xl py-3 px-4 text-white font-medium">
          {buttonText}
        </button>
      </div>
    </section>
  )
}
