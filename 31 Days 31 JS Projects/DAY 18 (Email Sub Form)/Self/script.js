const scriptURL = 'https://script.google.com/macros/s/AKfycbx9CbLHY1YLSEKpS9QQexCRqaucLdG7WCPyTlLDwbHX3Qvqcl4I6p-6xkhRQr0Cf36kWQ/exec'
  const form = document.forms['submit-to-google-sheet']


  

  form.addEventListener('submit', e => {
    e.preventDefault()
    const input = document.querySelector("input");
    const textarea = document.querySelector("textarea");
    const span = document.querySelector("span");
    const button = document.querySelector("button");
      span.style.display = "block";
      button.style.marginTop = "20px"
      setTimeout(() => {
        span.style.display = "none";
        button.style.marginTop = "0";
      }, 3000);

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      textarea.value = ""
    input.value = ""
  })