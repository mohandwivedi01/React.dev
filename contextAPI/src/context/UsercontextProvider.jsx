import React, { useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>
            {Children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;