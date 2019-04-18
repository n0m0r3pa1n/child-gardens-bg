import axios from "axios"

export function getGardens() { return axios.get("https://raw.githubusercontent.com/n0m0r3pa1n/mon-register-parser/master/data.json") }