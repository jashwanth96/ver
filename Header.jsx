import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import './Header.css'; // Import the CSS file for styling

function Header({ OpenSidebar }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // You can perform additional search-related actions here if needed
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <div className='search-bar'>
          <BsSearch className='icon' />
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className='header-right' style={{ display: 'flex', alignItems: 'center' }}>
        <BsFillBellFill className='icon hover-effect' />
  <BsFillEnvelopeFill className='icon hover-effect' />
  <div className='icon hover-effect' onClick={toggleDropdown}>
    <BsPersonCircle className='profile-icon' />
    {isDropdownOpen && (
      <div className='dropdown-menu'>
        {/* Add items or links for the dropdown menu */}
        <a href='#'>Profile</a>
        <a href='#'>Settings</a>
        <a href='#'>Logout</a>
      </div>
    )}  
  </div>
 
</div>

    </header>
  );
}

export default Header;