import React from 'react'

interface EventBySlug {
    slug: string
}

const EventBySlug: React.FC<EventBySlug> = ({slug}) => {
    return (
        <div>
            <h1>filter events by slug</h1>
        </div>
    )
}

export default EventBySlug;