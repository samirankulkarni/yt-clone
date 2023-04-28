import React  from "react";

import {Paper , Typography} from '@material-ui/core';

const Videodetails = ({videoname}) => {
    if(!videoname) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${videoname.id.videoId}`
    console.log(videoSrc);

    return(
        <React.Fragment>
        <Paper elevation={6} style={{height:'70%'}}>
            <iframe frameBorder="0" height="100%" width="100%" title="video-player" src={videoSrc}></iframe>
        </Paper>
        <Paper elevation={6} style={{padding:'15px'}}>
            <Typography variant="h4">{videoname.snippet.title}</Typography>
            <Typography variant="subtitle1">{videoname.snippet.channelTitle}</Typography>
            <Typography>{videoname.snippet.discription}</Typography>
        </Paper>
        </React.Fragment>
    )
}

export default Videodetails;

