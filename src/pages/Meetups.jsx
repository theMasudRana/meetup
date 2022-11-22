import React from 'react'
const EVENT_DATA = [
    {
        id: 1,
        title: 'WordCamp Dhaka',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, debitis.',
        image: './dhaka.jpg'
    },
    {
        id: 2,
        title: 'WordCamp Dhaka',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, debitis.',
        image: './dhaka.jpg'
    },
    {
        id: 3,
        title: 'WordCamp Dhaka',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, debitis.',
        image: './dhaka.jpg'
    },
    {
        id: 4,
        title: 'WordCamp Dhaka',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, debitis.',
        image: './dhaka.jpg'
    },
    {
        id: 5,
        title: 'WordCamp Dhaka',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, debitis.',
        image: './dhaka.jpg'
    },
    {
        id: 6,
        title: 'WordCamp Dhaka',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, debitis.',
        image: './dhaka.jpg'
    }
]
import MeetupList from '../components/meetup/MeetupList'



function Meetups() {
    return (
        <section className='container mx-auto'>
            <h1 className='text-2xl text-white text-center my-6 font-bold'>All Meetups</h1>
            <MeetupList meetups={EVENT_DATA} />
        </section>
    )
}

export default Meetups