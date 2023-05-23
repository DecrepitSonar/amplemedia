import axios from "axios"

export const POST = async ( request: Request, context : { params}) => {
    const formData = await request.json()
    
    try{
        const postRequest = await axios.post('http://localhost:8000/api/v1/auth/login', formData)
        console.log( postRequest.data )
    }catch( err ){
        console.log( err )
    }
}