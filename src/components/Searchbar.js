import React from 'react'
import { Paper , TextField } from '@material-ui/core';

class Searchbar extends React.Component{
    state = {
        searchitem : ''
    }

    handlechange = (event)=>{
       console.log(this.state.searchitem)
        this.setState({searchitem:event.target.value})
    }

    handlesubmit = (event)=>{
        const searchterm = this.state.searchitem;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchterm);

        event.preventDefault();
    }

    render(){
        return(
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handlesubmit}>
                    <TextField fullWidth label = "Search here..." onChange={this.handlechange}></TextField>
                </form>
            </Paper>
        )
    }
}

export default Searchbar;