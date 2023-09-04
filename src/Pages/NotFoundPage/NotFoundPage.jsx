import React, { memo } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NotFoundImage from "../../assets/404_Page_Image.gif"



function NotFound() {
    return (
        <div className='container d-flex justify-content-center align-items-center'><img src={NotFoundImage} alt="NotFoundImage" /></div>
    )
}

export default memo(NotFound)