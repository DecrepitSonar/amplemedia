import { connectToDB, client } from "@/utils/database"

export const GET = async () => {

    try{
        await client.connect()
        const db = await connectToDB()
        const users = db.collection('artists')
        const data = await users.find().limit(7).toArray()
        console.log( data )

        return new Response(JSON.stringify(data), {status: 200})
    }
    catch( err ){
        console.log( err )
    }
}