import React from 'react';
import Player from './components/Player';
export default function Tracklist (props) {

const {tracks} =props;

console.log("getttyalaa");
	console.log(props);
if(props.tracks)
{
	return(

	<div>
		<table >
		<h1>Top Tracks</h1>

			<tbody>

				{tracks.map((track,i)=> (
					
						<tr onClick={() => props.playTrack(track,i)} key={i}>
							<td >{i+1}.</td>
							<td > {track.name}</td>
							<td >{track.duration_ms}</td>
						</tr>

					
					))}
			</tbody>
		</table>
		
		
	
	</div>
	)
}
else{
return(
	<div>
		
		<h1>Top Tracks</h1>
		</div>
		)
}

} 

