import React from 'react';
import {Link} from 'react-router';

class Blog extends React.Component {
    render() {
        return (
            <div className="blog">
                <h2>This is blog page</h2>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Blog;
