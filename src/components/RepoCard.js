import React from "react";
import { FiStar, FiEye } from "react-icons/fi";
const RepoCard = ({ title, desp, stars, watch_count, repo }) => {
  return (
    <a
      className="search-box-shadow p-6 flex flex-col rounded-md "
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
    >
      <h4 className="font-bold mb-4 text-xl">{repo.name.toUpperCase()}</h4>
      <summary className="font-light mb-auto">
        {repo.description ? repo.description : "No description"}
      </summary>
      <div className="flex mt-2 justify-between font-bold">
        <span className="flex items-center gap-2 ">
          <FiStar className="text-yellow-500" />
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-2 font-bold ">
          <FiEye className="text-yellow-500" />
          {repo.watchers_count}
        </span>
      </div>
    </a>
  );
};

export default RepoCard;
