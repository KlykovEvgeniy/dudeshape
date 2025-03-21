import axios from "axios";

axios.defaults.baseURL = 'https://67cdba52125cd5af75789ab9.mockapi.io'

export const fetchProducts = async () => {
    const response = await axios.get('/dudeshapeprod')
    return response.data
}