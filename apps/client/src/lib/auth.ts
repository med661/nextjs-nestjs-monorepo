// Frontend Auth Service - lib/auth.ts
import Cookies from 'js-cookie';

export const setAuthToken = (token: string) => {
  Cookies.set('token', token, { 
    expires: 1, // 1 day 
    // secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
};

export const removeAuthToken = () => {
  Cookies.remove('token');
};

export const getAuthToken = () => {
  return Cookies.get('token');
};


