import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo } from '../actions/index';
import _ from 'lodash';

class SearchBar extends React.Component {
    constructor(){
     super();
    }
    render() {
        // debounce  is used for delayed search after each 300 ms
        const video_search = _.debounce((term) => {this.props.search(term)},300)
        if(!this.props) return '<div>blank</div>';
        return (
         <div className = "search-bar">
            <input 
             onChange={event  =>  video_search(event.target.value) }
            />
         </div>
        );
    }     
}

    function mapDispatchToProps(dispatch) {
      
        return bindActionCreators({ search: searchVideo }, dispatch);
    }
    export default connect(null, mapDispatchToProps)(SearchBar);

// here we cam alos map action creater to propos in shorter way as ->  export default connect(null,{search: searchVideo})(SearchBar);   so we dont need mapDispatchToProps function in that case