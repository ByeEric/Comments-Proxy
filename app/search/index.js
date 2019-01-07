// NPM Modules
import React, { Component, PureComponent } from "react";
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap/lib";

// Components from files
import RelatedPetsList from "./RelatedPetsList";
import SelectionTabs from "./SelectionTabs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet_id: 1112,
      relatedPets: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.getRelatedPets = this.getRelatedPets.bind(this);
  }


  getRelatedPets(pet_id) {
    axios.get(`http://ec2-52-206-107-252.compute-1.amazonaws.com:3050/api/recommends/${pet_id}`)
    .then(response => {
      this.setState({ relatedPets: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleSelect(key) {
    this.setState({pet_id:key},() => {
      this.props.changePetId(key);
      this.getRelatedPets(key);
    });
  }

  componentDidMount () {
    this.getRelatedPets(this.props.pet_id);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <SelectionTabs id="Tabs" handleSelect={this.handleSelect} />
          </Col>
        </Row>

        <Row>
          <RelatedPetsList
            id="Pets"
            relatedPets={this.state.relatedPets}
            handleSelect={this.handleSelect}
          />
        </Row>
      </Grid>
    );
  }
}


export default App;
