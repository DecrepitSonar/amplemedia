import { connectToDB, client } from "@/utils/database"

export const GET = async () => {

    try {
        const db = await connectToDB()
        const videosCollection = db!.collection('featuredVideos')
        
        const featured = await videosCollection.find().toArray()
        const headerData = {
                title: "Watch",
                subtitle: "New Releases",
                videos: featured
        }

        return new Response(JSON.stringify(headerData), { status: 200 })
    }
    catch( err ){
        console.log( err )
    }

}