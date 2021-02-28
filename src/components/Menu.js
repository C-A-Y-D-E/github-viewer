import React from "react";
import { FiLayers, FiStar, FiUsers, FiUser } from "react-icons/fi";
import MenuItem from "./MenuItem";
import UserProfile from "./UserProfile";
const Menu = () => {
  return (
    <div className="w-96 flex flex-col search-box-shadow ">
      <UserProfile />
      <ul className="w-3/4 mx-auto my-8 flex flex-col gap-2">
        <MenuItem title="Repository">
          <FiLayers />
        </MenuItem>
        <MenuItem title="Stars">
          <FiStar />
        </MenuItem>
        <MenuItem title="Follower">
          <FiUsers />
        </MenuItem>
        <MenuItem title="Following">
          <FiUser />
        </MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
