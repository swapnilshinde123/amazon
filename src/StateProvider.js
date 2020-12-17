import React ,{ createContext ,useContext ,useReducer} from "react";
// prepares the dataLayer
 export const StateContext = createContext();
//  wrap our app and provider the dataLayer
 export const StateProvider = ({ reducer , initialState , children})=> (
     <StateContext.Provider value = {useReducer(reducer,initialState)}>
         {children}
     </StateContext.Provider>
 );
// pull information form the dataLayer
 export const useStateValue = () => useContext(StateContext);