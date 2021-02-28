import useStore from "./store/index";
import Header from "./components/Header";
import NumberCard from "./components/NumberCard";
import Menu from "./components/Menu";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "./components/RepoCard";
function App() {
  const github = useStore((state) => state.github);
  const totalStars = useStore((state) => state.totalStars);
  const totalForks = useStore((state) => state.totalForks);
  const popularRepo = useStore((state) => state.popularRepo);
  const notFound = useStore((state) => state.notFound);
  return (
    <div className="h-screen">
      <Header />

      {notFound && (
        <div className="container mx-auto flex items-center h-1/2 justify-center ">
          <h1 className="text-8xl text-opacity-75">No User Found!!</h1>
        </div>
      )}
      {github && (
        <div className="container flex h-2/3 mt-24 gap-12 mx-auto">
          <Menu />
          <div className="w-screen mt-8">
            <div className="flex justify-between">
              <NumberCard text="Fork" number={totalForks} />
              <NumberCard text="Repository" number={github.public_repos} />
              <NumberCard text="Stars" number={totalStars} />
              <NumberCard text="Followers" number={github.followers} />
              <NumberCard text="Following" number={github.following} />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl mb-4">Popular Repository</h3>
              <div className="grid grid-cols-3 gap-4">
                {popularRepo &&
                  popularRepo.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl mb-4">Activity</h3>
              <GitHubCalendar username={github.login} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
