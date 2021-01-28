import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out What we have in plans</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/cyber-hacker-hoodie-photo.jpg'
                            text='What we are skilled at protecting your document '
                            label='CybePunk'
                            path='/services'
                        />
                        <CardItem 
                            src='images/covid-19-cybersecurity-statistics-hero.jpg'
                            text='Locate Threat from anywhere in the word including
                            where the socialization is poor'
                            label='Cybe Threat location'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/Network-Security-101-Cyber-Security-Basics.png'
                            text='We Build BYOB to monitor network instrastructure for pentest'
                            label='Netork Security'
                            path='/services'
                        />
                        <CardItem 
                            src='images/e9e0fec883a74b9543aa40fcbc218c7f.jpg'
                            text='We provide skilled way and software to protect and provide data'
                            label='Data Protection'
                            path='/services'
                        />
                        <CardItem 
                            src='images/social-media-danger.png'
                            text='We provide security for social media handle from cyber attackers'
                            label='Social Protection'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
