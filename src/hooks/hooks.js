import { useQuery, useMutation } from "react-query";
import axios from "axios";
import qs from "qs";

async function client(endpoint, { data, method = "GET", params } = {}) {
  let apiURL = "https://jsonplaceholder.typicode.com";
  const config = {
    url: `${apiURL}${endpoint}`,
    method: method ? method : data ? "POST" : "GET",
  };
  if (params) {
    config.params = params;
    config.method = "GET";
    config.paramsSerializer = (params) => {
      return qs.stringify(params, {
        arrayFormat: "brackets",
        encode: true,
        skipNulls: true,
      });
    };
  }
  return axios(config).then(async (response) => {
    const data = await response.data;
    return data;
  });
}

const fetchPost = async ({ query = {} }) => {
  return client(`/posts`, { params: query });
};

const usePost = ({ query } = {}) => {
  return useQuery(["Post", query.userId], () => fetchPost({ query }));
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

function useCreatePost() {
  return useMutation((payload) =>
    client(`/posts`, {
      method: "POST",
      data: payload,
    })
  );
}

function useEditPost() {
  return useMutation(({ payload, id } = {}) =>
    client(`/posts/${id}`, {
      method: "PUT",
      data: payload,
    })
  );
}

function useDeletePost() {
  return useMutation(({ id } = {}) =>
    client(`/posts/${id}`, {
      method: "DELETE",
    })
  );
}

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
  useCreatePost,
  useEditPost,
  useDeletePost,
};
