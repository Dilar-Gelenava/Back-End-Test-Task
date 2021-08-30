export const getData = (url) => {
  fetch(url, {
    method: 'GET',
  })
    .then(function (response) {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then(function (responseData) {
      return responseData;
    })
    .catch(function (error) {
      if (error === 404) {
        console.log('Page Not found', error);
      } else {
        console.log('Server Error');
      }
      console.log(error);
    });
};
