import axios from "axios";



export let getTrending = async (mediaType,page) => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=2f6255e40e418dca70444c034dbca3de&page=${page}`);

    return data
 };
export let getDetails = async (id, mediaType) => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=2f6255e40e418dca70444c034dbca3de`);
    return data
 };
 
export let getSearchData = async (media, query) => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/search/${media}?api_key=2f6255e40e418dca70444c034dbca3de&query=${query}&language=en-US&page=1&include_adult=false`);
    console.log(data)
    return data
 };
 
 export let axiosPost = async (form_Data, endPoint) => {
    let {data} = await axios.post(`https://route-movies-api.vercel.app/${endPoint}`,form_Data);
    return data
 };