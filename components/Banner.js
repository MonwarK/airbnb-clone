export default function Banner() {
  return (
    <div className="relative h-[40vh] md:h-[50vh] xl:h-[70vh] grid place-items-center">
      <img
        className="absolute z-0 w-full h-full object-bottom object-cover brightness-[80%]"
        src="https://links.papareact.com/0fm"
        alt=""
      />
      <div className="relative z-10 text-center">
        <h3 className="mb-5 font-medium text-xl">Not sure where to go? Perfect.</h3>
        <button className="bg-white rounded-full py-4 px-8 shadow-md text-purple-600 text-lg font-bold hover:shadow-xl">
          I'm flexible
        </button>
      </div>
    </div>
  )
}
