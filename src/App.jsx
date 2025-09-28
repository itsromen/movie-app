import { useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
import Movie from "./Movie";

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(null);

  return (
    <div className="flex flex-col">
      {id ? (
        <Movie id={id} />
      ) : (
        <>
          <Header
            search={search}
            onSearch={setSearch}
            setPage={setPage}
            setSearchedMovies={setSearchedMovies}
            sortBy={sortBy}
            setSortBy={setSortBy}
            setMovies={setMovies}
            id={id}
          />
          <Movies
            search={search}
            page={page}
            setPage={setPage}
            searchedMovies={searchedMovies}
            setSearchedMovies={setSearchedMovies}
            sortBy={sortBy}
            movies={movies}
            setMovies={setMovies}
            setId={setId}
          />
        </>
      )}
    </div>
  );
}

export default App;
