import React from 'react';
import './App.scss';

import Search from './components/Search/Search.jsx';
import Gif from './components/Gif/Gif.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchingText: '',
      gif: {}
    };
  }

  handleSearch = (searchingText) => {
    this.setState({
      loading: true  
    });

    this.getGif(searchingText, function(gif) { 
      this.setState({ 
        loading: false, 
        gif: gif,  
        searchingText: searchingText 
      });
    }.bind(this));
  }

  getGif = (searchingText, callback) => {
    let GIPHY_API_URL = 'https://api.giphy.com';
    let GIPHY_PUB_KEY = 'NDVCXsQq3i3riMhaO5kaYLmC9LDpnWd1';

    var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
      var xhr = new XMLHttpRequest();  // 3.
      xhr.open('GET', url);
      xhr.onload = function() {
          if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText).data; // 4.
              var gif = {  // 5.
                url: data.fixed_width_downsampled_url,
                sourceUrl: data.url
              };
              callback(gif);  // 6.
          }
      };
    xhr.send();
  }
  
  render() {
    return (
      <div className="App">
        <h1>Wyszukiwarka gifów</h1>
        <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
        <Search onSearch={this.handleSearch} />
        <Gif loading={this.state.loading} url={this.state.gif.url} sourceUrl={this.state.gif.sourceUrl} />
      </div>
    );
  }
}



export default App;
