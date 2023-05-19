import { connectToDB, client } from "@/utils/database"

export const GET = async () => {

    try {
        await client.connect()
        const db = await connectToDB()
        const albums = db.collection('featuredvideos')
        const data = await albums.find().toArray()
        console.log( data )
        return new Response(JSON.stringify(data), { status: 200 })
    }
    catch( err ){
        console.log( err )
    }

}