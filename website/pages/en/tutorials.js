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
    //this.state = { Title:  , OneLiner: ; Author: ; Email:  ; URL:  ; Type: ;};
    // this.state = { };

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
        // })
        this.state = {Title: body.total_items};
      };
    });
  }

  componentWillMount() {
    request.get('https://api.typeform.com/forms/B86TE9/responses?since=2019-03-01T00%3A00%3A00&until=2020-07-10T00%3A00%3A00', {
    'auth': {
        'user': 'amitnirala3@gmail.com',
        'pass': 'qwerty@123',
        'bearer': 'Bsrmv6JH1JyZAXkk4LRhE7XsytP4x5oZkfXZQCGkUH56'
    }
    }, function(err, response, body) {
      if (!err) {
        // console.log(body);
        this.Title = body;
        // console.log(this.Title);
        
        
        this.setState({
          Title: body,
          
          // Title: body.items[0].answers[0].text,
          // OneLiner: body.items[0].answers[1].text, 
          // Author: body.items[0].answers[2].text, 
          // Email:  body.items[0].answers[3].text,
          // URL: body.items[0].answers[4].text,
          // Type: body.items[0].answers[5].text
        })
        // this.setState({Title: body.total_items});
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
            <a href="https://terminalco.typeform.com/to/BknR0R" target="_blank" className="tutorial-contribute">Contribute a Tutorial</a>
            {/* <GridBlock contents={supportLinks} layout="threeColumn" /> */}
            <div className="tutorialContainer">
              <div className="tutorialBox">
                <div className="tutorialHeading">{this.Title}</div>
                <div className="tutorialDesc">{this.OneLiner}</div>
                <div className="tutorialDetails">{this.Author}<sapn className="tutorialDetailsName">NAME</sapn> ---- <span className="tutorialDetailsDate">26-Feb, 2019</span></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Tutorial;

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


// componentDidMount(){
//   fetch('http://randomuser.me/api/?results=500').then(
//     results => {
//       return results.json();
//     }).then(data => {
//       let pictures = data.results.map(pic) => {
//         return(
//           <div key="{pic.results}">
//             <img src={pic.picture.medium} />
//           </div>
//         )
//       })
//       this.setState({pictures: pictures});
//       console.log('state', this.state.pictures);
//     })
//   )
// }