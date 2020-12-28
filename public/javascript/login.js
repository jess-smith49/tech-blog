async function loginHandler(event) {
    event.preventDefault();

    const username = document.querySelector().value.trim();
    const password = document.querySelector().value.trim();

    if(username && password){
        const response = await fetch('/api/user/login' , {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),

            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/dashboard')
        }
        else{
            alert(response.statusText);
        }
    }
};


async function signupHandler(event){
    event.preventDefault();

    const username = document.querySelector().value.trim();
    const password = document.querySelector().value.trim();

    if(username && password){
        const response = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/dashboard')
        }
        else {
            alert(response.statusText);
        }
    }
}

document.querySelector().addEventListener('submit', loginHandler);

document.querySelector().addEventListener('submit', signupHandler);