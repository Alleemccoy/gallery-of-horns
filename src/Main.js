import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends React.Component {
  render() {

    let beastArray = data.map(beast => {
      return <HornedBeasts
        image_url={beast.image_url}
        description={beast.descriptions}
        title={beast.title}
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