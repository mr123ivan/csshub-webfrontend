// import { Children } from "react";
// import { EventType, PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
// import { msalConfig } from "./AuthConfig";



// export const AuthProvider =({children}) => {
//     const msalInstance = new PublicClientApplication(msalConfig);

// if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
//     msalInstance.setActiveAccount(msalInstance.getAllAccount()[0]);
// }

// msalInstance.addEventCallback((event) => {
//     if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
//         const account = event.payload.account;
//         msalInstance.setActiveAccount(account);
//     }
// });

// return <MsalProvider instance={msalInstance}>
// {children}
// </MsalProvider>

// }

// export const useAuthProvider = ()=>{
//     return {AuthProvider}
// }



import { createContext, useContext, useEffect, useState } from "react";
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./AuthConfig";

// Create a context to hold auth state
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const msalInstance = new PublicClientApplication(msalConfig);

  // Set active account on load
  useEffect(() => {
    const accounts = msalInstance.getAllAccounts();
    if (!msalInstance.getActiveAccount() && accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0]);
      setUser(accounts[0]); // <-- Set user state
    }

    // Listen for login success
    msalInstance.addEventCallback((event) => {
      if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
        const account = event.payload.account;
        msalInstance.setActiveAccount(account);
        setUser(account); // <-- Set user state on login
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, msalInstance }}>
      <MsalProvider instance={msalInstance}>
        {children}
      </MsalProvider>
    </AuthContext.Provider>
  );
};

// Export useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
