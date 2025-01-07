import axios from "axios"
import { local_config } from '../local_config'

const axiosInstance = axios.create({
    baseURL: local_config.apiUrl,
})

export default axiosInstance
