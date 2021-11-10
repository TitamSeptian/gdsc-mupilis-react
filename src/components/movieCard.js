import React,{ useState } from "react";
import { Card,Modal,Button, Row, Col } from "react-bootstrap";

const MovieCard = ({ src, title, date, rating,id,overview,lang}) => {
    let url = "https://api.themoviedb.org/3/movie/"+id;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={src} alt="Movie Poster"/>
                <Card.Body>
                    <Card.Title>
                        <h5>{title}</h5>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{date} </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Rating : {rating} </Card.Subtitle>
                    <a href="javascript:void(0)" className="card-link see-detail2" data-id={id} onClick={handleShow} data-url={url}>See Details</a>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={4}>
                            <img src={src} className="img-fluid" />
                        </Col>
                        <Col md={8}>
                            <ul className="list-group">
                                <li className="list-group-item"><h3>{title}</h3></li>
                                <li className="list-group-item">Released : {date}</li>
                                <li className="list-group-item">Language : {lang}</li>
                                <li className="list-group-item">Rating : {rating}</li>
                                <li className="list-group-item">Overview : {overview}</li>
                            </ul>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MovieCard;