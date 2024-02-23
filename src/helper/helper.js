import { FaBasketballBall, FaCar, FaDoorOpen, FaDownload, FaFire, FaGlobeAmericas, FaHome, FaPuzzlePiece, FaRegClock, FaRunning, FaUsers } from 'react-icons/fa'
import { MdDirectionsBike, MdFlashOn, MdOutlineAdsClick, MdSportsFootball } from 'react-icons/md'
import { FaEllo, FaGun, FaUserGroup } from 'react-icons/fa6'
import { GiCardAceSpades, GiConsoleController, GiGuardedTower, GiJoystick, GiPoolTableCorner, GiPumpkinMask, GiStoneCrafting, GiTargeted, GiTargeting, GiVineFlower } from 'react-icons/gi'
import * as React from 'react'
import { BsFire, BsStars } from 'react-icons/bs'
import { PiLinuxLogoFill } from 'react-icons/pi'

const mainSliderThumbnails = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQESBp2d1rxKkn1wMOKgUbYfboO_HztpNdQ&usqp=CAU',
    title: 'Valorant'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ7Q-FOVh2LScsYY-JL7Vhu0WvsmPkBoOFg&usqp=CAU',
    title: 'The Last Of Use'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPidA27xgN0yop_TewXNhYjGK-Y41j_ma-w&usqp=CAU',
    title: 'Players Unknown BattleGrounds'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirrliphuqWWgUPKCGjl0O3iNjBJILaJZ9Ng&usqp=CAU',
    title: 'The Witcher'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgyHU5o5XSFFun5sk1Io-IedMxdOQnjmY0g&usqp=CAU',
    title: 'Call Of Duty'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PfXFmxpiwUIvWXLidPjDVG-ccACJ1z_Jpg&usqp=CAU',
    title: 'Far Cry 5',
    author: '@arwinneil'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFc9McA9RAkxtfoDO1841fuq97LD1N_W7CQ&usqp=CAU',
    title: 'Minecraft'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdu6dlQzxo5yiefxmdmMA2oDKjX8okRXkxw&usqp=CAU',
    title: 'Fifa 22'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4K3ZNy16LgWH_fDS5cL7RwEBntv-66a30D6W1Q0Fz6r5ial4TGL_YHhzhjPV9BtuqpI&usqp=CAU',
    title: 'God Of War'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcatq1Jzbd5u0141egzv2Vb8o9H5y3mez1w&usqp=CAU',
    title: 'Hitman'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh41ZKFmeDajgXpvq8c-nVtVfl7FDK6R_FC99k8VxUXY5p7dJVJ6ppjAB8MjhWQcSrnUE&usqp=CAU',
    title: 'Syndicate'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o27Ut0iYw_IWUvtaBY6ETp9a3qjzDe_Whhdr4HQz7bJGndC0it1-HmJvHCVbNXypnXY&usqp=CAU',
    title: 'Apex Lagend'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenBbmBCf3ymwQ56k3PF5-wbZQZw7sbw1LZA&usqp=CAU',
    title: 'Harry Potter'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQSSImukcjt6awXTmoa9wjE5McfGCs9x-Sw&usqp=CAU',
    title: 'Forza Horizon 5'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIbNOkDtSwaUY6NPwbKKWWx0EZ7oOkDQ_oQ&usqp=CAU',
    title: 'Halo Infinity'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnR_OIEl6ZpTCe2NrXpZFeJtMoxULkPMX2JA&usqp=CAU',
    title: 'Red Dead Redemption 2'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLNfc6tuGw7H5IrAfRQpoGObcpIzh9ynndQ&usqp=CAU',
    title: 'Uncharted'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8osbxWbKg4Cz29iSZ16esFIoYvzR6dsUoIQ&usqp=CAU',
    title3: 'Need For Speed'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuLmNEw7xdpB6VbiedJkdnb16D9uWYYYzKg&usqp=CAU',
    title: 'Sub Nautica'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OakdJesXSGkWQkhnQI14LB3-SkfcgpHE8A&usqp=CAU',
    title: 'Mafia IV'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzE-b2ONTJAr4LSNyECheyXnmBH6y3rgung&usqp=CAU',
    title: 'Spider-Man 2'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5-pnte6y0NF2d-eiGMCNqAUvYlz9OE4-lA&usqp=CAU',
    title: 'Grand Theft Auto V'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wwk-w4CVeeHon4U-bv7_Yphg_LmBf_BWuQ&usqp=CAU',
    title: 'Rocket League'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwLu1J6R5lHWXjea4MQBEDBrtFXrdOyj8Ng&usqp=CAU',
    title: 'The Witcher'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNC5gkdzMPpqE0MkXN-n4lbBPGYpLM5AwoMA&usqp=CAU',
    title: 'Cyberpunk'
  }
]

