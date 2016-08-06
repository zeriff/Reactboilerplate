import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    This is home page
                </h1>
                <Link to="/blog">Blog</Link>
            </div>
        )
    }
}

export default Home;
