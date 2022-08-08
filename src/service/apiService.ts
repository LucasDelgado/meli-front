export const apiService = {
  get: async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) throw response.status;

    return await response.json();
  },
};
