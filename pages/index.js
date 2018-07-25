import Head from "next/head";

const Title = ({ children }) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          font-weight: 600;
          margin: 15px 0;
        }
      `}</style>
    </h1>
  );
};

const SubTitle = ({ children }) => {
  return (
    <h3>
      {children}
      <style jsx>{`
        h3 {
          font-weight: normal;
        }
      `}</style>
    </h3>
  );
};

const ButtonLink = ({ href, text, style }) => (
  <a href={href} style={style}>
    {text}
    <style jsx>{`
      a {
        color: #fff;
        background: #583bae;
        text-decoration: none;
        padding: 10px 25px;
        font-weight: 600;
        font-size: 1.2em;
        display: inline-block;
      }
    `}</style>
  </a>
);

const Header = () => {
  return (
    <div className="Header">
      <Title>React Workshop 🇪🇺</Title>
      <SubTitle>
        Learn React from JavaScript experts and React contributors.
      </SubTitle>
      <p style={{ marginTop: "2em" }}>
        <strong>
          Our Mission is to improve diveristy in the software industry
        </strong>
        <br />
        We're doing this by giving workshops where you learn to build your own
        React Application. Our beginner course has scholarship tickets available
        where we favour applications from people of underrepresented minorities
        in our industry. In our advances course that we offer for companies and
        devote most of the income to other diversity projects.
      </p>
      <style jsx>{`
        .Header {
        }
      `}</style>
    </div>
  );
};

const Workshops = () => {
  return (
    <div>
      <h2 style={{ fontWeight: "normal", marginBottom: "1.5em" }}>
        Available Workshops
      </h2>
      <div className="workshop">
        <strong>React Beginner Workshop (One Day)</strong>
        <br />
        <i>Scholarships available. </i>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_5KLhFzZYS84HtdJrA73nITDRGrLRturw0yJCinStTZ1fgA/viewform?usp=sf_link">
          Apply here
        </a>
        <hr style={{ margin: "2em 0" }} />
        <p>
          This course is for everyone who does not have (or only has limited)
          experience with React and wants to learn more about it. <br />
          <br />
          Together, we will learn the basics of React.js and will deep dive into
          the React ecosystem.
          <br />
          <br />We will learn about the VDOM and how React internally works, set
          up a modern JavaScript toolchain to build a SPA. Learn about Component
          Life Cycles and how to leverage them Learn about Props and State and
          why we need both. <br />
          <br />Learn about Controller or Uncontrolled components and why we
          should not mix them. This course is interesting for you if You never
          heard of React.js before and want to start writing modern Frontend
          Applications for the Web You have limited experience with React.js and
          want to level up your skills. Your React.js skills are outdated and
          you need to freshen things up.
        </p>
      </div>

      <div className="workshop">
        <strong>React Advanced Workshop (Two Days)</strong>
        <br />
        <a href="mailto:contact@reactworkshop.eu">Contact us</a>
        <hr style={{ margin: "2em 0" }} />
        <p>
          Following the success of our Beginner workshop, we will:
          <br />
          <br />
          Learn about advanced React patterns like Render Props, HOC, Lift State
          Up, and when to use them. Learn about React’s Event System Learn about
          Context and advanced state management techniques used by Redux and
          Mobx and GraphQL.
          <br />
          <br />
          Learn about testing React.js applications and the Future of Reac.
          Discuss features like Async Mode and React Suspense.
          <br />
          <br />
          Effective use of refs and how to write imperative APIs in React.
          shouldComponentUpdate and the power of not doing work. In addition, we
          will learn advanced UI programming patterns like: Windowing/Viewport
          culling Declarative Animation APIs
          <br />
          <br />
          This course is interesting for you if You want want to start deploying
          React Applications in Production Have experience with JavaScript You
          are a professional developer and want to get a deep dive into React.
        </p>
      </div>

      <style jsx>{`
        .workshop {
          border: 1px #eee solid;
          padding: 20px;
          margin-top: 40px;
        }
      `}</style>
    </div>
  );
};

const Coaches = () => {
  return (
    <div>
      <h2 style={{ fontWeight: "normal", marginBottom: "1.5em" }}>
        Your Coaches
      </h2>
      <p>
        <strong>Philipp Spieß</strong>
        <br />
        Philipp is a lead software engineer and a regular contributor to the
        React core. He is specialist in building very custom React applications,
        far away from the regular CRUD apps.
      </p>

      <p>
        <strong>Nicolas Dular</strong>
        <br />
        Nicolas is a senior product engineer with an eye for design. He has a
        lot of experience in building a scalable architecture and a GraphQL
        expert.
      </p>
    </div>
  );
};

// <ButtonLink
//   href="https://docs.google.com/forms/d/e/1FAIpQLSf_5KLhFzZYS84HtdJrA73nITDRGrLRturw0yJCinStTZ1fgA/viewform?usp=sf_link"
//   text="Attend a Workshop"
//   style={{ marginTop: 15 }}
// />
// <small style={{ marginTop: 5 }}>
//   Apply for a free scholarship ticket
// </small>

export default () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        body {
          padding: 40px;
          background: #fff;
          color: #232323;
          font-size: 16px;
          line-height: 1.7em;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
            Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }
        * {
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 700px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin: auto;
        }
        hr {
          margin: 40px 0;
          background-color: none;
          border: 1px #eee solid;
        }
      `}</style>
      <div className="container">
        <Header />
        <hr />
        <Workshops />
        <hr />
        <Coaches />
      </div>
    </div>
  );
};
