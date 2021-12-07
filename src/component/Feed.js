import React from 'react';
import '../css/Feed.css';
import QuaraBox from './QuaraBox';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <QuaraBox />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Feed