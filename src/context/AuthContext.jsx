import { createContext, useState, useContext } from 'react';
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

const check = ()=>{
    return !!token;
  }
  const settingUser = async (user) => {
    console.log('setting user: ', new Date(), 'user', user)
    setUser(user)
  };

  const login = async (token, user) => {
    localStorage.setItem("articleLms_token", JSON.stringify(token))
    localStorage.setItem("articleLms_user", JSON.stringify(user))
    setUser(user)
  };

  const logout = async () => {
    localStorage.removeItem("articleLms_token");
    localStorage.removeItem("articleLms_user");
    setUser(null); 
     window.location.href = "/";
  };

  const getUser  = ()=>{
    return user
  }

  const getToken =()=>{
    return JSON.parse(localStorage.getItem('articleLms_token') || 'null')
  }
  return (
    <AuthContext.Provider value={{ check, settingUser, login, logout,getUser,getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);