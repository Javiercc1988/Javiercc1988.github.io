const apikey = 'https://jsonplaceholder.typicode.com/posts'

async function requestAPI(){
    const req = await axios.get(apikey)
    return req.data.splice(0, 10)
}


async function buscar(search){
    let data =  await requestAPI()

    if (search===true) {
        const value = document.querySelector('#titulo').value
        data = data.filter(element => element.title.includes(value) | element.body.includes(value) )
    }
    else {
        document.querySelector('#titulo').value = ''
    }
    
    document.querySelector('#principal').innerHTML = ''

    data.forEach(element => {
        document.querySelector('#principal').innerHTML += `
        <div>
            <h2>${element.title}</h2>
            <p>${element.body}</p>
        </div>
        `
    });
    
}


buscar(false)