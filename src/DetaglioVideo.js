import React from 'react';

function DetaglioVideo({ video }) {
    if(!video) {
        return <div>Video Loading....</div>
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className='detail-container'>
            <div className='video-detail'>
                <iframe src={url} title={video.snippet.title}></iframe>
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default DetaglioVideo;