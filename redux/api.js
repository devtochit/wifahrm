import axios from 'axios';

const BASE_URL = "https://danielhillay-upgraded-space-telegram-ppr5pwg7wgwc7jgr-8099.preview.app.github.dev/v2";

export const signup = async (data) => {
  const response = await axios.post(`${BASE_URL}/signup`, data);
  return response.data;
};

export const login = async (data) => {
  const response = await axios.post(`${BASE_URL}/login`, data);
  return response.data;
};
