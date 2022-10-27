import React from 'react'
import Image from 'next/image'
import Style from './HeroSection.module.css'
import { Button } from '../componentsindex'
import images from '../../img'
const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Explore our wide range of NFTs</h1>
          <p>
          NFT marketplace is the best place to buy and sell NFTs. It is a secure and trusted platform that enables you to trade with confidence. The marketplace offers a wide range of NFTs from different artists and creators, so you can find the perfect one for you. With the help of the marketplace, you can easily connect with other NFT collectors and sellers to buy or sell your NFTs.
          </p>
          <Button btnName="Start Your Search"></Button>
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
