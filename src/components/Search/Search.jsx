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
        if (searchingText.length > 2) {
            this.props.onSearch(searchingText);
        }
    } 
    
    handleKeyUp = e => {
        if (e.keyCode === 13) {
          this.props.onSearch(this.state.searchingText);
        }
    }

    render() {
      return (
          <input type="text" 
          onChange={this.handleChange} 
          value={this.state.searchTerm} 
          className="search-bar" 
          placeholder="Wpisz frazę..."
          onKeyUp={this.handleKeyUp}
          ></input>
      );
    }
  } 
  
  export default Search;