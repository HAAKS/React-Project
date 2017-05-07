import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Links} from 'react-router-dom';

import Home from './components/Home';
import SearchArtists from './components/SearchArtists';
import SearchAlbums from './components/SearchAlbums';
import SingleAlbum from './components/SingleAlbum';
import SingleArtist from './components/SingleArtist';
import Player from './components/Player';
import ArtistList from './components/ArtistList';
import Tracklist from './Tracklist';
const API_URL ='https://api.spotify.com/v1';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      queue:[],
      currentIndex:null
      
    }
    this.playTrack=this.playTrack.bind(this);
    }

  playTrack(tracks,index){
    this.setState({queue:tracks,currentIndex:index});

    console.log("getttyalaa222");
    console.log(this.state.queue);
    console.log(this.state.currentIndex);
  }
  

   nextTrack(){
    this.setState({currentIndex:this.state.currentIndex+1});
  }

  selectTrack(i){
    this.setState({currentIndex:this.state.currentIndex+i});
  }

  //playerTracks
  render() {
    return (
      
        <BrowserRouter>
            <div className="container">
              <div className="content-wrap">
                
                
                <div className="main-content">
                  <Route exact path="/" component={Home} />
                  <Route path="/search/:type?" component={SearchArtists} />
                  <Route path="/search/:type?" component={SearchAlbums} />
                  <Route path="/album/:id?" component={SingleAlbum} />
                  <Route path="/artist/:id?" render={
                    (routeParams) => <SingleArtist playTrack={this.playTrack} {...routeParams}/>
                  } />

                </div>
              </div>
              <Player current={this.state.queue} />
              
             <Tracklist queue={this.state.queue} currentIndex={this.state.currentIndex} playTrack={this.playTrack}/>
            </div>      
        </BrowserRouter>
      
    )
  }
}
export{API_URL};
