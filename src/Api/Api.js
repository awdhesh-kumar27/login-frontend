import axios from "axios";
import { backend_url } from "./BackendUrl";


export const postMethod = async(link,data,config={}) => {
    try {
        const res = await axios.post(backend_url + link, data, config);
        return res;
      } catch (error) {
        return null;
      }
};

export const getMethod = async(link,data={},config={}) =>{
    try {
        const res = await axios.get(backend_url + link, data, config);
        // console.log(res.data);
        return res;
      } catch (error) {
        return null;
      }
};

export const patchMethod = async(link,data={},config={}) =>{
    try {
        const res = await axios.patch(backend_url + link, data, config);
        return res;
      } catch (error) {
        return null;
      }
};

export const deleteMethod = async(link,config={}) =>{
    try {
        const res = await axios.delete(backend_url + link, config);
        return res;
      } catch (error) {
        return null;
      }
};


export const signUpMethod = async(data)=>{
    var config = {};
    // console.log(data);
    const result =  await postMethod("/register",data);
    return result;
}

export const signInMethod = async(data,config={})=>{
    var config = {};
    // console.log(data);
    const result =  await postMethod("/login",data);
    return result;
}

export const LoggedOut = async()=>{
  var config = {};
  // console.log(data);
  const result =  await getMethod("/LoggedOut");
  // console.log(result);
  return result;
}
