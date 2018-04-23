import React, { Component } from 'react';
import Home from './home';
import DynamicForm from './form/dynamic';
import ModalForm from './form/modal';
import Forms1 from './form/optionone';
import Forms2 from './form/optiontwo';
import Map from './maps/map';

export class Main extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        if(this.props.currentPage === 'home'){
            return <Home />;
        }else if(this.props.currentPage === 'dynamic forms'){
            return <DynamicForm />;
        }else if(this.props.currentPage === 'modal forms'){
            return <ModalForm />;
        }else if(this.props.currentPage === 'forms 1'){
            return <Forms1 />;
        }else if(this.props.currentPage === 'forms 2'){
            return <Forms2 />;
        }else if(this.props.currentPage === 'map'){
            return <Map />;
        }else{
            return (<div> ERROR 404 PAGE NOT FOUND</div>);
        }
    }
}

export default Main;