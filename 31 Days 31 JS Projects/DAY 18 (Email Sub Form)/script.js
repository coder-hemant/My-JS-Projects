  const scriptURL = 'https://script.google.com/macros/s/AKfycbxYj5cXgutp3mqQlhx8P12DOYQ1gs9QXm9DzAOkiqX-TnnDSd91nUB0aN6nDzdEtRk/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
