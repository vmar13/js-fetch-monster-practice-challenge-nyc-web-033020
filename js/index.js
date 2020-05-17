document.addEventListener('DOMContentLoaded', () => {
    const limitUrl = 'http://localhost:3000/monsters/?_limit=50'

    const createMonster = monsters => {
        monsters.forEach(monster => {
            const monstCont = document.querySelector('#monster-container')
            //create div for each monster and
            //insert innerHTML for: h2 for name, h4 for age, p tag for desc
            let monstDiv = document.createElement('div')
            monstDiv.innerHTML = `
            <h2>${monster.name}</h2>
            <h4>${monster.age}</h4>
            <p>${monster.description}</p>`

            monstCont.appendChild(monstDiv)
        })
    }

            fetch(limitUrl)
                .then(resp => resp.json())
                .then(monsters => {
                        createMonster(monsters)
                })
           
           
        
        //create form for creating monster w/ name, age, desc
        //place form on DOM above monstCont(appendChild to #create-monster) 
        //createElement <form id="monster-form">
        //create <input id="name" placeholder="name" & for age & desc
        //create button tag with textContent 'Create'
        //when submit event happens, monster saved to API (need POSt request)
                const form = document.createElement('form')
                form.id = 'monster-form'
                form.innerHTML = `
                <input id="name" placeholder="name">
                <input id="age" placeholder="age">
                <input id="description" placeholder="description">
                <button>Create</button>
                `
                document.querySelector('#create-monster').appendChild(form)

                form.addEventListener('submit', (e) => {
                    e.preventDefault()
                    const form = e.target

                    const name = form.name.value 
                    const age = form.age.value
                    const description = form.description.value 

                    let newMonster = {
                        name: name,
                        age: age,
                        description: description
                    } 

                fetch('http://localhost:3000/monsters', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(newMonster)
                    })
               
                        .then(resp => resp.json())
                        .then(console.log)

                })

                //add an event listener to forward button
                //when clicked, load the next 50 monsters to the DOM

                const forwardBtn = document.querySelector('#forward')

                forwardBtn.addEventListener('click', () => {
                    fetch(limitUrl)
                        .then(resp => resp.json())
                        .then(monsters => {
                        
                                createMonster(monsters)
                        
                        })
                })

                
})    
                    



//how i tried to solve the 2nd deliverable
// form.addEventListener('submit', (e) => {
                //     e.preventDefault()
                //     fetch('http://localhost:3000/monsters', {
                //         method: 'POST',
                //         headers: {
                //             'Content-Type': 'application/json',
                //             'Accept': 'application/json'
                //         },
                //         body: JSON.stringify({
                //             "name": form.name.value,
                //             "age": form.age.value,
                //             "description": form.description.value
                //         })
                //             .then(resp => console.log(resp))
                    
                //     })
                // })