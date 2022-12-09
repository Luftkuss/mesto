fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
  headers: {
    authorization: 'ce774f77-8c0e-4344-a990-44b9a94c00ea'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });