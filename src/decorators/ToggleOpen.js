import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WpappedComponent extends ReactComponent {
    state = {
        isOpen: false
    }
    render() {
       // console.log(this);
        return <OriginalComponent {...this.props} 
                {...this.state} 
                toggleOpen = {this.toogleText}/>
    }
    toogleText = () => {
        console.log(this);
        console.log(this);
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}