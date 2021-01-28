import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import'./Footer.css';
function Footer() {
    return (
        <div className='footer-container'>
            <section
            className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our expertees from every part
                    of the word you wanna learn just join
                </p>
                <p className='footer-subscription-text'>
                    you can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                        type='email' 
                        name='email' 
                        placeholder='Your Email' 
                        className='footer-input'
                        />
                        <Button 
                        buttonStyle='btn--outline'>Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className='footer-link'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/about'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/about'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/about'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to='/about'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/'className='social-logo'>
                            CLUE <i className='fab fa-typo3'></i>
                        </Link>
                    </div>
                    <small className='website-right'>CLUE © 2021</small>
                    <div className='social-icons'>
                        <Link
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                        className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='Linkedin'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                        <Link
                        className='social-icon-link twitter '
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;