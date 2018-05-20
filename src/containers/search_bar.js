import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo } from '../actions/index'

class SearchBar extends React.Component {
    constructor(){
     super();
    }
    render() {
        if(!this.props) return '<div>blank</div>';
        return (
         <div className = "search-bar">
            <input 
             onChange={event  => this.props.search(event.target.value)}
            />
         </div>
        );
    }     
}

// Anything returned from this function will end up as props
// on the SearchBar container
    function mapDispatchToProps(dispatch) {
        // Whenever searchVideo is called, the result shoudl be passed
        // to all of our reducers via action creators
        return bindActionCreators({ search: searchVideo }, dispatch);
    }
    export default connect(null, mapDispatchToProps)(SearchBar);

