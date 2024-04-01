import { CiSearch } from "react-icons/ci";

export const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative w-full sm:w-1/4">
      <CiSearch
        className="absolute left-2 mt-2 text-gray-500 h-6 w-6"
        onClick={() => {
          const search = document.getElementById("search") as HTMLInputElement;
          if (search) {
            alert(search.value);
          }
        }}
      />
      <input
        type="text"
        placeholder={"جست و جو"}
        className="rounded-md pl-10 pr-2 py-2 w-full bg-gray-200 text-gray-500 onfocus:bg-gray-100"
        id="search"
        onChange={handleSearch}
      />
    </div>
  );
};
