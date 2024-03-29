import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { useHistory, useParams } from 'react-router-dom';
import logo from '../assets/img/youtube.png';

const Player = () => {
    let { id } = useParams();
    let history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className='player-wrapper'>
            <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} 
                        className="react-player"
                        controls
                        width="100%"
                        height="100%"
                        light
                        playing
                        playIcon={<img className="youtubeLogo" src={logo} alt="youtube" />}
                        config={{
                            youtube: {
                                playerVars: { color: "white", 
                                                rel: 0,
                                                modestbranding: 1,
                                                showinfo: 0 }
                            },
                        }}
                    />
            <svg className="previous" onClick={ () => goBack() } enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12z" fill="#2196f3"/>
                <path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12z" fill="#1d83d4"/>
                <path d="m10.73 18.791-6.5-6.25c-.147-.142-.23-.337-.23-.541s.083-.399.23-.541l6.5-6.25c.475-.458 1.27-.119 1.27.541v3.25h5.75c.689 0 1.25.561 1.25 1.25v3.5c0 .689-.561 1.25-1.25 1.25h-5.75v3.25c0 .664-.798.995-1.27.541z" fill="#fff"/>
                <path d="m19 12h-15c0 .204.083.399.23.541l6.5 6.25c.15.145.334.21.514.21.385-.001.756-.299.756-.751v-3.25h5.75c.689 0 1.25-.561 1.25-1.25z" fill="#dedede"/>
            </svg>
        </div>
    )
}

export default Player;