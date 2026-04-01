import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b64b2589e18c4e8bbaae1634d05f7471'
    }
})