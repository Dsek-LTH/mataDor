const backendUrl = 'http://localhost:3000'

//TODO post and errorhandling
export const addOrRemove = (num) => fetch(backendUrl + '/addOrRemove/' + num)
