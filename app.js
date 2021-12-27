const axios = require('axios');

const call = async () => {
    try {
        var url = ""
        url = "https://dog.ceo/api/breeds/list/all"
        url = "https://api.ipo.ir/api/test"

        axios.post(url , {name : 'ali'})
        .then(response => {
            console.log(response.data)
        }); 
        
        // return data 
    } catch (error) {
        console.error(error);
    }
}

call() ; 