import React from 'react';

export default function Albumlist (props) {

const {albums} =props;
return(
	<table >
	<h1>Top Albums</h1>
		<tbody>
			{albums.map((album,i)=> (
					<tr >
						<td > {album.name}</td>
					</tr>
				))}
		</tbody>
	</table>
	)

} 
