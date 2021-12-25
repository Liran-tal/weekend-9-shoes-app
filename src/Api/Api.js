import axios from 'axios';

const axoisApi = axios.create({
  baseURL: 'https://61c58391c003e70017b7975f.mockapi.io/data/',
});

export default class Api {

  static getData = async () => {
    return await axoisApi.get(); 
  } 

  static addItem = async (item) => {
    return await axoisApi.post("",item);
  }
  
  static editItem = async (item) => {
    return await axoisApi.put("",item);
  }
  
  static deleteItem = async (item) => {
    return await axoisApi.delete("",item);
  }
  
  
}

// import axios from "axios"

// const baseURL =  axios.create({
//     baseURL: "https://61c5b49ac003e70017b7987a.mockapi.io/shoes/"
// })


// export default class api{
//     static getItems = async () =>{
//         const {data} =  await baseURL.get();
//         return data
//     }

//     static postItem = async (item) => {
//      return await baseURL.post("/",item)
//     }

//     static removeItem = async (id) => {
//        return await baseURL.delete(id)
//     }
// }
