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

  return <div>{details.title}</div>;
}
