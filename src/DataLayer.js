import React, { createContext, useContext, useReducer } from "react";

// This DataLayer collects data whenever it is needed. We don't need
// to pass down information as props when using this

export const StateContext = createContext();

export const DataLayer = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


export const useDataLayerValue = () => useContext(StateContext);



