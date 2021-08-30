export const getRepo = async (repo_full_name) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo_full_name}`,
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
