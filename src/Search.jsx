export default function Search({
  onSearch,
  setPage,
  search,
  setSearchedMovies,
}) {
  return (
    <form
      className="bg-blue-200 py-1 px-4 rounded-xl flex gap-2 items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        value={search}
        onChange={(e) => {
          setSearchedMovies([]);
          setPage(1);
          return onSearch(e.target.value);
        }}
        type="search"
        name="search"
        id="search"
        className="px-2 py-1"
        placeholder="Search for a Movie"
      />
    </form>
  );
}
