/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 console.log("console_first");
 

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


// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// function readTextFile(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   // rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function() {
//       if (rawFile.readyState === 4 && rawFile.status == "200") {
//           callback(rawFile.responseText);
//       }
//   }
//   rawFile.send(null);
// }

//usage:
// readTextFile("/docs/tutoral.json", function(text){
//   var data = JSON.parse(text);
//   console.log(data);
// });


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  // console.log("hello 1");
  // console.log(this.readyState + " ready state..............");
  // console.log(this.status + " status");
  
  
  
  if (this.readyState == 4 && this.status == 200) {
  console.log("hello 2");

    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
    console.log("hello");
  }
};
xhr.open("GET", "/docs/tutoral.json", true);
xhr.send();



// const request = require('request');

// function typeform() {
//     return new Promise((reject, resolve) => {
//         request.get('https://api.typeform.com/forms/B86TE9/responses', {
//         'auth': {
//             'user': 'amitnirala3@gmail.com',
//             'pass': 'qwerty@123',
//             'bearer': 'Bsrmv6JH1JyZAXkk4LRhE7XsytP4x5oZkfXZQCGkUH56'
//         }
//         }, function(err, response, body) {
//             if (err)
//                 return reject("error");
//             else
//                 return resolve(body);
//         });
//     });
// };

// function getApiResult() {
//     typeform().then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     })
// }

// getApiResult();
