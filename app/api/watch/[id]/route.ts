import { connectToDB, client } from "@/utils/database"

export const GET = async (request: Request,
    { params} : { params: { slug: string}}
    ) =>{

    console.log( params )
    try{
        const db = await connectToDB()
        const videoCollection = db!.collection('videos')

        const video = await videoCollection.findOne({id: params.id})
        const videos = await videoCollection.find()

        const pagecontent = {
            playing: video,
            videos: videos,
        }

        return new Response(JSON.stringify(pagecontent), {status: 200})
    }
    catch( err ){
        console.log( err )
    }
}