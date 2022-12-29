let token = '9549aff943f71b710ba11c146f23445daf6104c529b65a0b'

export const server_calls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
    });

    if (!response.ok){
        throw new Error('Failed to fetch data')
    }
    
    return await response.json()
},

create: async(data: any = {}) => {
    const response = await fetch(`http://127.0.0.1:5000/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    if(!response.ok){
        throw new Error('Failed to create new data on server')

    }

    return await response.json()
},

update: async (id:string, data:any = {}) => {
    const response = await fetch(`http://127.0.0.1:5000/${id}`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'appllication/json',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
},

delete: async(id:string) => {
    const response = await fetch(`http://127.0.0.1:5000/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        }
    })
}
}