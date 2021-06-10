/** @format */

import axios from 'axios'

export default async function apiFetcher(path) {
  return axios.get(path)
}
