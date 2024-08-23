import React, { useState } from 'react'
import profPic from '../imgs/a5533d8ebbd6dd7e0da97214ea00f54e.jpg'
import './main.css'
import { FaSearch, FaPlay } from 'react-icons/fa'; 

function Content() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
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
            <a href="/movies"> <span> Movies </span> </a>
            <ul>
              <li><a href="/movies"><span>All Movies</span></a></li>
              <li><a href="/movies/top-rated"><span>Top Rated</span></a></li>
              <li><a href="/movies/genres"><span>Genres</span> </a></li>
            </ul>
          </li>

          <li>
            <a href="/tv-shows">TV Shows </a>
            <ul>
              <li><a href="/tv-shows"> <span>All Shows</span> </a></li>
              <li><a href="/tv-shows/popular"> <span>Popular</span> </a></li>
              <li><a href="/tv-shows/genres"> <span>Genres</span> </a></li>
            </ul>
          </li>

          <li>
            <a href="/search" onClick={openDialog}>Search </a>
          </li>

          <li>
            <a href="/profile"> <span>Profile</span> </a>
            <ul>
              <li><a href="/profile/settings"><span>Acct Settings</span> </a></li>
              <li><a href="/profile/watchlist"><span>Watch List</span> </a></li>
              <li><a href="/logout"> <span>Logout</span> </a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <article>
        {/* search bar */}
        <div className="header">
          <div className="logo-box">
            <a href='/'> Movie-room </a>
          </div>
          <div className="search-box">
          <input type="search" id="search-bar" placeholder='Search for Movies and Tv shows...' />
          <button className='search-btn'> <FaSearch /> </button>
        </div>
        </div>

        <div className="article">
          <div className='sub-box'>
          <p> Movie-room </p>
          <h2> Unlimited <span>Movie</span>, Tv shows & more. </h2>
          
          <div className="semi-box">
            <button> PG 18 </button>
            <button> HD </button>
            <p className="genre-type"> All Genre </p>
            <p className="date"> 2024 </p>
            <p className="time"> 120 mins </p>
          </div>
          <p> Watch anywhere. Cancel anytime. </p>

          <button> <FaPlay /> <span>watch now</span> </button>
        </div>
        </div>
      </article>
    </section>
  )
}

export default Content