import axios from 'axios'

const baseUrl = `http://localhost:8081/v1`

export async function getProducts() {
    try {
        const response = await axios({
            url: `${baseUrl}/products`,
            method: 'GET'
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}