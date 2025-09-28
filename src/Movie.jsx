import { useEffect, useState } from "react";

export default function Movie({ id }) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTc5NjM5MzVmODIzMWU0OWZhNTQwMmU4NThmNDJiOSIsIm5iZiI6MTc1ODc5NjkwNC42MzY5OTk4LCJzdWIiOiI2OGQ1MWM2ODI4ZTIxYzdlOTcxM2E0N2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kuFbo9kdqAI8jnu4zX-GtFcRmJ_UF-IesT-pikJRnNo",
          },
        }
      );

      const data = await res.json();
      setDetails(data);
    }

    fetchMovie();
  }, []);

  return (
    <div className="flex gap-2 p-2 text-black/80">
      <img
        src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
        alt={`${details.title} Poster`}
        className="w-2/10"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold">{details.title}</h1>

        <p className="flex gap-2">
          <span className="font-bold">
            {details.release_date?.split("-").reverse().join("/")}
          </span>
          &middot;
          <span className="flex gap-2">
            {details.genres?.map((g, i, a) =>
              i === a.length - 1 ? (
                <span key={g.id}>{g.name}</span>
              ) : (
                <span key={g.id}>{g.name},</span>
              )
            )}
          </span>
          &middot;
          <span>{details.runtime} Minutes</span>
          &middot;
          <span>{details.vote_average?.toFixed(1)}/10</span>
        </p>
      </div>
    </div>
  );
}
