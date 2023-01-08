export const getPassengersService = (page = 1, size = 10) => {
  return new Promise((resolve, reject) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
};
