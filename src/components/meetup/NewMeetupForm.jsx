import { useRef } from 'react';

function NewMeetupForm(props) {

    const titleRef = useRef();
    const imageURLRef = useRef();
    const descriptionRef = useRef();
    const locationRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const meetupTitle = titleRef.current.value;
        const meetupImage = imageURLRef.current.value;
        const meetupDescription = descriptionRef.current.value;
        const meetupLocation = locationRef.current.value;

        const meetupData = {
            title: meetupTitle,
            image: meetupImage,
            description: meetupDescription,
            location: meetupLocation
        }
        props.onAddMeetup(meetupData);
    }

    return (
        <>
            <form className='bg-white p-10 rounded-md w-auto md:w-2/4  mx-4 md:m-auto' onSubmit={submitHandler}>
                <div className="form-control mb-4 flex flex-col">
                    <label className='mb-2' htmlFor="meetup-title">Meetup Title</label>
                    <input className='rounded-md border h-10 px-4' type="text" name="meetup-title" id="meetup-title" required ref={titleRef} />
                </div>
                <div className="form-control mb-4 flex flex-col">
                    <label className='mb-2' htmlFor="meetup-image-url">Meetup Image URL</label>
                    <input className='rounded-md border h-10 px-4' type="text" name="meetup-image-url" id="meetup-image-url" required ref={imageURLRef} />
                </div>
                <div className="form-control mb-4 flex flex-col">
                    <label className='mb-2' htmlFor="description">Meetup Description</label>
                    <textarea className='rounded-md border px-4 py-4' name="description" id="description" cols="30" rows="5" ref={descriptionRef}></textarea>
                </div>
                <div className="form-control mb-4 flex flex-col">
                    <label className='mb-2' htmlFor="meetup-location">Meetup Location</label>
                    <input className='rounded-md border h-10 px-4' type="text" name="meetup-location" id="meetup-location" required ref={locationRef} />
                </div>
                <div className="form-control mb-4 flex flex-col">
                    <button className="submit bg-green-700 text-white p-3 rounded-md hover:bg-green-500 transition-all duration-300" type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default NewMeetupForm