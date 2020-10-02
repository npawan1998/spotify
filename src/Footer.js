import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className = "footer">
           {/* <h1>i am footer</h1>*/}
            <div className = "footer__left">
                 {/* <p>Album elements </p>*/}
                <img className = "footer__albumLogo" src = "https://static.billboard.com/files/media/Taylor-Swift-1989-album-covers-billboard-1000x1000-compressed.jpg" alt = "album cover"/>
                <div className= "footer__songInfo">
                    <h4>Song Title</h4>
                    <p>details</p>
                </div>
            
            </div>

            <div className = "footer__center">
           {/* <p> player controls</p>*/}
            <ShuffleIcon className = "footer__green"/>
            <SkipPreviousIcon className = "footer__icon"/>
            <PlayCircleOutlineIcon font = "large" className = "footer__icon"/>
            <SkipNextIcon className = "footer__icon"/>
            <RepeatIcon className = "footer__green"/>
            
            </div>
            <div className = "footer__right">
            {/*<p>volume controls</p>*/}
                <Grid container spacing ={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                        <Grid item>
                    <VolumeDownIcon/>
                         </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            
            </div>
        </div>
    )
}

export default Footer
