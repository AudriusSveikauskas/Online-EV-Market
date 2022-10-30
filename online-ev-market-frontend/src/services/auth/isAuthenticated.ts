import axios from 'axios';
import post from '@/services/fetch/post';

const isAuthenticated = async (role: string) => {
  try {
    const res = await post('auth', { role });
    return !!res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      return {
        status: response?.status,
        title: response?.data.title,
        message: response?.data.message,
      };
    }
    return error;
  }
};

export default isAuthenticated;
