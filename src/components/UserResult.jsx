import React from "react";
import {
  searchErrorSelector,
  searchisLoadingSelector,
  searchUserSelector,
} from "../features/SearchUser/slice";
import { useSelector } from "react-redux";

const UserResult = () => {
  const user = useSelector(searchUserSelector);
  const isLoading = useSelector(searchisLoadingSelector);
  const error = useSelector(searchErrorSelector);

  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  console.log(user);
  return user ? (
    <div className="user-result">
      {user.profileIconId > 0 ? (
        <img
          src={`//opgg-static.akamaized.net/images/profile_icons/profileIcon${user.profileIconId}.jpg?image=q_auto&amp;v=1518361200`}
          alt="profileicon"
        />
      ) : null}
      {user.name ? <span className="user-result-name">{user.name}</span> : null}
      {user.summonerLevel ? (
        <span className="user-result-level">Lv. {user.summonerLevel}</span>
      ) : null}
    </div>
  ) : null;
};

export default UserResult;
