import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import useStore from "../store/";
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const setGithub = useStore((state) => state.setGithub);
  const github = useStore((state) => state.github);
  const setTotalStarts = useStore((state) => state.setTotalStarts);
  const setTotalForks = useStore((state) => state.setTotalForks);
  const setPopularRepos = useStore((state) => state.setPopularRepos);

  useEffect(() => {
    if (github?.login) {
      setTotalStarts(github.login);
      setTotalForks(github.login);
      setPopularRepos(github.login);
    }
  }, [github?.login, setTotalStarts, setTotalForks, setPopularRepos, github]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGithub(searchInput);
  };
  return (
    <header className="bg-yellow-500 h-1/3 flex relative">
      <div className="container m-auto ">
        <h1 className="text-4xl text-white">Get Detail About Github User</h1>
        <div className="absolute -bottom-10 container search-box-shadow">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full h-20 focus:outline-none text-2xl py-8 px-12"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
            />
            <div className="absolute top-1/2 left-4 transform  -translate-y-1/2 text-2xl">
              <FiSearch />
            </div>
            <div className="absolute top-1/2 right-4 transform  -translate-y-1/2 text-2xl">
              <button
                type="submit"
                className="bg-yellow-500 px-4 py-2 rounded-md text-white"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
