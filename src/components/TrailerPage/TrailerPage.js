import React from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

const TrailerPage = () => {
    const { videoId } = useParams(); // Get the video ID from the URL

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div style={{ padding: '40px' }}>
            <h1>Trailer</h1>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
};

export default TrailerPage;