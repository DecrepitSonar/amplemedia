import { connectToDB, client } from "@/utils/database"

export const GET = async (id: string) => {

    try {
        const db = await connectToDB()
        const videosCollection = db!.collection('featuredVideos')
        const usersCollection = db!.collection('users')
        const videos = db!.collection("videos")
        
        const featured = await videosCollection.find().toArray()
        const users = await usersCollection.find().limit(8).toArray()
        const podcast = await videos.find({catagory: "Podcast"}).toArray()
        const games = await videos.find({catagory: "games"}).toArray()
        const music = await videos.find({live: false, catagory: "music"}).toArray()

        const pageContent = {
            header: {
                title: "Watch",
                subtitle: "New Releases",
                videos: featured
            },
            body: [
                {
                    title: "Discover",
                    items: users,
                    type: "users"
                },
                {
                    title: "Podcast",
                    items: podcast,
                    type: "videos"
                },
                {
                    title: "Games",
                    items: games,
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