import axios from "axios"
import { use, useEffect } from "react"
import { Authcontext } from "../Context/Authcontext"

const axiosInstance = axios.create({
    baseURL: 'https://assignment-10-server-three-iota.vercel.app/'
})


const useAxiosHook = () => {
    const { user } = use(Authcontext)


    useEffect(() => {


        const requestinterceptor = axiosInstance.interceptors.request.use((confiq) => {

            confiq.headers.authorization = `berar ${user?.accessToken}`

            return confiq


        })

        return () => {
            axiosInstance.interceptors.request.eject(requestinterceptor)

        }

    }, [user])


    return axiosInstance
}

export default useAxiosHook








