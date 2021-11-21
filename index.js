let userInfo = {
    name: 'Steve',
    email: "steve@steve.com"
}

function submitData (name, email) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(userInfo),
    })
    .then(r => r.json())
    .then(users => renderId(users))
    .catch((error) => {
        document.body.innerHTML = error.message;
        document.body.append(error)
    
    })
    const renderId=users=>{
        document.body.innerHTML = users.id;
            }   
}

