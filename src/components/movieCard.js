import { Card } from "react-bootstrap";

const movieCard = ({ src, title, date, rating,id }) => {
    let url = "https://api.themoviedb.org/3/movie/"+id
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={src} alt="Movie Poster"/>
                <Card.Body>
                    <Card.Title>
                        <h5>asdasd</h5>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{date} </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Rating : {rating} </Card.Subtitle>
                    <a href="javascipt:void(0)" className="card-link see-detail2" data-id={id} data-url={ url}>See Details</a>
                </Card.Body>
            </Card>
        </div>
    );
}

export default movieCard;