export default function request(url, method, body) {
  return fetch(url, { method, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } })
}