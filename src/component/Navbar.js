import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon  from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon  from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import Button from '@material-ui/core/Button';
import "../css/Navbar.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Navbar() {

    const user = useSelector(selectUser);


    return (
        <div className = 'qHeader'>
            <div className = "qHeader__logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.png' alt = 'myimage'/>
            </div>
            <div className = "qHeader__icons">
                <div className = 'qHeader__icon'>
                    <HomeIcon />
                </div>
                <div className = 'qHeader__icon'>
                    <FeaturedPlayListOutlinedIcon />
                </div>
                <div className = 'qHeader__icon'>
                    <AssignmentTurnedInOutlinedIcon />
                </div>
                <div className = 'qHeader__icon'>
                    <PeopleAltOutlinedIcon />
                </div>
                <div className = 'qHeader__icon'>
                    <NotificationsOutlinedIcon />
                </div>
            </div>
            <div className = 'qHeader__input'>
                <SearchIcon />
                <input type = "text" placeholder="Search Quara"/>
           </div>
            <div className = 'qHeader__Rem'>
                <div className='qHeader__avtar'>
                <Avatar onClick = {() => auth.signOut()} src = {user.photo}/>
                </div>
            <LanguageIcon />
            <Button>Add Question</Button>
            </div>
        </div>
    );
}

export default Navbar;