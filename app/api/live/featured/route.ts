import { connectToDB } from "@/utils/database"

export const GET = async () => {

    try{
        const db = await connectToDB()
        const featuredb = db!.collection('featuredLive')
        const featured = await featuredb.find().toArray()

        const responseData = {
                title: "On air",
                subtitle: "Live now",
                videos: featured
        }
        console.log( responseData )

        return new Response(JSON.stringify(responseData), {status: 200})
    }
    catch( err ){
        console.log( err )
    }
}