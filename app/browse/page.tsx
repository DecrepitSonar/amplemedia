import React from 'react'

export default function Browse() {
  return (
    <div className='catalogContainer'>
      <div className="page_catalogHeader">
        <h1>Browse</h1>
        <div className="cataog_items_container">
          <div className="catalog_card_item"><span> Podcast</span></div>
          <div className="catalog_card_item"><span>Music Video</span></div>
          <div className="catalog_card_item"><span>Live</span></div>
          <div className="catalog_card_item"><span>Games</span></div>
          <div className="catalog_card_item"><span>Shows</span></div>
          <div className="catalog_card_item"><span>Performances</span></div>
        </div>
      </div>
    </div>
  )
}
