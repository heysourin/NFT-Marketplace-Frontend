//! We are gonna import all navbar components here//
import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'

// Internal import
import Style from './Navbar.module.css'
import { Discover, Helpcenter, Notifiaction, Profile, Sidebar } from './index'
import { Button, Error } from '../componentIndex'
import images from '../../img'

const Navbar = () => {
  // ---Use state---///
  const [discover, setDiscover] = useState(false)
  const [help, setHelp] = useState(false)
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  const [openSideMenu, setOpenSideMenu] = useState(false)

  //TO open the menu
  const openMenu = (e) => {
    const btnText = e.target.innerText
    if (btnText == 'Discover') {
      setDiscover(true)
      setHelp(false)
      setNotification(false)
      setProfile(false)
    } else if (btnText == 'HelpCenter') {
      setDiscover(false)
      setHelp(true)
      setNotification(false)
      setProfile(false)
    } else {
      setDiscover(false)
      setHelp(false)
      setNotification(false)
      setProfile(false)
    }
  }

  const openNotification = () => {
    if (!notification) {
      setNotification(true)
      setDiscover(false)
      setHelp(false)
      setProfile(false)
    } else {
      setNotification(false)
    }
  }
  const openProfile = () => {
    if (!profile) {
      setProfile(true)
      setHelp(false)
      setDiscover(false)
      setNotification(false)
    } else {
      setProfile(false)
    }
  }
  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true)
    } else {
      setOpenSideMenu(false)
    }
  }
  // FOR SMARTCONTRACT
  // const { currentAccount, connectWallet, openError } = useContext(
  //   NFTMarketplaceContext,
  // )
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt="Logo" width={100} height={100} />
            <div className={Style.navbar_container_left_box_input}>
              <div className={Style.navbar_container_left_input_box}>
                <input type="text" placeholder="Search NFT" />
                <BsSearch onClick={() => {}} className={Style.searchIcon} />
              </div>
            </div>
          </div>
        </div>
        {/* //Right Section Starts */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {/*//Todo:Discover: Dynamic block, If discover is false (Default case here) then we dont want to hide it */}
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* //Todo: HelpCenter */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <Helpcenter />
              </div>
            )}
          </div>
          {/* //Todo: Notifications */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onclick={() => openNotification}
            />
            {notification && <Notification />}
          </div>
          {/* //Todo: BUTTON SECTION */}
          {/* <div className={Style.navbar_container_right_button}>
            {currentAccount == '' ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
              <Button
                btnName="Create"
                handleClick={() => router.push('/uploadNFT')}
              />
            )}
          </div> */}
          {/*//Todo: USER PROFILE */}

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile currentAccount={currentAccount} />}
            </div>
          </div>
          {/*//Todo: MENU BUTTON, Only Mobile */}

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
      {/*//Todo: SIDEBAR, Only Mobile */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <Sidebar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}

      {/* {openError && <Error />} */}
    </div>
  )
}

export default Navbar
