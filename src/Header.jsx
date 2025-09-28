import Search from "./Search";

export default function Header({
  onSearch,
  search,
  setPage,
  setSearchedMovies,
  sortBy,
  setSortBy,
  setMovies,
}) {
  return (
    <header className="flex py-2 px-4 bg-blue-300 justify-center">
      <div className="flex-auto flex justify-between max-w-[2500px]">
        <form className="hover:bg-blue-200 py-1 px-4 rounded-xl flex items-center gap-2">
          <label>Sort</label>
          <select
            value={sortBy}
            onChange={(e) => {
              setMovies([]);
              setPage(1);
              return setSortBy(e.target.value);
            }}
            name="sort"
            id="sort"
          >
            <option value="popularity.desc">Popularity</option>
            <option value="revenue.desc">Revenue</option>
            <option value="vote_count.desc">Rating Count</option>
          </select>
        </form>
        <Search
          search={search}
          onSearch={onSearch}
          setPage={setPage}
          setSearchedMovies={setSearchedMovies}
        />
        <button className="hover:bg-blue-200 py-1 px-4 rounded-xl">
          Movie
        </button>
      </div>
    </header>
  );
}
