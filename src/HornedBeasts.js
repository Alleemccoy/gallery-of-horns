import React from 'react';
import './HornedBeasts.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numberOfClicks: 0,
      numberOfStars: '✨',
    }
  };

  vote = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
    this.setState({ numberOfStars: '✨' });
  }

  render() {
    return (

      <Card>
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
            <p>
              {this.state.numberOfClicks}
              {this.state.numberOfStars}
            </p>

          </Card.Text>
          <Button onClick={this.vote}>Vote Here</Button>
        </Card.Body>
      </Card>
    );
  };
}

export default HornedBeasts;