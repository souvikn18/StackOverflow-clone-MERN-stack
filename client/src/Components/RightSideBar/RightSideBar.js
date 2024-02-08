import React from 'react'

import './RightSideBar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

const RightSideBar = () => {
    return (
        <aside className='flex flex-col gap-4 float-right'>
            <Widget />
            <WidgetTags />
        </aside>
    )
}

export default RightSideBar