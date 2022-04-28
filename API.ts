import axios from "axios"

const baseURL = "https://moebooru.moe/api/"

export default class API {
    /**
    * Gets an API endpoint.
    */
    public get = async (endpoint: string, params?: any) => {
        if (!params) params = {}
        if (endpoint.startsWith("/")) endpoint = endpoint.slice(1)
        const url = baseURL + endpoint
        const response = await axios.get(url, {params}).then((r) => r.data)
        return response
    }

    /**
    * Fetches any url.
    */
    public request = async (url: string, params?: any) => {
        return axios.get(url, params).then((r) => r.data)
    }
}
