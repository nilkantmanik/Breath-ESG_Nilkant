import axios from 'axios';

const getToken = () => {
  return localStorage.getItem('token');
};

const isTokenValid = async () => {
  const token = getToken();
  if (!token) {
    return false;
  }

  try {
    const response = await axios.get('http://localhost:4000/verifyToken', {
      headers: {
        Authorization: token
      }
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

export default {
  getToken,
  isTokenValid
};
