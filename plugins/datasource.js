import axios from 'axios'

function config () {
  const apiUrl = 'https://swapi.co/api'
  return {
    'apiList': apiUrl + '/people/'
  }
}

export const getList = (page = 1) => {
  const apiUrl = config().apiList + '?page=' + page
  return axios
    .get(apiUrl)
    .then(response => response.data)
}
