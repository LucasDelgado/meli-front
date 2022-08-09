const API_URL: string | undefined =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/";

const endpoint = {
  items: {
    findAll: (search: string) => `${API_URL}items?q=${search}`,
    findOne: (id: string) => `${API_URL}items/${id}`,
  },
};

export default endpoint;
