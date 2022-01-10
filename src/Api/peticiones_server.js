import axios from "axios";
import {errorServer} from './messages'

export const domain_server = process.env.REACT_APP_API || "http://localhost:8000";

// GETTING TOKEN
export const getUserToken = async (post) => {
    try {
      const { data } = await axios.post(`${domain_server}/api/auth/login`, post);
      return data;
    } catch (error) {return errorServer;}
  };
  

  










