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

    this.getGif(searchingText)
    .then( gif => {
    	this.setState({ 
        	loading: false, 
        	gif: gif,  
        	searchingText: searchingText 
      	});
    })
    .catch(error => console.log(error))
  }

 	getGif(searchingText) {
  	let GIPHY_API_URL = 'https://api.giphy.com';
    let GIPHY_PUB_KEY = 'oQEZzRq7sYEyS909tFCCgO4r8fSc237q';

    let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
    return new Promise(
        function(resolve, reject) {
            let xhr = new XMLHttpRequest();  
      		xhr.open('GET', url);

            xhr.onload = function() {
                if (this.status === 200) {
                	let data = JSON.parse(xhr.responseText).data; 
              		let gif = {  
                		url: data.fixed_width_downsampled_url,
                		sourceUrl: data.url
              		};
                    resolve(gif); 
                } else {
                    reject(new Error(this.statusText)); 
                }
            };
            xhr.onerror = function() {
                reject(new Error(
                   `XMLHttpRequest Error: ${this.statusText}`));
            };
           
            xhr.send();
        });
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
