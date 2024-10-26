import React from 'react'
import Image from 'next/image'

import logo from '@/assets/icons/logo.svg'
import menu from '@/assets/icons/menu.svg'
import bag from '@/assets/icons/bag.svg'
import heart from '@/assets/icons/heart.svg'
import faveHeart from '@/assets/icons/faveHeart.svg'
import getPaid from '@/assets/icons/getPaid.png'
import linkedin from '@/assets/icons/linkedin.svg'
import facebook from '@/assets/icons/fb.png'
import x from '@/assets/icons/x.png'
import youtube from '@/assets/icons/youtube.png'

const iconMap = {
  logo,
  menu,
  bag,
  heart,
  faveHeart,
  getPaid,
  linkedin,
  facebook,
  x,
  youtube,
}

type IconName = keyof typeof iconMap

interface Props {
  name: IconName
  width?: number | string
  height?: number | string
  className?: string
}

export const Icon: React.FC<Props> = ({
  name,
  width = 24,
  height = 24,
  className = '',
}) => {
  const iconSrc = iconMap[name]

  if (!iconSrc) {
    console.error(`Icon "${name}" not found.`)
    return null
  }

  return (
    <Image
      src={iconSrc}
      alt={`${name} icon`}
      width={width}
      height={height}
      className={className}
    />
  )
}
