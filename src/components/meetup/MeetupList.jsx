import React from 'react'
import MeetupItem from './MeetupItem'

function MeetupList(props) {

    return (
        <>
            <div className="grid gap-4 px-4 lg:grid-cols-3 md:grid-cols-2 mb-16">

                {props.meetups.map((meetup) =>
                    <MeetupItem
                        key={meetup.id}
                        title={meetup.title}
                        description={meetup.description}
                        image={meetup.image}
                    />
                )}
            </div>
        </>
    )
}

export default MeetupList