const gameThumbnails = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNQRY3NaYJzy4qp7J6xE1dTFKSNPS1ysgIA&usqp=CAU',
    title: 'Rocket Racing'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2Po5qDf1M7qW_4dBkBWZIhYR-UkroDpx9vLaGtLEyQQnB2w4eL_C7j3AevmOOXitFcI&usqp=CAU',
    title: 'Rocket League'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDu5bbFeCAzzl5W2TH6XR-PFJjSrEA3Gwvg&usqp=CAU',
    title: 'The Witcher'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07-1AeeqSse05YdzXTmJu0DOxTzozuyIY6Q&usqp=CAU',
    title: 'Halo Infinity'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7PR_GrT55Y1e4qc8CcAdb0HTMS2qwD8Yug&usqp=CAU',
    title: 'Spider-Man'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDvAgc02Umq-40eSVTknjfqWX1mbAzQKkZg&usqp=CAU',
    title: 'The Last Of Use'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUZ7uYdZFaDa86moClp5OAP7WfKM-S-slsg&usqp=CAU',
    title: 'God Of War'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOVD0onVj7HVHrvGnr9cbZ6S8qDiGWBVNGw&usqp=CAU',
    title: 'Gta V'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNOQAqgviLQEB2KFwmAjOm9A_-WzBj8hHdw&usqp=CAU',
    title: 'Uncharted'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNjUX_Y-OmCKxq1iBqeP1Sq364E8Xw8JrcA&usqp=CAU',
    title: 'Players Unknown BattleGrounds'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dx-PH0o0sxU9_fQ0i_9YgoJ1ykegvlUbjg&usqp=CAU',
    title: 'Cyberpunk'
  }
]

const categories = [
  {
    tag1: {
      icon: <FaCar/>,
      title: 'Driving'
    },
    tag2: {
      icon: <FaDoorOpen/>,
      title: 'Escape'
    }
  },
  {
    tag1: {
      icon: <MdFlashOn/>,
      title: 'Flash'
    },
    tag2: {
      icon: <FaGun/>,
      title: 'FPS'
    }
  }, {
    tag1: {
      icon: <GiPumpkinMask/>,
      title: 'Horror'
    },
    tag2: {
      icon: <FaEllo/>,
      title: '.io'
    }
  }, {
    tag1: {
      icon: <FaUsers/>,
      title: 'Multiplayer'
    },
    tag2: {
      icon: <GiStoneCrafting/>,
      title: 'Minecraft'
    }
  }, {
    tag1: {
      icon: <GiPoolTableCorner/>,
      title: 'Pool'
    },
    tag2: {
      icon: <FaPuzzlePiece/>,
      title: 'Puzzle'
    }
  }, {
    tag1: {
      icon: <GiTargeted/>,
      title: 'Shooting'
    },
    tag2: {
      icon: <GiTargeting/>,
      title: 'Socker'
    }
  }, {
    tag1: {
      icon: <FaRunning/>,
      title: 'Stickman'
    },
    tag2: {
      icon: <MdSportsFootball/>,
      title: 'Sports'
    }
  }, {
    tag1: {
      icon: <GiGuardedTower/>,
      title: 'Defense'
    },
    tag2: {
      icon: <FaFire/>,
      title: 'Action'
    }
  }, {
    tag1: {
      icon: <FaGlobeAmericas/>,
      title: 'Adventure'
    },
    tag2: {
      icon: <FaUserGroup/>,
      title: '2 Player'
    }
  }, {
    tag1: {
      icon: <FaBasketballBall/>,
      title: 'BasketBall'
    },
    tag2: {
      icon: <MdDirectionsBike/>,
      title: 'Bike'
    }
  }, {
    tag1: {
      icon: <GiVineFlower/>,
      title: 'Beauty'
    },
    tag2: {
      icon: <FaDoorOpen/>,
      title: 'Card'
    }
  },
  {
    tag1: {
      icon: <GiCardAceSpades/>,
      title: 'car'
    },
    tag2: {
      icon: <GiJoystick/>,
      title: 'Casual'
    }
  },
  {
    tag1: {
      icon: <MdOutlineAdsClick/>,
      title: 'Clicker'
    },
    tag2: {
      icon: <GiConsoleController/>,
      title: 'Controller'
    }
  }
]

