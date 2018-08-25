import React, { Component } from 'react';
import SearchBar from "./components/search_bar";
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAmIfMkois2GbpzfmGi-aggMjBU7Jia04s'


export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        videos : [],
          selectedVideo: null
      }

      this.onSearch('son tung')

  }

  onSearch (data) {
      YTSearch({ key:API_KEY, term : data},(videos) => {
          this.setState({
              videos : videos,
              selectedVideo : videos[0]
          })
      })
  }


  render() {
    return (
      <div>
        <SearchBar
            onSearch={data => this.onSearch(data)}
        />
        <VideoDetail
            video={this.state.selectedVideo}
        />
        <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}
