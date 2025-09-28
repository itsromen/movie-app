import { useEffect, useState, useRef } from "react";
import Movie from "./Movie";

export default function Movies({
  search,
  page,
  setPage,
  searchedMovies,
  setSearchedMovies,
}) {
  const [movies, setMovies] = useState([]);

  const loaderRef = useRef(null);

  const fetchMovies = async (page) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
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
    console.log(data);
    setMovies((prev) => [...prev, ...data.results]);
  };

  const fetchSearch = async (page, search, signal) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`,
      {
        signal,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTc5NjM5MzVmODIzMWU0OWZhNTQwMmU4NThmNDJiOSIsIm5iZiI6MTc1ODc5NjkwNC42MzY5OTk4LCJzdWIiOiI2OGQ1MWM2ODI4ZTIxYzdlOTcxM2E0N2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kuFbo9kdqAI8jnu4zX-GtFcRmJ_UF-IesT-pikJRnNo",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setSearchedMovies((prev) => [...prev, ...data.results]);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      search && fetchSearch(page, search, signal);
      !search && fetchMovies(page);
    } catch (err) {
      if (err.name === "AbortError") {
        return;
      }
    }

    return () => controller.abort();
  }, [page, search]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-screen max-w-[2500px] self-center grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-2 py-2 px-4">
      {search ? (
        <>
          {searchedMovies.map((m, i) => (
            <Movie
              key={i}
              year={m.release_date}
              title={m.title}
              poster={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
            />
          ))}
          <div ref={loaderRef} className="h-10" />
        </>
      ) : (
        <>
          {movies.map((m, i) => (
            <Movie
              key={i}
              year={m.release_date}
              title={m.title}
              poster={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
            />
          ))}
          <div ref={loaderRef} className="h-10" />
        </>
      )}
    </main>
  );
}
