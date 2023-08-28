import axios from "axios"
import { useQuery } from "react-query"


const Fetchdata = () => {

    return axios.get("/user/user/")

}

export const useFetchdata = () =>{

    return useQuery('user',Fetchdata)
}

