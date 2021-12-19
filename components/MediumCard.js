export default function MediumCard({ title, img }) {
  return (
    <div className="relative h-80 w-80 flex-none flex flex-col justify-end items-center shadow-lg rounded-lg cursor-pointer hover:scale-105 duration-200 group">
      <img 
        className="absolute w-full h-full rounded-lg z-0 group-hover:brightness-75"
        src={img}
        alt=""
      />
      <p className="hidden group-hover:block relative z-10 text-white text-xl font-medium text-center mb-5">
        {title}
      </p>
    </div>
  )
}
