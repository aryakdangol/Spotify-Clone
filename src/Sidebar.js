import React from 'react'
import './Sidebar.css'
import Spotifylogo from './images/logo-white.png'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {

    const[{playlists},dispatch] = useDataLayerValue();

    return (
        <div className = "sidebar">
            <img className = "sidebar-logo" src = {Spotifylogo} alt=""/>
            <SidebarOption Icon={HomeIcon} title = "Home" />
            <SidebarOption Icon={SearchIcon} title = "Search" />
            <SidebarOption Icon = {LibraryMusicIcon} title = "Your Library" />
            <br />
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) =>(
                <SidebarOption title={playlist.name} />
            ))
            }
        </div>

    )
}

export default Sidebar
