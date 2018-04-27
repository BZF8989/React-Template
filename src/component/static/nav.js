import React, { Component } from 'react';
import { Menu, Icon, Button, Badge } from 'antd';

export class Nav extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
    }


    increment = () => {
        const temp = this.state.count + 1;
        this.setState({ 
            count: temp
        });
    }

    render() {
        return (
            <Menu
                mode="horizontal"
                onClick={this.props.sideNavToggle}
                selectedKeys="title"
            >
                <div className="float-right">
                    <Badge count={this.state.count} onClick={this.increment}>
                        <span className="head-example" />
                    </Badge>
                    <Icon type="ant-design" className="padding-5" />

                    <Icon type="github" className="padding-5" />

                </div>
                {this.props.sideNav? 
                <Button><Icon type="close-square-o" /><span className="hidden"> Close  </span></Button>:
                <Button><Icon type='menu-unfold' /><span className="hidden"> Menu </span></Button>}
                <Menu.Item key="title" disable className="currentPage">
                    <span className="capitalize">{this.props.currentPage} </span>
                </Menu.Item>


            </Menu>
        );
    }
}



export default Nav;