import React from 'react'

const Avatar = ({children,backgroundColor,px,py,color,borderRadius,fontSize,cursor,height,width}) => {
    const style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color:color || "black",
        borderRadius,
        fontSize,
        textAlign: "center",
        cursor: cursor || null,
        textDecoration: "none",
        height: height,
        width:width
    }
    return (
        <div style={style}>{children}</div>
    )
}

export default Avatar