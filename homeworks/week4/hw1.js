const request = require('request')

request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) =>{
    let obj = JSON.parse(body)
    obj.map(ele => console.log(`${ele.id} ${ele.name}`))
    }  
)
