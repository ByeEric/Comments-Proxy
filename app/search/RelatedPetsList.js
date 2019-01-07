import React, { Component } from "react";
import { Col, Image, Panel, Label } from "react-bootstrap/lib";
import Link from '../comps/link';

class RelatedPetsList extends Component {
  constructor(props) {
    super(props);
    this.handleThumbnailSelect = this.handleThumbnailSelect.bind(this);
    this.handlePet = this.handlePet.bind(this);
  }

  handleThumbnailSelect(event) {
    console.log(event.target.id)
    this.props.handleSelect(event.target.id);
  }

  handlePet (id) {
    this.props.handleSelect(id);
  } 

  render() {
    const pets = this.props.relatedPets;
    return (
      <Panel className={'related-main'}>
        <Panel.Body className={'related-main-body'}>
          {pets.map(pet => (
            <div className={'related-panel-wrapper'}>
              <Link text={pet.species} func={_=>this.handlePet(pet.pet_id)}/>
              <Panel className={'related-panel'}>
                <Panel.Body className={'related-panel-body'}>
                  <div className={"related-div"}>
                    <Image
                      className={'related-image'}
                      width={'120px'}
                      height={'80px'}
                      src={pet.img_url}
                      rounded
                      onClick={this.handleThumbnailSelect}
                      id={pet.pet_id}
                    />
                  </div>
                </Panel.Body>
              </Panel>
            </div>
          ))}
        </Panel.Body>
      </Panel>
    );
  }
}
export default RelatedPetsList;
