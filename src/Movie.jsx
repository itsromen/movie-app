export default function Movie({ year, title, poster }) {
  return (
    <div className="grid grid-rows-[1fr,_25px,_10px] justify-items-center items-center">
      <img
        src={poster}
        alt={`${title} Poster`}
        className="object-fit h-[250px]"
      />
      <h3 className="font-bold text-center line-clamp-1">{title}</h3>
      <p>{year}</p>
    </div>
  );
}
