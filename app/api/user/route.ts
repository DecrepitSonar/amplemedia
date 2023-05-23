import { connectToDB } from "@/utils/database"

export const GET = async (request: Request, id: string) => {

    try{
        const db = await connectToDB()
        const users = db!.collection('users')
        const data = await users.find().toArray()

        if(!data) return new Response("Profile not found", {status: 404})
        return new Response(JSON.stringify(data), {status: 200})
    }
    catch( err ){
        console.log( err )
    }
}