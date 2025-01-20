import { createContext } from "react";

const UserContext = createContext({
  loggedInfo: "defaultUser",
});

export default UserContext;
