import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '63440f834778455698b292e8ad3fa69f'
    }
})