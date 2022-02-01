import mainApi from "./MainApi";
import { MAIN_API_BASE_URL } from '../utils/constants';

export function register({ email, password, name }) {
  return mainApi.fetchCall(`${MAIN_API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
  .then((data) => {
    if (data) {
      console.log(data);
      return data;
            }
      else{
        throw new Error("User with this email address already exists");
      }
  });
}

export function authorize({ email, password }) {
  return mainApi.fetchCall(`${MAIN_API_BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((data) => {
      if (data) {
        localStorage.setItem('jwt', data.token)
        console.log(data.token)
        return data.token;
      } else {
        throw new Error("the user with the specified email not found");
      }
    })
}

export function getContent(token) {
    return mainApi.fetchCall(`${MAIN_API_BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
  } 
