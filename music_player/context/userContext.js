// import React, { createContext, useContext, useReducer } from "react";

// const UserContext = createContext();

// const initialState = {
//   user: null,
// };

// const userReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { user: action.payload };
//     case "LOGOUT":
//       return { user: null };
//     default:
//       return state;
//   }
// };

// const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, initialState);

//   return (
//     <UserContext.Provider value={{ state, dispatch }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };

// export { UserProvider, useUser };
