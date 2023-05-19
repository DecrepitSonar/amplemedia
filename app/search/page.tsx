import React from 'react'
import { IoEllipsisHorizontal } from 'react-icons/io5';

export default function Search() {
  return (
    <div className='SearchPage'>
             <h4 className="searchInput">Searching </h4>
            <div className="SearchFilter">
                <button>All</button>
                <button>Artist</button>
                <button>Channel</button>
                <button>Playlist</button>
                <button>Podcast</button>
            </div>

            <div className="searchList_videoContainer">
                <div className="searchList_videoItem"/>
                <div className="SearchList_header">
                    <div>
                        <div className="seatchList_channelAVI"/>
                        <span>Channel Name</span>
                    </div>
                    <span> 123M Subscribers</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. !</p>
                </div>
                <button><IoEllipsisHorizontal/></button>
            </div>

            <div className="searchList_channelItemContainer">
                <div className="searchList_channelItem"/>
                <div className="SearchList_header">
                    <div>
                        <span>Channel Name</span>
                    </div>
                    <span> 123M Subscribers</span>
                </div>
                <button><IoEllipsisHorizontal/></button>
            </div>

            <div className="searchList_channelItemContainer">
                <div className="searchList_channelItem"/>
                <div className="SearchList_header">
                    <div>
                        <span>Channel Name</span>
                    </div>
                    <span> 123M Subscribers</span>
                </div>
                <button><IoEllipsisHorizontal/></button>
            </div>
        </div>
  )
}
