const BASE_URL = process.env.MOVIE_BASE_URL
const API_KEY = process.env.MOVIE_API_KEY

export const serverRootApi = async (endPoint: string, options = {}) => {
  if (!BASE_URL || !API_KEY) {
    throw new Error("호출 url 혹은 api key를 확인하세요.")
  }

  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}${endPoint}`, {
    ...options,
  })

  if (!response.ok) {
    throw new Error(`${response.status} 상태 코드로 API 요청에 실패했습니다.`)
  }

  return response.json()
}
