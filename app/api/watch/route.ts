import { connectToDB, client } from "@/utils/database"

export const GET = async () => {

    try {
        const db = await connectToDB()
        const videosCollection = db!.collection('featuredVideos')
        const usersCollection = db!.collection('users')
        const videos = db!.collection("videos")
        
        const featured = await videosCollection.find().toArray()
        const users = await usersCollection.find().limit(8).toArray()
        const liveVideos = await videos.find({live: true}).toArray()
        const music = await videos.find({live: false, catagory: "music"}).toArray()

        console.log(liveVideos)

        const pageContent = {
            header: {
                title: "New Releases",
                videos: featured
            },
            body: [
                {
                    title: "Discover",
                    items: users,
                    type: "users"
                },
                {
                    title: "OnAir",
                    items: liveVideos,
                    type: "videos"
                },
                {
                    title: "Music",
                    items: music,
                    type: "videos"
                }
            ]
        }


        console.log( pageContent )
        return new Response(JSON.stringify(pageContent), { status: 200 })
    }
    catch( err ){
        console.log( err )
    }

}