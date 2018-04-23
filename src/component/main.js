import React, { Component } from 'react';
import Home from './home';
import DynamicForm from './form/dynamic';
import ModalForm from './form/modal';

export class Main extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        if(this.props.currentPage == 'home'){
            return <Home />;
        }else if(this.props.currentPage == 'dynamic forms'){
            return <DynamicForm />;
        }else if(this.props.currentPage == 'modal forms'){
            return <ModalForm />;
        }else{
            return (<div> ERROR 404 PAGE NOT FOUND</div>);
        }
    }
}

export default Main;