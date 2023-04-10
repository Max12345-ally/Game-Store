import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8fa868feeecb4809b90d0c0f7cb9dd10'
    }
})