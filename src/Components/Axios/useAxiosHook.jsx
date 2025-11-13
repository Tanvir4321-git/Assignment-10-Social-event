import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})


const useAxiosHook = () => {
    return axiosInstance
}

export default useAxiosHook




// import axios from "axios"
// import useCustomHooks from "./CustomHook"
// import { useEffect } from "react"
// import { useNavigate } from "react-router"


// const AxiosSecureInstance=axios.create({
//      baseURL: 'http://localhost:3000'
// })

// const useAxiosSecure=()=>{

//     const {user,logOut}=useCustomHooks()
//     const navigate=useNavigate()
// // data base k secure korar jonno amra akta token use korte hoi akhon amra aikhane token ar kaj ta set up kore rakvo and shov api te use korvo.ar age amra aro akta custom use korsi jate main url aro simple kora jai and get post update delete ar kaj aro easy way te kora jai.akhon aita create korle oita r use kora lagve na aita dia akshahte 2ta kaj kora jave

//    useEffect(()=>{
            
//   const requestinterceptor=   AxiosSecureInstance.interceptors.request.use((confiq)=>{

//       confiq.headers.authorization= `berar ${user?.accessToken}`

//         return confiq

//    })


// // aikhane amra je error gulo pai ouglo shov akjaiga theke dekavo
//  const responseInerceptor= AxiosSecureInstance.interceptors.response.use(res=>{
//     return res
//  },
//    err=>{
//       console.log(err)
//     const status= err.status
  
//     if(status===401 || status===403){
//         logOut()
//         .then(()=>{
//               navigate('/registration')
//         })
//     }
//    }
 

// )

//    return()=>{
//     AxiosSecureInstance.interceptors.request.eject(requestinterceptor)
//     AxiosSecureInstance.interceptors.response.eject(responseInerceptor)
//    }
    


//    },[user,logOut,navigate])

//     return AxiosSecureInstance
// }

// export default useAxiosSecure




