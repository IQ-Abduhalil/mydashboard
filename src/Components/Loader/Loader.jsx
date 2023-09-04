import { memo } from 'react'
import { Spinner } from 'react-bootstrap'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


function Loader({ LoaderText }) {
    return (
        <div className="container d-flex flex-column justify-content-between py-5">
            <h1 className='h1 text-center'>{LoaderText} Yuklanmoqda...</h1>
            <div className="spinnerWrapper d-flex justify-content-between align-items-center">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
            </div>
        </div>
    )
}

export default memo(Loader)