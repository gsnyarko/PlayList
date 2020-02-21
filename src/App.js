import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ListaVideo from './ListaVideo';
import DetaglioVideo from './DetaglioVideo';
import YTSearch from 'youtube-api-search';

const ApiKey = 'AIzaSyB2vgtZkOz-XyND7bZYr_MYtldcNWB-SVw'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { videos: [],
    selectedVideo: null }

    this.videoSearch('ghana')

  };


  videoSearch(term) {
    YTSearch({key: ApiKey, term : term}, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]})
    })


  }

  render() {
    return (
      <div className="App">
      <SearchBar onSearchOnchanged={term => this.videoSearch(term)}/>  
      <DetaglioVideo video={this.state.selectedVideo} />
      <ListaVideo 
      onVideoSelected={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
          
      </div>
    );
  }
  
  }
  
export default App;
