const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        {/* <img src={props.img_src} alt="Project Logo" /> */}
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {/* {siteConfig.title}
        <small>{siteConfig.tagline}</small> */}
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <img src="./img/terminal_head.png" className="header_img"></img>
        <div className="headerText">Terminal Developer Documentation</div>
        <div className="searchBox">
        {/* <input type="text" id="search_input_react" placeholder="Search" title="Search"/> */}
        {/* <span class="algolia-autocomplete">
          <input type="text" id="search_input_react" placeholder="Search" title="Search" class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-labelledby="search_input_react" aria-owns="algolia-autocomplete-listbox-0" dir="auto"/>
          <pre aria-hidden="true" className="search_pre"></pre>
          <span className="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0">
          <div class="aa-dataset-1"></div>
          </span>
        </span> */}
          {/* <span class="search_span_1 algolia-autocomplete algolia-autocomplete-right"><input type="text" id="search_input_react" placeholder="Search" title="Search" class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-labelledby="search_input_react" aria-owns="algolia-autocomplete-listbox-0" dir="auto"/><pre aria-hidden="true" className="search_m" >docmen</pre><span class="aa-dropdown-menu aa-with-1 search_m1" role="listbox" id="algolia-autocomplete-listbox-0"><div class="aa-dataset-1"></div></span></span> */}
          {/* <input className="searchInput" type="text"  id="search_input_react" placeholder="Search" title="Search" autocomplete="off"
    spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false"
    aria-labelledby="search_input_react" aria-owns="algolia-autocomplete-listbox-0" dir="auto" /> */}
          {/* <svg
            className="searchIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Header = () => <h2 className="header" />;

    const Features = () => (
      <section className="columns">
        <a className="featureBox-link" href="./docs/basics/getting-started">
          <div className="column featureBox">
            <div className="featureBox-pic featureBox-pic-rocket">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="rocket"
                className="svg-inline--fa fa-rocket fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505.09 19.34A16.08 16.08 0 0 0 492.73 7c-32.61-7-58.13-7-83.56-7C305.44 0 243 55.1 196.27 128H94.87A48 48 0 0 0 52 154.49l-49.42 98.8A24 24 0 0 0 24.07 288h92.6l-10.59 21.42a31.75 31.75 0 0 0 6.15 36.63L166 399.77a32 32 0 0 0 22.61 9.43 31.58 31.58 0 0 0 14-3.29L224 395.33V488a24.08 24.08 0 0 0 24 24 23.66 23.66 0 0 0 10.63-2.53l98.7-49.39a47.91 47.91 0 0 0 26.5-42.9V315.71C456.61 268.93 512 206.25 512 103c.08-25.53.08-51-6.91-83.66zM128 256H37l43.59-87.2a16.09 16.09 0 0 1 14.28-8.8h85.18c-13.94 28.07-31.72 64-47.56 96zm223.86 161.18a16 16 0 0 1-8.86 14.28L256 475v-95.52c32-15.83 67.82-33.59 95.86-47.54zM366.5 288.9c-39.5 19.78-135.87 67.45-177.91 88.24l-53.82-53.55C155.64 281.36 203.3 185 223 145.41 273.21 67 330.68 32 409.17 32c21.54 0 42 0 66.63 4.29 4.34 24.87 4.26 45.21 4.18 66.7C480 181.07 445 238.46 366.5 288.9zM368 80a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64zm0 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                />
              </svg>
            </div>
            <div className="featureBox-title">Getting Strated</div>
          </div>
        </a>

        <a className="featureBox-link" href="./tutorials">
          <div className="column featureBox">
            <div className="featureBox-pic">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="lightbulb-on"
                className="svg-inline--fa fa-lightbulb-on fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M41.8 334.14a7.998 7.998 0 0 0-2.93 10.93l8 13.86a7.998 7.998 0 0 0 10.93 2.93l99.22-57.28c-6.7-8.47-12.78-17.29-18.01-26.55L41.8 334.14zM112.33 176H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h106.52c-1.63-10.52-2.17-21.23-2.19-32zM41.8 49.85l85.16 49.17c3.97-10.01 8.72-19.58 14.17-28.77L57.8 22.14a7.998 7.998 0 0 0-10.93 2.93l-8 13.86c-2.21 3.82-.9 8.71 2.93 10.92zm556.4 0a7.998 7.998 0 0 0 2.93-10.93l-8-13.86a7.998 7.998 0 0 0-10.93-2.93l-83.38 48.14C504.26 79.44 509.06 89 513.06 99l85.14-49.15zM632 176H528c0 10.8-1.25 21.45-2.9 32H632c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-33.8 158.14l-97.39-56.23c-5.25 9.3-11.45 18.03-18.13 26.48l99.52 57.46c3.83 2.21 8.72.9 10.93-2.93l8-13.86c2.21-3.82.9-8.71-2.93-10.92zM320 64c-61.75 0-112 50.25-112 112 0 8.84 7.16 16 16 16s16-7.16 16-16c0-44.11 35.88-80 80-80 8.84 0 16-7.16 16-16 0-8.85-7.16-16-16-16zm0-64C217.05 0 143.88 83.54 144 176.24c.06 44.28 16.5 84.67 43.56 115.54 25.65 29.26 50.29 76.91 52.44 92.22l.06 75.18c0 3.15.94 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84L400 384c2.26-15.72 26.99-63.19 52.44-92.22C479.55 260.85 496 220.37 496 176 496 78.8 417.2 0 320 0zm47.94 454.31L350.85 480h-61.71l-17.09-25.69-.01-6.31h95.9v6.31zm.04-38.31h-95.97l-.07-32h96.08l-.04 32zm60.4-145.32c-13.99 15.96-36.33 48.1-50.58 81.31H262.21c-14.26-33.22-36.59-65.35-50.58-81.31-23.13-26.38-35.5-59.84-35.58-94.68C175.87 99.01 236.43 32 320 32c79.4 0 144 64.6 144 144 0 34.85-12.65 68.48-35.62 94.68z"
                />
              </svg>
            </div>
            <div className="featureBox-title">Tutorials</div>
          </div>
        </a>

        <a className="featureBox-link" href="/api">
          <div className="column featureBox">
            <div className="featureBox-pic featureBox-pic-book">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="book"
                className="svg-inline--fa fa-book fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M356 160H188c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm12 52v-8c0-6.6-5.4-12-12-12H188c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12zm64.7 268h3.3c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h344c13.3 0 24 10.7 24 24v368c0 10-6.2 18.6-14.9 22.2-3.6 16.1-4.4 45.6-.4 65.8zM128 384h288V32H128v352zm-96 16c13.4-10 30-16 48-16h16V32H80c-26.5 0-48 21.5-48 48v320zm372.3 80c-3.1-20.4-2.9-45.2 0-64H80c-64 0-64 64 0 64h324.3z"
                />
              </svg>
            </div>
            <div className="featureBox-title">API Reference</div>
          </div>
        </a>
      </section>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Header />
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;
