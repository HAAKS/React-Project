import React from 'react';
import ReactPlayer from 'react-player';

export default class Player extends React.Component{

	constructor(props) {
	    super(props);
	    this.state ={
	    playing: true,
	    progress: "0%"
	    }
	    this.togglePlay=this.togglePlay.bind(this);
	}
	  
	togglePlay(){
	    this.setState({playing: !this.state.playing})
	  }
	render(){
	console.log("playeerrsss");
	console.log(this.props);
		if(!this.props.current) {
			
			return null
		}
		if(!this.props.current.preview_url){
			alert("No Track Preview");
			return(
			<div>
				<h1>hereeeghgh423</h1>
				</div>
				)
		}
		
		const artist = this.props.current.artists[0].name;
		console.log(this.props);
		return(
			<div className="player">
				<h1>hereeeghgh</h1>
				<div>
					<h5>{this.props.current.name}</h5>
					<p>{artist}</p>
				</div>
               	
				
				<div className="player">
					<ReactPlayer url={this.props.current.preview_url} playing={this.state.playing} hidden />
				</div>
			</div>
			)
	
}
}