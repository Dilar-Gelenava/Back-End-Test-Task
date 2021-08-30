export const getRepos = async (formData) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${formData.name}%20in:name&per_page=20&order=${formData.order}&sort=${formData.sort}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.trace(error);
  }
};
