import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SPOTIFY_API_ENDPOINT
});

axiosInstance.interceptors.request.use(
    (request) => {
        const accessToken = process.env["NEXT_PUBLIC_ACCESS_TOKEN"];

        if (accessToken) {
            request.headers.Authorization = `Bearer ${accessToken}`
        }

        return request;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const request = error.config
        if (error?.response?.status === 401) {
            const spotifyAccessToken = await axios({
                baseURL: process.env.DEV_ENV,
                method: "get",
                url: "/api/refresh_token",
            });
            const res = spotifyAccessToken.data;
            process.env["NEXT_PUBLIC_ACCESS_TOKEN"] = res.accessToken
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.accessToken}`;
            return axiosInstance(request);
        }
    }
)

export default axiosInstance;