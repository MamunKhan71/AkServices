'use client'

import CalendarScheduler from "./_components/Calendar";

const BookAppointment = () => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className='w-full h-full '>
                <CalendarScheduler />
            </div>
        </div>
    )
}

export default BookAppointment