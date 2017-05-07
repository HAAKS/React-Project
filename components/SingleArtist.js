import React from 'react';
import axios from 'axios';
import {API_URL} from '../App';
import Link from  'react-router-dom';
import Tracklist from '../Tracklist' 
import Albumlist from './Albums' 
import Player from './Player';
export default class SingleArtist extends React.Component{
	constructor(props){
		super(props);
		this.state={
			artist:{},
			tracks:[],
			albums:[]
			
		}
		this.getTopTracks = this.getTopTracks.bind(this);
		this.getAlbums = this.getAlbums.bind(this);
		console.log("hereee:");
		console.log(props);

	}
	

	componentDidMount(){
		const artist_id = this.props.match.params.id;
		const url =`${API_URL}/artists/${artist_id}`;
		axios.get(url).then((response) =>{
			this.setState({artist: response.data});
			
		})
		this.getTopTracks();

	}
	getTopTracks(){

		const artist_id=this.props.match.params.id;
		const url = `${API_URL}/artists/${artist_id}/top-tracks?country=SE`;
		
		axios.get(url).then((response) => {
			this.setState({tracks: response.data.tracks})
		});

		this.getAlbums();
	}
	getAlbums(){
		const artist_id= this.props.match.params.id;
		const url = `${API_URL}/artists/${artist_id}/albums`
		axios.get(url).then((response) => {
			
			this.setState({albums: response.data.items})
		});
	}
	render(){
		const artist_id=this.props.match.params.id;
 		const name = this.state.artist.name;

 		if(this.state.artist.length){
 		
 		const image=this.state.artist.images[0].url;
 	}
        const popularity = this.state.artist.followers;
        
		return (
			<div>
				<h5>Single Artist</h5>
				 <div className="artist-info">
				 	<h2>{name}</h2>

				 	
				 </div>
			 	<Tracklist tracks={this.state.tracks} playTrack={this.props.playTrack}/>

			 	<Albumlist albums={this.state.albums} />
			 	
			</div>
		)
	
}
}