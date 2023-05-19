import React from 'react'
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import { MdEmail, MdFacebook } from 'react-icons/md';

export default function About() {
  return (
    <div>
        <div className="about_body">
            <div className="about_body_largeAvi"/>
            <div className="about_body_content">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit molestias magni neque. Delectus iste, praesentium voluptates incidunt et temporibus, exercitationem, distinctio ex iusto voluptatem voluptatibus explicabo in! Fuga, nesciunt.</p>
                <h6>Socials</h6>
                <div className="about_body_content_socials">
                    <button><i><MdFacebook/></i></button>
                    <button><i><IoLogoTwitter/></i></button>
                    <button><i><IoLogoYoutube/></i></button>
                    <button><i><IoLogoInstagram/></i></button>
                    <button><MdEmail/></button>
                </div>
                <h3>You may also like</h3>
                <div className="about_body_content_channelRecommendationss">

                    <div className="about_body_content_channelRecommendationss_avi_container">
                        <div className="about_body_content_channelRecommendationss_avi"/>
                        <span>Artist</span>
                    </div>

                    <div className="about_body_content_channelRecommendationss_avi_container">
                        <div className="about_body_content_channelRecommendationss_avi"/>
                        <span>Artist</span>
                    </div>

                    <div className="about_body_content_channelRecommendationss_avi_container">
                        <div className="about_body_content_channelRecommendationss_avi"/>
                        <span>Artist</span>
                    </div>

                    <div className="about_body_content_channelRecommendationss_avi_container">
                        <div className="about_body_content_channelRecommendationss_avi"/>
                        <span>Artist</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
