import axios from 'axios'


export async function Service(method, input){
    let data = ''

    switch(method){
        case'post':
            data = axios.post('https://scarfly.ir/accounts/register/', JSON.stringify(input))
        case'get':
            data = axios.get('https://scarfly.ir/accounts/register/', JSON.stringify(input))
    }
    const response = data.json()
    return response
}

