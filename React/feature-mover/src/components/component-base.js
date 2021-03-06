import { Component } from 'react';

class ComponentBase extends Component {
  _bind(...methods) {
    methods.forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }
}

export default ComponentBase;