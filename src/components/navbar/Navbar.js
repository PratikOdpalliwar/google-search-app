import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <>

   <div className="header-one">
    <div className="logo">
      <div className="name">
      Goglee
        </div>

        <div className="serach-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
     
    </div>

<div className="search-bar">
  <input type="search" />
</div>

<button className="darkmode">
  light <i class="fa-regular fa-lightbulb"></i>
</button>

   </div>

   <div className="header-two">
<div className="all">
  <div className="header-two-logo">
  <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div className="header-two-text">
    All
  </div>
</div>

<div className="news">
<div className="header-two-logo">
<i class="fa-regular fa-newspaper"></i>
</div>
<div className="header-two-text">
  News
</div>
</div>

<div className="images">
<div className="header-two-logo">
<i class="fa-regular fa-image"></i>
</div>
<div className="header-two-text">
  Images
</div>
</div>

<div className="videos">
<div className="header-two-logo">
<i class="fa-solid fa-video"></i>
</div>
<div className="header-two-text">
  Videos
</div>
</div>
   </div>

   </>
  )
}

export default Navbar
