let div = document.querySelector('div')
let btn = document.querySelector('button')
let iframe = document.querySelector('iframe')

iframe.style.display = 'block'

btn.addEventListener = (('click', () => {
    
    fetch('https://ipinfo.io/json')
        .then((res) => res.json())
        .then((data) => {
            
            div.innerHTML += `
            <div>

            <h2>IP:${data.ip}</h2>
            <h2>region:${data.region}</h2>
            <h2>country:${data.country}</h2>
            <h2>location:${data.loc}</h2>
            <h2>timezone:${data.timezone}</h2>
       
            </div>
            
        `    })
        
}))

