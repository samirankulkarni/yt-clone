import React from "react";
import {Grid , Paper , Typography} from '@material-ui/core'

const Videoitem = ({video,OnVideoselect}) =>{
    return (
        <Grid item xs={12}>
            <Paper style={{display:'flex',alignItems:'center',cursor:'pointer'}} onClick={()=>OnVideoselect(video)}>
                <img style={{marginRight:'20px'}} alt="thumbnails" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1"> <b>{video.snippet.title}</b> </Typography>
            </Paper>
        </Grid>
    )
}

export default Videoitem;