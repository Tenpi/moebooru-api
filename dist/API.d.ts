export default class API {
    /**
    * Gets an API endpoint.
    */
    get: (endpoint: string, params?: any) => Promise<any>;
    /**
    * Fetches any url.
    */
    request: (url: string, params?: any) => Promise<any>;
}
