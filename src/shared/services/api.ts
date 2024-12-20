import axios from "axios"
// import router from "@/shared/router"

const app = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

app.interceptors.response.use(
    (response) => response,
    (error) => {
        if ([400, 500].includes(error.response.status)) {
        }
        // if (401 === error.response.status) {
        //     localStorage.removeItem("user-details")
        //     router.push('/');
        // }
        return Promise.reject(error)
    },
)

export default app
