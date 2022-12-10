import React, { useEffect } from 'react'
import { useState } from 'react'
import MeetupList from '../components/meetup/MeetupList'

function Meetups() {
    const [loading, setLoading] = useState(true);
    const [meetups, setMeetups] = useState([])
    const [error, setError] = useState(null)

    const fetchMeetup = async () => {
        try {
            const response = await fetch(
                'https://meetup-6b110-default-rtdb.firebaseio.com/meetups.json'
            )
            const data = await response.json()

            // Create object data into a array
            const meetupsArr = []
            for (const key in data) {
                const meetupItem = {
                    id: key,
                    ...data[key]
                }
                meetupsArr.push(meetupItem)
            }

            setMeetups(meetupsArr)
            setLoading(false)



        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    useEffect(() => {
        fetchMeetup()
    }, [])

    if (loading) {
        return (
            <section className='container mx-auto pt-16 pb-16 text-center text-white'>
                <p>Loading.....</p>
            </section>
        )
    }

    if (error) {
        return (
            <section className='container mx-auto pt-16 pb-16 text-center text-white'>
                <p>{error.message}</p>
            </section>
        )
    }


    return (
        <section className='container mx-auto'>
            <h1 className='text-2xl text-white text-center my-6 font-bold'>All Meetups</h1>
            <MeetupList meetups={meetups} />
        </section>
    )
}

export default Meetups