import React from 'react'


export default function shareModel(){

  const style = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',

    },
    copyContainer: {
      border: '1px solid blue',
      background: 'rgb(0,0,0,0.7)'
    },
    title: {
      color: 'aquamarine',
      fontStyle: 'italic'
    }
  };

  return(
      <ShareSocial
      url ="url_to_share.com"
      socialTypes= {['facebook','twitter', 'whatsapp', 'linkedin', 'reddit']}
      style={style}
      />
  )
}
