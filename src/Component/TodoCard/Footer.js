import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-1' style={{ color:'white', backgroundColor: '#395144' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='https://parikhalay.github.io/portfolio/'>
          Alay Parikh
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
