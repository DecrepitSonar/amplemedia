import { connectToDB } from "@/utils/database"

export const GET = async (request: Request, params: string) => {

    try{
        const db = await connectToDB()
        const users = db!.collection('users')
        const data = await users.findOne({id: params.params.id})
        
        if( !data) return new Response("User not found", {status: 404})
        return new Response(JSON.stringify(data), {status: 200})
    }
    catch( err ){
        console.log( err )
    }
}