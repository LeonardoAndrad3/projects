function createUser(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    globalThis.createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let emailSingIn = userCredential.user.email;
      alert('userCredential sucess: ' + emailSingIn)
      document.getElementById('userSingIn').innerText = emailSingIn
    })
    .catch((err) => {
      alert('Excuse my! ' + err)
      console.log(error)
    });
} 

function singInUser(){
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  globalThis.signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    let emailSingIn = userCredential.user.email;
    alert('Welcome ' + emailSingIn)
    document.getElementById('userSingIn').innerText = emailSingIn;
    console.log(userCredential)
  })
  .catch((err) => {
    alert('Excuse my! ' + err)
    console.log(err)
  });
}
