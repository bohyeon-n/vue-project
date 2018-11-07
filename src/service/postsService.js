import axios from 'axios'
export function getPosts(page, order, category) {
  if (category !== null) {
    return getFilteredPosts(page, category, order)
  } else {
    return axios.get(`https://comento.cafe24.com/request.php?page=${page}&ord=${order}`)
  }
}
export function getFilteredPosts(page, category, order) {
  return axios.get(`https://comento.cafe24.com/request.php?page=${page}&ord=${order}&category=${category}`)
}
export function getAds(page, size) {
  return axios.get(`https://comento.cafe24.com/ads.php?page=${page}&limit=${size}`)
}

export function getCategory() {
  return axios.get(`https://comento.cafe24.com/category.php`)
}

export function getPostDetail(id) {
  return axios.get(`https://comento.cafe24.com/detail.php?req_no=${id}`)
}
