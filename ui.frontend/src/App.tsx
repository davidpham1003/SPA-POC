import { ContainerState, Page, PageProperties, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';

// This component is the application entry point
class App extends Page<PageProperties, ContainerState> {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
