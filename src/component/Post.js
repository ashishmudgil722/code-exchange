import { Avatar } from '@material-ui/core';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { MoreHorizOutlined,ShareOutlined } from '@material-ui/icons'
import React from 'react';
import '../css/Post.css';

function Post(){
    return (
        <div className="post">
            <div className="post__info">
                <Avatar />
                <h5>Username</h5>
                <small>Timestamp</small>
            </div>
            <div className="post__body">
                <div className="post__question">
                    <p>Question</p>
                    <button className="post__btnAnswer">Answer</button>
                </div>
            <div className="post__answer">
                <p></p>
            </div>
            <img src="https://qphs.fs.quoracdn.net/main-qimg-6c78ed5af6f4e0474a7fc413a75af20f" alt="xyz"></img>
            </div>
            <div className="post__footer">
                <div className="post__footerAction">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>
                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className="post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    );
}

export default Post;