import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: '#3d354b'}} to="/mywebsite">Home</Link>} scroll>
            <Navigation>
                <Link style={styles.links} to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: '#3d354b'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link style={styles.links} to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

const styles = {
  links: {
    color: "#3d354b"
  }
}

export default App;
