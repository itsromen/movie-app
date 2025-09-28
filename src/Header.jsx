import Search from "./Search";

export default function Header({
  onSearch,
  search,
  setPage,
  setSearchedMovies,
}) {
  return (
    <header className="flex py-2 px-4 bg-blue-300 justify-center">
      <div className="flex-auto flex justify-between max-w-[2500px]">
        <button>Category</button>
        <Search
          search={search}
          onSearch={onSearch}
          setPage={setPage}
          setSearchedMovies={setSearchedMovies}
        />
        <button>Movie</button>
      </div>
    </header>
  );
}
