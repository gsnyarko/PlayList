import React from 'react';
import ListaVInfo from './ListaVInfo';

function ListaVideo(props) {
    const videoInfo = props.videos.map(video => (
        <ListaVInfo 
        onVideoSelected={props.onVideoSelected}
        key={video.etag} 
        video={video}/>)
    )
    
        return (
            // col-md-4
            <ul  className='playList'>
                {videoInfo}
            </ul>
        );
    }


export default ListaVideo;