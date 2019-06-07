import React from 'react';
import './Gif.scss';

var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

  class Gif extends React.Component {
    
    getUrl = () => this.props.sourceUrl || GIPHY_LOADING_URL;
    
    render() {
        var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

      return (
        <div className="gif-container">
        <a href={this.getUrl()} title='view this on giphy' target='new'>
          <img id='gif' className="gif" src={url} />
        </a>
      </div>
      );
    }
  } 
  
  export default Gif;