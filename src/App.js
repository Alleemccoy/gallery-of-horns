import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      display: false,
    };
  }

  handleSelectChange = (title) => {
    let beast = data.find(item => item.title === title);
    this.setState({
      selectedBeast: beast,
      display: !this.state.display,
    });
  };

  handleClose = () => {
    this.setState({display: !this.state.display})
  }

  render() {
    return (
      <div className="">
        <Header />
        <Main handleSelectChange={this.handleSelectChange} data={data} />
        <SelectedBeast
        beast={this.state.selectedBeast}
        display={this.state.display}
        handleClose={this.handleClose}
        />
        <Footer />

      </div>
    );
  }
}

export default App;
