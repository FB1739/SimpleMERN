import React from 'react';
import { Modal } from 'react-bulma-components';

export default class ModalExample extends React.Component {
  state = { open: false };
  render() {
    return (
      <div>
         <button onClick={() => this.setState({ open: true })}>Open</button>
               </div>
    )
  }
}
