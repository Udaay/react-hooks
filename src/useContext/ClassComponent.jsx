import React from 'react';
import { ThemeContext } from '../App';

export default class ClassBasedComp extends React.Component {

  themeStyles(dark){
    return{
      backgroundColor: dark ? '#333' : '#ccc',
      color: dark ? '#ccc' : '#333',
      width: '200px',
      heught: '200px',
      padding: '2rem',
      margin: '2rem',
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {
          (darkTheme) => {
            return(
              <div style={this.themeStyles(darkTheme)} >
              'Class Component'
            </div>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }

}