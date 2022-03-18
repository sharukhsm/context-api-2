import React, { useContext } from "react";
import { ComponentF } from "./ComponentF";
import { UserContext, ChannelContext } from "../App";

export const ComponentE = () => {
  //Simple way
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
    </div>
  );
};
