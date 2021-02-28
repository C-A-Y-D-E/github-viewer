import React from "react";
import useStore from "../store/index";
const UserProfile = () => {
  const github = useStore((state) => state.github);
  return (
    <div className="mx-auto  flex flex-col items-center gap-4 p-4">
      <img
        src={github.avatar_url}
        alt={github.name}
        className="rounded-full h-40 "
      />

      <div>
        <h3 className="text-xl">{github.name}</h3>
        <p className="text-gray-500">@{github.login}</p>
      </div>
      <a
        className="py-2 px-6 border rounded-full  border-yellow-500"
        href={github.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Follow
      </a>
    </div>
  );
};

export default UserProfile;
