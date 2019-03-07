/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// var jQueryScript = document.createElement('script');  
// jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
// document.head.appendChild(jQueryScript);

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
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
              <div className="tutorialHeading">Title of the Tutorial</div>
              <div className="tutorialDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce</div>
              <div className="tutorialDetails">Published by <sapn className="tutorialDetailsName">NAME</sapn> ---- <span className="tutorialDetailsDate">26-Feb, 2019</span></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
