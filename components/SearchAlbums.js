import React from 'react';

export default class SearchAlbums extends React.Component{

	constructor(props) {
		super(props);
		this.state={
			albums:[]
		}
		this.searchAlbums = this.searchAlbums.bind(this);
	}

		
}
