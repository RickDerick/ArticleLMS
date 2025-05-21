import { createContext, useState, useEffect, useContext } from 'react';
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [token, setToken] = useState(localStorage.getItem('token'))

const check = ()=>{
    return !!token;
  }
  const settingUser = async (user) => {
    localStorage.setItem("articleLms_user", JSON.stringify(user))
    setUser('user')
    
  };

  const login = async (token, user) => {
    localStorage.setItem("articleLms_token", token)
    localStorage.setItem("articleLms_user", JSON.stringify(user))
    setToken('token')
    setUser('user')
    
  };

  const logout = async () => {
    localStorage.removeItem("articleLms_token");
    localStorage.removeItem("articleLms_user");
     window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ check, settingUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);