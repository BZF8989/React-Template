import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export class SideNav extends Component {

    // handleClick = (e) => {
    //     console.log('click ', e);
    // }

    constructor(props){
        super(props);

        this.openKeys = this.openKeys.bind(this);
    }


    openKeys(){
        const state = this.props.currentPage;
        if(state === 'forms 1' || state === 'forms 2' || state === 'modal forms' || state === 'dynamic forms' ){
            return 'forms';
        }else{
            return '';
        }

    }

    render() {

        return (
            <Menu
                style={{ width: 200 }}
                defaultSelectedKeys={this.props.currentPage}
                onClick={(e) => this.props.updateCurrentPage(e)} 
                defaultOpenKeys={this.openKeys()}
                mode="inline"
            >
                <Menu.Item key="home"> <Icon type="home" />Home</Menu.Item>
                <SubMenu key="forms" title={<span><Icon type="form" /><span>Forms</span></span>}>
                    <MenuItemGroup key="g1" title="Standard Forms">
                        <Menu.Item key="forms 1">Forms Set 1</Menu.Item>
                        <Menu.Item key="forms 2">Forms Set 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Modal and Dynamic Forms">
                        <Menu.Item key="modal forms">Modals</Menu.Item>
                        <Menu.Item key="dynamic forms">Dynamic Form</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="map"><Icon type="global" />Map</Menu.Item>
            </Menu>
        );
    }

}


export default SideNav;