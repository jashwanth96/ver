import React from 'react';
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {<path d="M8.098.649A12.037 12.037 0 0 0 1.088 7h3.525C5.305 4.302 6.541 2.065 8.098.65ZM6.544 7C7.359 3.45 9.014.832 11 .166V7H6.544Zm-2.33 2H.378A12.022 12.022 0 0 0 0 12c0 1.403.24 2.749.683 4h3.703A20.558 20.558 0 0 1 4 12c0-1.032.074-2.037.214-3Zm2.127 7A23.07 23.07 0 0 1 6 12c0-1.036.066-2.041.189-3H11v7H6.341Zm-1.44 2H1.605a12.037 12.037 0 0 0 6.493 5.351c-1.36-1.237-2.475-3.1-3.197-5.35ZM11 23.834C9.205 23.232 7.681 21.037 6.803 18H11v5.834Zm4.902-.483a12.037 12.037 0 0 0 6.493-5.35h-3.296c-.722 2.25-1.837 4.113-3.197 5.35ZM17.197 18c-.878 3.037-2.402 5.232-4.197 5.834V18h4.197Zm2.417-2h3.703A11.98 11.98 0 0 0 24 12c0-1.036-.131-2.041-.378-3h-3.836c.14.963.214 1.968.214 3 0 1.396-.135 2.74-.386 4Zm-1.803-7c.123.959.189 1.964.189 3 0 1.403-.12 2.749-.341 4H13V9h4.811Zm-.355-2H13V.166C14.986.832 16.641 3.45 17.456 7Zm1.931 0c-.692-2.698-1.928-4.935-3.485-6.351A12.037 12.037 0 0 1 22.912 7h-3.525Z" />}
            </svg>
            <span className="logo-text">Job Portal</span>
                     </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <a href="/">
            <BsGrid1X2Fill className='icon'/> Dashboard
             </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/student">
                    <BsFillArchiveFill className='icon'/> Students
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/categories">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/jobapply">
                    <BsPeopleFill className='icon'/> Jobs Applied
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar