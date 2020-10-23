import axios from 'axios';

/**
 * Implements a data fetcher using Axios
 * @param {string} url The URL to request; may include query string
 * @param {any} data Optional data to POST with the request.
 */
export function dataFetcher(url, data) {
  const headers = {}

  return axios({
    url,
    method: data ? 'POST' : 'GET',
    ...(data && { data })
  });
}
