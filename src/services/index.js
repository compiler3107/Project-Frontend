import axios from 'axios'
const API= (method='get', endPoint='/',data=null)=>{
    return axios({
        method: method,
        url: `http://localhost:8080${endPoint}`,
        data: data,
        headers:{
          "Content-Type":"application/json"
        }
      });
}

export default API