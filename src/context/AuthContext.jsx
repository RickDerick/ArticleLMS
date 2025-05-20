import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:8000/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      // Get CSRF cookie
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true,
      });
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const register = async (name, email, password, password_confirmation) => {
    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true,
      });
      const response = await axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password
      });
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:8000/api/logout',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      localStorage.removeItem('token');
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};