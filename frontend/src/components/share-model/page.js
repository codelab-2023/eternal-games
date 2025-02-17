import React from 'react'
import {ShareSocial} from 'react-share-social'
import Modal from '@mui/material/Modal'

export default function SocialShare({ open, handleClose, shareUrl}) {

  const style = {
    root: {
      background: '#1f2b3d',
      borderRadius: 3,
      border: 0,
      width: 500,
      marginX: 10,
      boxShadow: '0 3px 5px 2px rgba(31, 43, 61, .3)',
      color: 'white',
    },
    ShareButton: {
      flex: 0.1
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 2
    },
    copyContainer: {
      border: '1px solid #1f2b3d',
      background: 'rgb(0,0,0,0.7)',
    },
    copyUrl: {
      color: '#808080',
      textWrap: 'wrap'
    },
    title: {
      color: 'aquamarine',
      fontStyle: 'italic'
    }
  };

  return (
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ShareSocial
            url ={shareUrl}
            socialTypes= {['whatsapp', 'facebook', 'telegram', 'twitter', 'linkedin', 'reddit', 'instapaper', 'email']}
            style={style}
        />
      </Modal>
  )
}
