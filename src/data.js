export const projects = [
  {
    title: "Solar System Scroll!",
    infotext: (
      <div>
        <p className="description-site">
          The concept behind this app was to explore the vast interplanetary
          distances, gaining a sense of the sheer magnitude of space. Scroll
          your way through our solar system, from the Sun to Pluto.
        </p>
        <br />
        <h2 className="list-title"> Key Learnings:</h2>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>React Hooks:
        </div>
        <div className="learnings-text">
          Using React hooks (useState and useEffect) for managing component
          state and handling side effects.
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Event-Driven
          Interactivity:
        </div>
        <div className="learnings-text">
          Utilizes event listeners to create an interactive user experience,
          especially in response to scroll events.
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Dynamic Rendering:
        </div>
        <div className="learnings-text">
          Implements dynamic rendering of components based on user interactions,
          scroll positions, or data arrays.
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Interactive Dropdown
          Menu:
        </div>
        <div className="learnings-text">
          Design and implementation of an interactive dropdown menu that reveals
          information about planet distances on user interaction.
        </div>
        <p className="credit-text">Concept, design, and code by me.</p>
      </div>
    ),
    bgcl: "var(--clr-accent)",
    cl: "var(--clr-primary)",
    link1: "https://solar-system-scroll.netlify.app/",
    link2: "https://github.com/Wallenborg/react-solar-system",
    imgSrc: require("./img/webimg001.jpg"),
    link: true,
  },

  {
    title: "The Algorithm Whisper",
    infotext: (
      <div>
        <p className="description-site">
          Ancient divination meets modern technology. This digital tarot card
          reading site invites users to unfold their digital futures. The
          concept is rooted in the idea of infusing traditional tarot symbolism
          with dynamic digital elements.
        </p>
        <h2 className="list-title"> Key Learnings:</h2>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Random Algorithm:
        </div>
        <div className="learnings-text">
          Implementing a random card draw algorithm, the project adds an element
          of unpredictability to the tarot reading experience. Learning to
          generate random outcomes
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Animation:
        </div>
        <div className="learnings-text">
          Employs animated elements to enhances user interaction, creating a
          captivating narrative
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Modal:
        </div>
        <div className="learnings-text">
          Use of modal components.Design and implementation of an interactive
          dropdown menu
        </div>
        <p className="credit-text">Concept, design, and code by me.</p>
      </div>
    ),
    bgcl: "var(--clr-primary)",
    cl: "var(--clr-accent)",
    link1: "https://fanciful-ganache-e9f55c.netlify.app/",
    link2: "https://github.com/Wallenborg/algorithm-whisper",
    imgSrc: require("./img/webimg004.jpg"),
    link: true,
  },
  {
    title: "Color Me Twice",
    infotext: (
      <div>
        <p className="description-site">
          The main idea was to build an app that can help you create a 2-color
          palette for your upcoming web development project.
        </p>
        <br />
        <h2 className="list-title"> Key Learnings:</h2>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Context:
        </div>
        <div className="learnings-text">
          Implementing centralized state management, facilitating the exchange
          of data between components and to pass state throughout the
          application.
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Library Integration:
        </div>
        <div className="learnings-text">
          The use of both Color Picker and Chroma to create an engaging and
          interactive color experience for the user
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Fetching 3rd party
          APIs:
        </div>
        <div className="learnings-text">
          Handling promises and managing state transitions. Have an asynchronous
          flow of data, to ensure smooth and efficient communication with
          external APIs
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Functional
          Components:
        </div>
        <div className="learnings-text">
          Building reusable and customizable custom components and custom hooks.
        </div>
        <p className="credit-text">
          Concept, design, and code by Angela Naseri, Carmela Pippa, Maya
          Jerndahl, and me.
        </p>
      </div>
    ),
    bgcl: "var(--clr-accent)",
    cl: "var(--clr-primary)",
    link1: "https://color-me-twice.netlify.app/",
    link2: "https://github.com/Wallenborg/color-me-twice-master",
    imgSrc: require("./img/webimg006.jpg"),
    link: true,
  },
  {
    title: "The Reactor",
    infotext: (
      <div>
        <p className="description-site">
          This is a dummy React blog built with the purpose of training to write
          accessible and SEO friendly code.
        </p>
        <h2 className="list-title"> Key Learnings:</h2>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>SEO Optimization:
        </div>
        <div className="learnings-text">
          Optimizing meta tags, such as title, description, and keywords, using
          descriptive and relevant headings, creating meaningful URLs, and
          ensuring fast page loading times.
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Accessibility:
        </div>
        <div className="learnings-text">
          Semantic HTML structure, keyboard navigation support, and providing
          alternative text for images and other non-text content.
        </div>

        <p className="credit-text">Concept, design, and code by me.</p>
      </div>
    ),
    bgcl: "var(--clr-primary)",
    cl: "var(--clr-accent)",
    link1: "https://the-reactor-blog.netlify.app/",
    link2: "https://github.com/marianordqvist/React-blog-project",
    imgSrc: require("./img/webimg008.jpg"),
    link: true,
  },
  {
    title: "Art Portfolio",
    infotext: (
      <div>
        <p className="description-site">
          This was my first bigger build, updating my artist portfolio from a
          WordPress to a custom built website with html, css and Javascript
        </p>
        <h2 className="list-title"> Key Learnings:</h2>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>The Fundamentals:
        </div>
        <div className="learnings-text">
          to use html, css and javascript to build a page
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Responsive Design:
        </div>
        <div className="learnings-text">
          Ensures an good viewing experience across diverse devices.
        </div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>FTP:
        </div>
        <div className="learnings-text">
          Understanding the process of installing and how to use an FTP server
        </div>
        <p className="credit-text">Concept, design, and code by me.</p>
      </div>
    ),
    bgcl: "var(--clr-accent)",
    cl: "var(--clr-primary)",
    link1: "https://www.niklaswallenborg.com/internet_art.php",
    link2: "https://github.com/Wallenborg/niklaswallenborg.com",
    imgSrc: require("./img/webimg003.jpg"),
    link: true,
  },
  {
    title: "Let's build something!",
    infotext: (
      <div>
        <br />
        <p className="description-site"></p>
        <h2 className="list-title"> Who am I</h2>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Name:
        </div>
        <div className="learnings-text">Niklas Wallenborg</div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Age:
        </div>
        <div className="learnings-text">44</div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Family:
        </div>
        <div className="learnings-text">Partner and 2 kids</div>
        <div className="learnings-text"></div>
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Hobbies:
        </div>
        <div>
          Art, Creative Coding, Politics, Digital Culture, Sci-Fi, Gardening,
          and Walking
        </div>
        <br />
        <div className="learnings-headline">
          <span className="learnings-bullet">&#x25CF;</span>Skills:
        </div>
        <div className="skills">
          html, css, Javascript, React, SEO and Accessibility
          <br /> Right now we are studying Backend.
        </div>
        <p className="credit-text">niklas.wallenborg@hyperisland.se</p>
      </div>
    ),
    bgcl: "var(--clr-primary)",
    cl: "var(--clr-accent)",
    link1: " ",
    link2: " ",
    imgSrc: require("./img/nw.jpeg"),
    link: false,
  },
];
