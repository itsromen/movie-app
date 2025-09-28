import { useState } from "react";
import Header from "./Header";
import Movies from "./Movies";

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  return (
    <div className="flex flex-col">
      <Header
        search={search}
        onSearch={setSearch}
        setPage={setPage}
        setSearchedMovies={setSearchedMovies}
      />
      <Movies
        search={search}
        page={page}
        setPage={setPage}
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
      />
    </div>
  );
}

export default App;
