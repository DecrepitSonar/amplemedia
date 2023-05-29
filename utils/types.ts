
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
        items: any[],
        type: string
    }[]
}
export type  HeaderTypes = {
    title: string, 
    subtitle: string,
    videos: VideoTypes[] 
}
export type LoginFormTypes = {
    email: string,
    password: string,
  }
export type SignupFormTypes = {
    username: string, 
    email: string,
    password: string
}

export type UserAuthType = {
    id: string,
    imageURL: string,
    headerPosterURL: string,
    username: string,
    email: string,
    bio: string,
    subscriptionCount: number,
    Type: string,
    Subscriptions: {}[],
    Histories: {}[],
    BookMarks: {}[],
    Posts: {}[],
    paymentCredential: {},
    Setting:{}
    apiKey: string
}

export type AuthPropTypes = {
    modalOpen: boolean,
    formType: string,
    setForm: Function
    toggleModal: Function

}

export type FormTypes = {
    setForm: Function
    toggleModal: Function
}