async function logoutHandler() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    });

    if(response.ok){
        document.location.replace('/');
    }
    else{
        alert(response.statusText);
    }
};

document.querySelector().addEventListener('click', logoutHandler);