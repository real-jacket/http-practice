let getForm = document.querySelector('.login-form')

getForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let hash = {}
  let need = ['name', 'email', 'password']
  need.forEach((name) => {
    let value = getForm.elements[name].value
    console.log(value)
  })
})
