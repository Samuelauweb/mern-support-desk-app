// For making request to the backend api
import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    // JSON.stringify because localStorage can only deal with string
  }
  return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout
}

export default authService
