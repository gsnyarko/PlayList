import React from 'react';
import './App.css';

function ListaVInfo({ video, onVideoSelected }) {
    const imageUrl = video.snippet.thumbnails.default.url;

    const title = video.snippet.title;
    return (
        <li onClick={() => onVideoSelected(video)} className='list-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img src={imageUrl} alt='imageUrl' />
                </div>
                <div className='media-body'>
                    <div>{title}</div>
                </div>
            </div>
        </li>
    );
}

export default ListaVInfo;