import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';

export class Nav extends Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Menu 
                mode="horizontal"
                onClick={this.props.sideNavToggle} 
                selectedKeys="title"
            >
                <div className="float-right">
                    <Icon type="ant-design" className="padding-5"/>

                    <Icon type="github" className="padding-5"/> 
                    
                </div>
                <Button><Icon type='menu-unfold' /><span className="hidden"> Menu </span></Button>
                <Menu.Item key="title" disable className="currentPage">
                    <span className="capitalize">{this.props.currentPage} </span>
                </Menu.Item>

                
            </Menu>
        );
    }
}



export default Nav;