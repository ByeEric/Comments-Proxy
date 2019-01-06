// NPM Modules
import React, { PureComponent } from 'react';
import Radium from 'radium';
// React components from files
import Link from './link';
import styles from '../styles';
import Option from './option';
import Button from './button';

// displays all options for purchasing pets
class Options extends PureComponent {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div style={[styles.div.base]}>
        <i key={'backIcon'} className={'material-icons'} style={[styles.back.base]} onClick={this.props.showBuy}>undo</i>
        <Link specialDiv={{display:'inline-block'}} special={{fontSize:'27px',marginLeft:'10px',display:'inline-block'}} text={this.props.pet.species} size={'26px'} link={`https://en.wikipedia.org/wiki/${this.props.pet.species}`}/>
        <Option o1={'male'} o2={'female'}/>
        <Option o1={'gift wrap'} o2={'none'} default={'two'}/>
        <Option o1={'toy box'} o2={'none'} default={'two'}/>
        <Button 
          text={'finish'}
          func={()=>{console.log('finished purchase...\nmake this do something if you want to...')}}
          special={{
            width:'192px',
            height:'35px',
            margin:'10px 0px 0px 0px',
            borderColor:'#FFA500',
            fontSize:'19px',
            fontStyle:'italic',
            ":hover":{backgroundColor:'#FFA500'}
          }}
        />
      </div>
    )
  }
}

Options = Radium(Options);
export default Options;