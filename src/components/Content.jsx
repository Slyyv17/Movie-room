import React from 'react'
import { FaPlay, FaBookmark, FaSignOutAlt, FaCompactDisc } from 'react-icons/fa'
import profPic from '../imgs/a5533d8ebbd6dd7e0da97214ea00f54e.jpg'
import './main.css'

function Content() {
  return (
        <section className='main-container'>
      {/* Sidebar Menu */}
      <nav className='desktop'>
        <div className="img-box">
          <img src={profPic} alt="Profile" />
        </div>
        <ul>
          <li><a href="/"> <span>Home</span> </a></li>
          
          <li>
            <a href="/movies"> <span> Movies </span> <FaPlay /></a>
            <ul>
              <li><a href="/movies"><span>All Movies</span></a></li>
              <li><a href="/movies/top-rated"><span>Top Rated</span></a></li>
              <li><a href="/movies/genres"><span>Genres</span> <FaCompactDisc /> </a></li>
            </ul>
          </li>

          <li>
            <a href="/tv-shows">TV Shows <FaPlay /></a>
            <ul>
              <li><a href="/tv-shows"> <span>All Shows</span> </a></li>
              <li><a href="/tv-shows/popular"> <span>Popular</span> </a></li>
              <li><a href="/tv-shows/genres"> <span>Genres</span> <FaCompactDisc /> </a></li>
            </ul>
          </li>

          <li>
            <a href="/search">Search </a>
          </li>

          <li>
            <a href="/profile"> <span>Profile</span> </a>
            <ul>
              <li><a href="/profile/settings"><span>Acct Settings</span> </a></li>
              <li><a href="/profile/watchlist"><span>Watch List</span> <FaBookmark /></a></li>
              <li><a href="/logout"> <span>Logout</span> <FaSignOutAlt /> </a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <article>
        {/* Add your main content here */}
      </article>
    </section>
  )
}

export default Content