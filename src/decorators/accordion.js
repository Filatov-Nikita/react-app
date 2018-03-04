import React, {Component as ReactComponent} from 'react'

    export default (OriginalComponent) => class Accordion extends ReactComponent {
        state = {
            openItemId: null
        }
        render() {
            return <OriginalComponent {...this.props} {...this.state} toogleOpen = {this.toogleOpenItem}/>
        }

        toogleOpenItem = openItemId => ev =>{
               this.setState({
               openItemId: openItemId === this.state.openItemId ? null : openItemId
           });
        }
    }