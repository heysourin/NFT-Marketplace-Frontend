import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrClose } from 'react-icons/gr'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from 'react-icons/ti'

//Internal imports
import Style from './Sidebar.module.css'
import image from '../../../img'
import Button from '../../Button/Button'

//* Props are used in Navbar.js in SIDEBAR Components
const Sidebar = ({ setOpenSideMenu }) => {
  //----USESTATE
  const [openDiscover, setOpenDiscover] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)

  const discover = [
    {
      name: 'Collection',
      link: 'collection',
    },
    {
      name: 'Search',
      link: 'searchPage',
    },
    {
      name: 'Author Profile',
      link: 'author',
    },
    {
      name: 'NFT Details',
      link: 'NFT-details',
    },
    {
      name: 'Account Setting',
      link: 'account',
    },
    {
      name: 'Upload NFT',
      link: 'uploadNFT',
    },
    {
      name: 'Connect Wallet',
      link: 'connectWallet',
    },
    {
      name: 'Blog',
      link: 'blog',
    },
  ]

  const helpCenter = [
    {
      name: 'About',
      link: 'aboutus',
    },
    {
      name: 'Contact Us',
      link: 'contactus',
    },
    {
      name: 'Sign Up',
      link: 'signUp',
    },
    {
      name: 'LogIn',
      link: 'login',
    },
    {
      name: 'Subscription',
      link: 'subscription',
    },
  ]

  const openDiscoverMenu = () =>{
    if(!openDiscover){
      setOpenDiscover(true);
    }else{
      setOpenDiscover(false)
    }
  }

  const openHelpMenu = () =>{
    if(!openHelp){
      setOpenHelp(true)
    }else{
      setOpenHelp(false)
    }
  }

  const closeSidebar=()=>{
    setOpenSideMenu(false); // Using the props 
  }
  
  return (
    <div className={Style.sidebar}>
      <GrClose
        className={Style.sidebar_closeBtn}
        onclick={() => closeSidebar()}
      />
      <div className={Style.sidebar_box}>
        <Image src={image.logo} alt="Logo" width={150} height={150} />
        <p>Discover the most outstanding articles on NFTs and share them</p>
        <div className={Style.sidebar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
        </div>
      </div>
      <div className={Style.sidebar_menu}>
        <div>
          <div
            className={Style.sidebar_menu_box}
            onclick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sidebar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div
            className={Style.sidebar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={Style.sidebar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={Style.sidebar_button}>
        <Button btnName="Create" />
        <Button btnName="Connect Wallet" />
      </div>
    </div>
  )
}

export default Sidebar
