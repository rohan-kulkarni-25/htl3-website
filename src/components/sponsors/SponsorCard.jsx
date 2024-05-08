import React from 'react'

const SponsorCard = ({url,link,size}) => {
  return (
    <a href={link}>
        <img src={url} className={`w-${size}`}/>
    </a>
  )
}

export default SponsorCard