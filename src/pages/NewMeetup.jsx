import React from 'react'
import NewMeetupForm from '../components/meetup/NewMeetupForm'

function NewMeetup() {

    const addMeetupHandler = (meetupData) => {
        fetch(
            'https://meetup-6b110-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    return (
        <section className='container mx-auto pt-20 pb-20'>
            <h1 className='text-center mb-8 text-white text-3xl'>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetup