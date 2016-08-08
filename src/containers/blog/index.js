import React from 'react';
import * as actions from './../../actions';
import {connect} from 'react-redux';

class Blog extends React.Component {
    state = {
        tagText: ""
    }

    handleOnFormSubmit(e) {
        e.preventDefault();
        this.props.addTag(this.state.tagText);
        this.setState({tagText: ""})
    }

    render() {
        return (
            <div className="blog">
                <form onSubmit={this.handleOnFormSubmit.bind(this)}>
                    <input value={this.state.tagText} type="text" placeholder="Enter blog tag" onChange={e => this.setState({tagText: e.target.value})}/>
                    <button type="submit">Add Tag</button>
                </form>
                <h1>Changed blog</h1>
            </div>
        )
    }
}

export default connect(null, actions)(Blog);
