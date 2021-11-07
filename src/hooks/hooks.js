import { useQuery } from "react-query";
import axios from "axios";

async function client(endpoint, { data, method = "GET", params } = {}) {
  let apiURL = "https://jsonplaceholder.typicode.com";
  const config = {
    url: `${apiURL}${endpoint}`,
    method: method ? method : data ? "POST" : "GET",
  };

  return axios(config).then(async (response) => {
    const data = await response.data;
    return data;
  });
}

const fetchPost = async ({ query = {}, id }) => {
  return client(`/posts`, { params: query });
};

const usePost = ({ query, id } = {}) => {
  return useQuery(["Post", id], () => fetchPost({ query, id }));
};

const fetchUserPost = async ({ query = {}, id }) => {
  return client(`/posts/${id}`, { params: query });
};

const useUserPost = ({ query, id } = {}) => {
  return useQuery(["UserPost", id], () => fetchUserPost({ query, id }));
};

const fetchComments = async ({ query = {}, id }) => {
  return client(`/posts/${id}/comments`, { params: query });
};

const useComments = ({ query, id } = {}) => {
  return useQuery(["Comments", id], () => fetchComments({ query, id }));
};

const fetchAlbum = async ({ query = {}, id }) => {
  return client(`/albums`, { params: query });
};

const useAlbums = ({ query, id } = {}) => {
  return useQuery(["Albums", id], () => fetchAlbum({ query, id }));
};

const fetchPhotos = async ({ query = {}, id }) => {
  return client(`/photos`, { params: query });
};

const usePhotos = ({ query, id } = {}) => {
  return useQuery(["Photos", id], () => fetchPhotos({ query, id }));
};

const fetchUsers = async ({ query = {}, id }) => {
  return client(`/users`, { params: query });
};
const useUsers = ({ query, id } = {}) => {
  return useQuery(["users", id], () => fetchUsers({ query, id }));
};

export {
  usePost,
  fetchPost,
  useUserPost,
  fetchUserPost,
  useComments,
  fetchComments,
  fetchUsers,
  useUsers,
  fetchAlbum,
  useAlbums,
  fetchPhotos,
  usePhotos,
};
