import React from 'react';
import './Search.scss';


  class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchingText: ''};
      }
    
    handleChange = e => {
        let searchingText = e.target.value;
        this.setState({searchingText: searchingText});
    }  

    render() {
      return (
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm} className="search-bar" placeholder="Wpisz frazę..."></input>
      );
    }
  } 
  
  export default Search;