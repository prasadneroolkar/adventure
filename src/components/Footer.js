import React from 'react'
import { NavLink } from 'react-router-dom'
import Buttons from './Buttons'

function Footer() {

  let currentDate = new Date();
    return (
        <>
         <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
           <Buttons btnref="/" btntext="join" btnclassName="btn-footer-join"/>
            
          </form>
        </div>
      </section>
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <NavLink to='/'>How it works</NavLink>
            <NavLink to='/'>Testimonials</NavLink>
            <NavLink to='/'>Careers</NavLink>
            <NavLink to='/'>Investors</NavLink>
            <NavLink to='/'>Terms of Service</NavLink>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <NavLink to='/'>Contact</NavLink>
            <NavLink to='/'>Support</NavLink>
            <NavLink to='/'>Destinations</NavLink>
            <NavLink to='/'>Sponsorships</NavLink>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <NavLink to='/'>Submit Video</NavLink>
            <NavLink to='/'>Ambassadors</NavLink>
            <NavLink to='/'>Agency</NavLink>
            <NavLink to='/'>Influencer</NavLink>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <NavLink to='/'>Instagram</NavLink>
            <NavLink to='/'>Facebook</NavLink>
            <NavLink to='/'>Youtube</NavLink>
            <NavLink to='/'>Twitter</NavLink>
          </div>
        </div>
      </div> */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <NavLink to='/' className='social-logo'>
              TREK
              <i class='fab fa-typo3' />
            </NavLink>
          </div>
          <small class='website-rights'>{`TREK ©${currentDate.getFullYear()} `}</small>
          <div class='social-icons'>
            <NavLink
              class='social-icon-link facebook'
              to='/'
             
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </NavLink>
            <NavLink
              class='social-icon-link instagram'
              to='/'
             
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </NavLink>
            <NavLink
              class='social-icon-link youtube'
              to='/'
             
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </NavLink>
            <NavLink
              class='social-icon-link twitter'
              to='/'
             
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </NavLink>
            <NavLink
              class='social-icon-link twitter'
              to='/'
             
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
            
        </>
    )
}

export default Footer
