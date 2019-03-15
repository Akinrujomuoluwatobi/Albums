import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //This method is handles the life cycle of the application and is called whenever
  //the AlbumList class is called. this is a method applicable to a Component class
  // and not applicable to a functional class. this is the method we make Http request

  state = { albums: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
      return this.state.albums.map(album =>
         <AlbumDetail key={album.title} album={album} />
       );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
