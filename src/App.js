import React, { Component } from 'react';
import { Nav } from './component/static/nav';
import { SideNav } from './component/static/sidenav';
import { Layout, Affix } from 'antd';
import Main from './component/main';
import './App.css';


const { Header, Footer, Sider, Content } = Layout;


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sideNav: false,
      currentPage: 'home',
    }

    this.sideNavToggle = this.sideNavToggle.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
  }

  sideNavToggle() {
    const temp = !this.state.sideNav;
    //console.log(temp);
    this.setState({
      sideNav: temp,
    })
  }

  updateCurrentPage(e) {
    //console.log(e.key);
    const temp = e.key;
    this.setState({
      currentPage: temp,
      sideNav: !this.state.sideNav,
    });
  }


  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Affix>
            <Nav sideNavToggle={this.sideNavToggle} currentPage={this.state.currentPage} sideNav={this.state.sideNav} />
            </Affix>
          </Header>
          <Layout>

            {this.state.sideNav ?
              <Affix>
              <Sider>
                <SideNav currentPage={this.state.currentPage} updateCurrentPage={this.updateCurrentPage} />
              </Sider>
              </Affix>
              : null}
            <Content className="page">
              <Main currentPage={this.state.currentPage}/>
            </Content>

            {/* <Affix offsetBottom={0}>
              <Footer>
                <p>footer</p>
              </Footer>
            </Affix> */}
            <Footer></Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
