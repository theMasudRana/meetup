import React from 'react'


function MeetupItem(props) {

    return (
        <>
            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={props.image} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                    <a href="#" className="btn">
                        Read more
                    </a>
                </div>
            </div>
        </>
    )
}

export default MeetupItem