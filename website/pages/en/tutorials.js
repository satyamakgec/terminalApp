/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const request = require('request');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Tutorial extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    request.get('https://api.typeform.com/forms/B86TE9/responses', {
    'auth': {
        'user': 'amitnirala3@gmail.com',
        'pass': 'qwerty@123',
        'bearer': 'Bsrmv6JH1JyZAXkk4LRhE7XsytP4x5oZkfXZQCGkUH56'
    }
    }, function(err, response, body) {
      if (!err) {
        // this.setState({
        //   Title: body.items[0].answers[0].text,
        //   OneLiner: body.items[0].answers[1].text, 
        //   Author: body.items[0].answers[2].text, 
        //   Email:  body.items[0].answers[3].text,
        //   URL: body.items[0].answers[4].text,
        //   Type: body.items[0].answers[5].text
        // });
        this.setState({
          items: body.items
        })
        console.log(`Data fetched successfully: ${this.state.items}`);
        console.log(body);
      };
    });
  }

  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Tutorials</h1>
            </header>
            <p>Tutorials on this page</p>
            <a href="https://amitnirala.typeform.com/to/B86TE9" target="_blank" className="tutorial-contribute">Contribute a Tutorial</a>
            {/* <GridBlock contents={supportLinks} layout="threeColumn" /> */}
            <div className="tutorialContainer">
              <div className="tutorialBox">
                <div className="tutorialHeading">{this.state.Title}</div>
                <div className="tutorialDesc">{this.state.OneLiner}</div>
                <div className="tutorialDetails">{this.state.Author}<sapn className="tutorialDetailsName">NAME</sapn> ---- <span className="tutorialDetailsDate">26-Feb, 2019</span></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Tutorial;
