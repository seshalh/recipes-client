import axios from "axios";

const username = "admin";
const password = "password";
const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");

// API BASE URL
//var API_BASE_URL = "http://localhost:8080";
var API_BASE_URL = `https://heroku-recipes-service.herokuapp.com`;

export function getAllRecipes() {
  return axios.get(API_BASE_URL + `/api/v1/recipes`, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
}
export function deleteRecipe(id) {
  return axios.delete(API_BASE_URL + `/api/v1/recipes/${id}`, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
}

export function addRecipe(value) {
  return axios.post(API_BASE_URL + `/api/v1/recipes`, value, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
}

export function updateRecipe(value) {
  return axios.put(API_BASE_URL + `/api/v1/recipes`, value, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
}
