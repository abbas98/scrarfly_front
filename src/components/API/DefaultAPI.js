import axios from 'axios'


export async function Service(method, input){
    let data;

    switch(method){
        case'POST':
            data = await axios.post('https://api.scarfly.ir/accounts/register/', JSON.stringify({ "phone_number":input.toString()}), { headers: {'content-type': 'application/json'}})
            break
        case'get':
            
            break
        default:
            return
    }
    
    return data
}

