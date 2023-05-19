'use client'
import { useEffect } from 'react';
import { IoHeart } from 'react-icons/io5';

export default function Watch() {

  return (
    <div className='videoPageContainer'>
        <div className="videoPlayerContainer">
            <div className="videoSection">
                <div className="videoSection_header">
                    <div className="videoSection_header_overlay">
                        <div className="videoPlayerContainer">
                            <div className="videoPlayer"/>
                            <div className="videoPlayer_description">
                                <div className="videoPlayer_description_author">
                                    <div className="channelAvi"/>
                                    <div className="videoPlayer_description_author_title">
                                        <span>This is a placeholder for video title </span>
                                        <span>Username</span>
                                    </div>
                                </div>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Consectetur quos facilis impedit necessitatibus minima
                                    asperiores non, perspiciatis harum quam unde laboriosam
                                    sapiente iste. Rem cupiditate unde dignissimos veritatis
                                    dolores consequuntur!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="commentSection">
                <span>45 comments</span>
                <div className="commentSection_inputSection">
                    <div className="channelAvi"/>
                    <input type="text" placeholder='Comment '/>
                </div>

                <div className="commentItem_container">
                    <div className="commentItem_author">
                        <div className="channelAvi"/>
                        <span>Username</span>
                    </div>
                    <div className="commentItem_comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores quae! Recusandae quibusdam eligendi eos dolorum, voluptatibus maiores iusto nemo, quisquam harum id consectetur excepturi molestiae! Fugit debitis harum illo?</p>
                        <div className="commentItem_buttons">
                            <button><i><IoHeart/></i> Likes</button>
                            <span>10 mins ago</span>
                            <button>reply</button>
                        </div>
                    </div>
                </div>

                <div className="commentItem_container">
                    <div className="commentItem_author">
                        <div className="channelAvi"/>
                        <span>Username</span>
                    </div>
                    <div className="commentItem_comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores quae! Recusandae quibusdam eligendi eos dolorum, voluptatibus maiores iusto nemo, quisquam harum id consectetur excepturi molestiae! Fugit debitis harum illo?</p>
                        <div className="commentItem_buttons">
                            <button><i><IoHeart/></i> Likes</button>
                            <span>10 mins ago</span>
                            <button>reply</button>
                        </div>
                    </div>
                </div>

                <div className="commentItem_container">
                    <div className="commentItem_author">
                        <div className="channelAvi"/>
                        <span>Username</span>
                    </div>
                    <div className="commentItem_comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores quae! Recusandae quibusdam eligendi eos dolorum, voluptatibus maiores iusto nemo, quisquam harum id consectetur excepturi molestiae! Fugit debitis harum illo?</p>
                        <div className="commentItem_buttons">
                            <button><i><IoHeart/></i> Likes</button>
                            <span>10 mins ago</span>
                            <button>reply</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

            <div className="sideSection">
                <div className="recommendations">
                    <span>You may like</span>
                    <div className="recommendations_videoCollection">

                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title"> This is a placeholder title</span>
                                <span className="details"> Channel name</span>
                                <span className="details"> 1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>


                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title">This is a placeholder title</span>
                                <span className="details">Channel name</span>
                                <span className="details">1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>


                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title">This is a placeholder title</span>
                                <span className="details">Channel name</span>
                                <span className="details">1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>


                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title">This is a placeholder title</span>
                                <span className="details">Channel name</span>
                                <span className="details">1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>


                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title">This is a placeholder title</span>
                                <span className="details">Channel name</span>
                                <span className="details">1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>


                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title">This is a placeholder title</span>
                                <span className="details">Channel name</span>
                                <span className="details">1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>


                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title">This is a placeholder title</span>
                                <span className="details">Channel name</span>
                                <span className="details">1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>


                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title">This is a placeholder title</span>
                                <span className="details">Channel name</span>
                                <span className="details">1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>


                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title">This is a placeholder title</span>
                                <span className="details">Channel name</span>
                                <span className="details">1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>


                        <div className="recommendations_videoCollection_video_container">
                            <div className="recommendations_videoCollection_video"/>
                            <div className="recommendations_videoCollections_video_details">
                                <span className="recommendations_videoCollections_video_details_title">This is a placeholder title</span>
                                <span className="details">Channel name</span>
                                <span className="details">1241 Views</span>
                                <span className="details"> published Mar1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}