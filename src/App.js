import _ from 'lodash'
import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ListaVideo from './ListaVideo';
import DetaglioVideo from './DetaglioVideo';
import YTSearch from 'youtube-api-search';
import chiave from './chiave';

const ApiKey = chiave;



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
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div className="App">
      <SearchBar onSearchOnchanged={videoSearch}/>  
      <div className='main'>
      <DetaglioVideo className='item1' video={this.state.selectedVideo} />
      <ListaVideo className='item2'
      onVideoSelected={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
      </div>  
      </div>
    );
  }
  
  }
  
export default App;
