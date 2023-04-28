import React from "react";
import {Grid , Paper , Typography} from '@material-ui/core'
import Videoitem from "./Videoitem";

const Videolist=({videos , OnVideoselect})=>{
    const listOfVideos = videos.map((video)=><Videoitem video={video} OnVideoselect={OnVideoselect}/>)

    return(
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default Videolist;