import React from 'react';
import axios from 'axios';
import {API_URL} from '../App';
import ArtistList from './ArtistList';
import SingleArtist from './SingleArtist';
import {BrowserRouter, Route, Links} from 'react-router-dom';


export default class Home extends React.Component{

	constructor(props) {
		super(props);
		this.state={
			artists:[]
		}
	}
	
	componentDidMount(){
		const url='https://api.spotify.com/v1/search?type=artist&q=amr';
		axios.get(url).then( (response) =>{
			this.setState({artists:response.data.artists.items});
		})
		
	}

	render(){
		return(
				<div>
					<h1>Home</h1>
					<ArtistList artists={this.state.artists} />
				</div>
			)
	}

}

