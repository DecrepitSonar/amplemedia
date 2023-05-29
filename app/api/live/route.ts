import { connectToDB } from "@/utils/database"

export const GET = async (response: Response, { params }) => {

    // switch( )
    console.log( params )
    try{
        const db = await connectToDB()
        const featuredb = db!.collection('featuredLive')
        const featured = await featuredb.find().toArray()
        
        const videodb = db!.collection('videos')
        const games = await videodb.find({catagory: "games"}).toArray()
        const podcasts = await videodb.find({catagory: "Podcast"}).toArray()
        

        const responseData = {
            header: {
                title: "On air",
                subtitle: "Live now",
                items: featured
            },
            body: [
                {
                    title: "Games",
                    items: games,
                    link: "games"
                },
                {
                    title: "Podcasts",
                    items: podcasts,
                    link: "podcast"
                }
            ]
        }

        if( !responseData) return new Response("User not found", {status: 404})
        return new Response(JSON.stringify(responseData), {status: 200})
    }
    catch( err ){
        console.log( err )
    }
}