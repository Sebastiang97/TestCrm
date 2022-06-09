import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.opendota.com/api/',
})

async function get(url) {
  try {
    const result = await instance.get(url)

    return result.data
  } catch (error) {
    throw error.response.data
  }
}

export { get }
