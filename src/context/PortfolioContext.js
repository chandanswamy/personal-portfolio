import React from "react";

const PortFolioContext = React.createContext({
    isDarkTheme: false,
    changeTheme: () => {}
})

export default PortFolioContext