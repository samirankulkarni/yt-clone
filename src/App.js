import React from "react";
import { Grid } from '@material-ui/core';
import youtube from './apis/youtube';
import Searchbar from './components/Searchbar';
import Videodetails from './components/Videodetails';
import Videolist from "./components/Videolist";

const KEY = 'AIzaSyBBGrsPNcByi5q7ACc_8exiNEkVb3GL4eo'

class App extends React.Component{

    state = {
        video : [],
        selectedVideo : null
    }

    OnVideoselect = (video) =>{
        this.setState({selectedVideo:video})
    }

    handleSubmit = async searchterm =>{
        console.log(searchterm);
        const response = await youtube.get("/search",{params: {
            q:searchterm,
            part: "snippet",
            maxResults: 5,
            key: KEY
        }})

        this.setState({video:response.data.items,selectedVideo:response.data.items[0]})
    }

    render(){
        const {selectedVideo} = this.state;

        return (
            <div>
                <h1 style={{color:'red'}}>WELCOME TO SAMIRANS YOUTUBE CLONE</h1>
        <Grid justify="center" container spacing={10} >
            <Grid item xs={12}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <Searchbar onFormSubmit={this.handleSubmit} />
                    </Grid>
                    <Grid item xs={8}> 
                        <Videodetails videoname={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <Videolist videos={this.state.video} OnVideoselect={this.OnVideoselect}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
        )
    }
}

export default App;