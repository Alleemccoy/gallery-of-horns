import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {

    let beastArray = this.props.data.map((beast, index) => {
      return <HornedBeasts
        key={index}
        image_url={beast.image_url}
        description={beast.descriptions}
        title={beast.title}
        handleSelectChange={this.props.handleSelectChange}
      />

    });

    return (
      <main>
        <CardColumns>
          {beastArray}
        </CardColumns>
      </main>
    );
  }
}

export default Main;