const API_URL: string | undefined = "http://localhost:5000/api/";

const endpoint = {
  items: {
    findAll: (search: string) => `${API_URL}/items?q=${search}`,
    findOne: (id: string) => `${API_URL}items/${id}`,
  },
};

export default endpoint;