import React, { createContext } from "react"; // Import React as well

import data from "../datasets/products";
export const shopContext = createContext(data);

const ContextProvider = (props) => {
    const contextValue =  { data };
    return (
        <shopContext.Provider value={contextValue}> {/* Corrected syntax */}
            {props.children}
        </shopContext.Provider>
    );
};

export default ContextProvider; // Export default as ContextProvider
