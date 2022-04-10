// Add your code here
let body = document.querySelector('body')
let div = document.createElement('div')
function submitData(username, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: username,
            email: userEmail,
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            div.textContent = object.id
            return body.append(div)
        })
        .catch(function (error) {
            div.textContent = error.message
            return body.append(div)
        })
}