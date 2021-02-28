import create from "zustand";

const useStore = create((set, get) => ({
  github: null,
  notFound: false,
  totalStars: null,
  totalForks: null,
  popularRepo: [],
  setGithub: async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "User-Agent": "request",
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      set({ notFound: false });
      return set({ github: data });
    }
    set({ github: null });
    return set({ notFound: true });
  },
  setTotalStarts: async (username) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          "User-Agent": "request",
        },
      }
    );
    const data = await response.json();

    const stars = data.reduce((acc, cur) => acc + cur.stargazers_count, 0);

    set({ totalStars: stars });
  },
  setTotalForks: async (username) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          "User-Agent": "request",
        },
      }
    );
    const data = await response.json();

    const forks = data.reduce((acc, cur) => acc + cur.forks, 0);

    set({ totalForks: forks });
  },

  setPopularRepos: async (username) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/watched?per_page=6&sort=stars&order=desc`,
      {
        headers: {
          "User-Agent": "request",
        },
      }
    );
    const data = await response.json();

    set({ popularRepo: data });
  },
}));

export default useStore;