const sidebarCategories = [
  {
    icon: <FaCar/>,
    title: 'Driving'
  },
  {
    icon: <FaDoorOpen/>,
    title: 'Escape'
  },
  {
    icon: <MdFlashOn/>,
    title: 'Flash'
  },
  {
    icon: <FaGun/>,
    title: 'FPS'
  },
  {
    icon: <GiPumpkinMask/>,
    title: 'Horror'
  },
  {
    icon: <FaEllo/>,
    title: '.io'
  },
  {
    icon: <FaUsers/>,
    title: 'Multiplayer'
  },
  {
    icon: <GiStoneCrafting/>,
    title: 'Minecraft'
  },
  {
    icon: <GiPoolTableCorner/>,
    title: 'Pool'
  },
  {
    icon: <FaPuzzlePiece/>,
    title: 'Puzzle'
  },
  {
    icon: <GiTargeted/>,
    title: 'Shooting'
  },
  {
    icon: <GiTargeting/>,
    title: 'Socker'
  },
  {
    icon: <FaRunning/>,
    title: 'Stickman'
  },
  {
    icon: <MdSportsFootball/>,
    title: 'Sports'
  },
  {
    icon: <GiGuardedTower/>,
    title: 'Defense'
  },
  {
    icon: <FaFire/>,
    title: 'Action'
  },
  {
    icon: <FaGlobeAmericas/>,
    title: 'Adventure'
  },
  {
    icon: <FaUserGroup/>,
    title: '2 Player'
  },
  {
    icon: <FaBasketballBall/>,
    title: 'BasketBall'
  },
  {
    icon: <MdDirectionsBike/>,
    title: 'Bike'
  },
  {
    icon: <GiVineFlower/>,
    title: 'Beauty'
  },
  {
    icon: <FaDoorOpen/>,
    title: 'Card'
  },
  {
    icon: <GiCardAceSpades/>,
    title: 'car'
  },
  {
    icon: <GiJoystick/>,
    title: 'Casual'
  },
  {
    icon: <MdOutlineAdsClick/>,
    title: 'Clicker'
  },
  {
    icon: <GiConsoleController/>,
    title: 'Controller'
  }
]

const sidebarFeatures = [
  {
    title: 'Home',
    icon: <FaHome/>
  },
  {
    title: 'recent-played',
    icon: <FaRegClock/>
  },
  {
    title: 'New',
    icon: <BsStars/>
  },
  {
    title: 'Trending now',
    icon: <BsFire/>
  },
  {
    title: 'Updated',
    icon: <FaDownload/>
  },
  {
    title: 'Originals',
    icon: <PiLinuxLogoFill/>
  },
  {
    title: 'Random',
    icon: <BsStars/>
  }
]

const gamePlayGamesImg = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoDOJZbUuf2mU6r1AxYP0PoNn5XEnCuaG7w&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRgtgJjIznsit1CsxTUbLXei6cq1kKry9ug&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8Pn8Ye-NBuBFgANv4PM_Z4yooAyjH0F8Jw&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQw32qO2WqwzJq2pAVFfIBqMSS2HhA6pK5CQ&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwvymgCpKRxvzl56mT7bF9BkrBaHgb2mbLw&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatoKSTytIzEVsX43869utuHvmOsJcABqwfQ&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1kOi7EbHvyDWOmIUK4TOZn--HhAWjkvRiw&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILOTD7gx911tvT-HPetHP9BYZmyKXVKn9Vg&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05urv-NFz8JbygeMN5U7l3oA3hvw9rjH0Bg&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04mC-F78eUkHmStuvqTsbNYNuEaIRcZXJcn2__Y1szk215syapt4-p4nFo17uMbxYQxc&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79W7IQoKzY4if02D7jR5KZm1JotnzwjY0TQ&usqp=CAU'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMLLrTo7XZuSDymEnLwF7ShwZXowYUDD7FQ&usqp=CAU'
  }
]

const gamePlayGameTags = [
  {
    img: 'https://img.icons8.com/?size=50&id=8931&format=png',
    title: 'Action'
  },
  {
    img: 'https://img.icons8.com/?size=80&id=lp9Lv0PWqOBh&format=png',
    title: '3D'
  },
  {
    img: 'https://img.icons8.com/?size=60&id=lRaI3B0GhAgD&format=png',
    title: 'Battle'
  },
  {
    img: 'https://img.icons8.com/?size=48&id=80604&format=png',
    title: 'Sci-fi'
  },
  {
    img: 'https://img.icons8.com/?size=80&id=zbGZokGkWvLX&format=png',
    title: 'Adventure'
  },
  {
    img: 'https://img.icons8.com/?size=40&id=ghQPAZtxmNbQ&format=png',
    title: 'Graphics'
  },
  {
    img: 'https://img.icons8.com/?size=64&id=PEfxi3mNT0kR&format=png',
    title: 'power'
  },
  {
    img: 'https://img.icons8.com/?size=80&id=R9nmG80rVKvZ&format=png',
    title: 'Super Human'
  },
  {
    img: 'https://img.icons8.com/?size=80&id=iW0pxfkIq0Ck&format=png',
    title: 'Bromance'
  }
]

export {
  gameThumbnails,
  mainSliderThumbnails,
  categories,
  sidebarFeatures,
  sidebarCategories,
  gamePlayGamesImg,
  gamePlayGameTags
}