import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/supabase";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [user, setUser] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     getCurrentUser()
  //       .then((res) => {
  //         if (res) {
  //           console.log(res);
  //           setIsLoggedIn(true);
  //           setUser(res);
  //         } else {
  //           isLoggedIn(false);
  //           setUser(null);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     supabase.auth.getSession().then(({ data: { session } }) => {
  //       //   setSession(session)
  //       console.log(session);
  //     });

  //     supabase.auth.onAuthStateChange((_event, session) => {
  //       //   setSession(session)
  //       console.log(session);
  //     });
  //   }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
