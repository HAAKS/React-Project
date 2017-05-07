import React from 'react';
import Home from './Home';
import SearchArtists from './SearchArtists';
import {Link} from 'react-router-dom';

export default class ArtistList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <h5>Artist List</h5>
          {this.props.artists.map((artist,i) => {
              const image = artist.images.length ? artist.images[0].url:"";
            return(
              <li key={i}>
                  <Link to={`/artist/${artist.id}`}>
                  <img src={image} alt=""/>
                    {artist.name}
                  </Link>
              </li>
              )
              
            }
          )
        }
      </div>
    )  
      
    
  }
}
