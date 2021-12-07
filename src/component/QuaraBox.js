import Avatar from '@material-ui/core/Avatar';
import React,{useSelector} from 'react';
import '../css/QuaraBox.css';
import {selectUser} from "../features/userSlice";

function QuaraBox() {
    // const user = useSelector(selectUser);
    return (
        <div className="quaraBox">
            <div className="quaraBox__info">
                <Avatar/>
                <h5>Ashish</h5>
            </div>
            <div className="quaraBox__quara">
                <p>What is your question or link?</p>
            </div>
        </div>
    );
}

export default QuaraBox;