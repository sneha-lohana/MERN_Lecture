// Add user.json file

fetch('./user.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return fetch(`https://api.github.com/users/${data.name}`)
    })
    .then(res => res.json())
    .then(user =>     
        {
        console.log(user);
        const img = document.createElement('img');
        img.src = user.avatar_url;
        document.body.append(img);
    }
    )
    .catch(error => console.error(error));