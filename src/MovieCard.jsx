export default function MovieCard({ year, title, poster, id, setId }) {
  return (
    <div
      className="grid grid-rows-[1fr,_25px,_10px] justify-items-center items-center"
      onClick={() => setId(id)}
    >
      <img
        src={poster}
        alt={`${title} Poster`}
        className="object-fit h-[250px]"
      />
      <h3 className="font-bold text-center line-clamp-1">{title}</h3>
      <p>{year.split("-")[0]}</p>
    </div>
  );
}
