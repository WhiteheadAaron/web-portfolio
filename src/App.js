import React, { Component } from 'react';
import './App.css';

class App extends Component {



  render() {
      let arr = [
    {
      title: `Truck'd`,
      image: 'src',
      front: [
        'React', 'Redux / Redux Form', 'GoogleMaps API'
      ],
      back: [
        'Node', 'Express', 'MongoDB'
      ],
      desc: 'description',
      live: 'link here',
      github: 'link here'
    },
    {
      title: 'Blackjack',
      image: 'src',
      front: [
        'React', 'Redux'
      ],
      back: [
        'Node', 'Express', 'MongoDB'
      ],
      desc: 'An app to play blackjack',
      live: 'link here',
      github: 'link here'
    },
    {
      title: 'Learn Spanish',
      image: 'src',
      front: [
        'React', 'Redux'
      ],
      back: [
        'Node', 'Express', 'MongoDB'
      ],
      desc: 'Learn Spanish',
      live: 'link here',
      github: 'link here'
    },
    {
      title: 'DSM Dynasty',
      image: 'src',
      front: [
        'React', 'Redux'
      ],
      back: [
        'Node', 'Express', 'MongoDB'
      ],
      desc: 'Fantasy football',
      live: 'link here',
      github: 'link here'
    },
    {
      title: 'Whitehead Tax Service',
      image: 'src',
      front: [
        'jQuery'
      ],
      back: [
        'Node', 'Express', 'MongoDB'
      ],
      desc: 'tax service site',
      live: 'link here',
      github: 'link here'
    }
  ]

  const generateJSX = (arr) => {
    let JSX = arr.map(item => {
      let stacks = item.front.map(item => {
        return (
          <p>{item}</p>
        )
      })

      let stacks2 = item.back.map(item => {
        return (
          <p>{item}</p>
        )
      })

      return (
        <section className="project">
          <div className="projectContainer">
            <div className="projectTitle">
              <h2>{item.title}</h2>
            </div>
            <div className="projectImage">
              <h3>{item.image}</h3>
            </div>
            <div className="projectDesc">
              <p>{item.desc}</p>
            </div>
            <div className="projectStacks">
              <h3>Tech Stacks</h3>
              <div className="front">
                <h4>Front End</h4>
                <p>{stacks}</p>
              </div>
              <div className="back">
                <h4>Back End</h4>
                <p>{stacks2}</p>
              </div>
            </div>
            <div className="projectLive">
              <h3>Live Version</h3>
              <p>{item.live}</p>
              <p>{item.github}</p>
            </div>
          </div>
        </section>
      )
    })

    return JSX;
  }
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1>Aaron Whitehead</h1>
            <h2>Full Stack Web Developer</h2>
          </header>
          {generateJSX(arr)}
        </div>
      </ >
    );
  }
}

export default App;