const BASE_URL = process.env.NEXT_PUBLIC_MOVIE_BASE_URL
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY

export async function rootApi(endPoint: string, options = {}) {
  if (!BASE_URL || !API_KEY) {
    throw new Error("호출 url 혹은 api key를 확인하세요.")
  }

  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}${endPoint}`, {
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API request failed with status code ${response.status}`)
  }

  return response.json()
}
