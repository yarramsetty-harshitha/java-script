const validationForm = () => {
    event.preventDefault()

    let username = event.target.username.value
    let password = event.target.password.value
    let msg = document.getElementById("message")

    if(username === "" && password === "") {
       console.log( msg.innerText = "please enter username and password" )
    }
}