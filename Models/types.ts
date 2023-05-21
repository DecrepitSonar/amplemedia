
export type VideoTypes = {
    id: string,
    user: string,
    title: string,
    posterURL: string,
    catagory: string,
    releaseDate: Date,
    views: number
    contentURL: string,
    userImageURL: string
    live: boolean,
    userId: string
}

export type UserTypes = {
    id: string, 
    name: string,
    type: string, 
    isVerified: boolean,
    imageURL: string, 
    joinDate: string, 
    subscribers: number
}

export type PageDatatypes = {
    header: {
        title: string, 
        videos: VideoTypes[]
    },
    body: 
    {
        title: string, 
        items: VideoTypes[],
        type: string
    }[]
}