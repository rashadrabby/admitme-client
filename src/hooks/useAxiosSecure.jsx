import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  axiosSecure.interceptors.response.use((res) => {
    return res;
  }),
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        signOutUser();
      }
    };

  return axiosSecure;
};

export default useAxiosSecure;
