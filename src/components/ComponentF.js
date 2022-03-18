import React from "react";
import { UserContext } from "../App";

export const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <div>User context value {user}</div>;
        }}
      </UserContext.Consumer>
    </div>
  );
};
