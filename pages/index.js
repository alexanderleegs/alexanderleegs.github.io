import Head from 'next/head'

import Header from '../components/header.js'
import About from '../components/about.js'
import Footer from '../components/footer.js'
import Exp from '../components/exp'
import Proj from '../components/proj'

import utilStyles from '../styles/utils.module.css'

class Index extends React.Component {
  
  render() {
    const works = [
      {
        name: 'dso1',
        img: "/images/dso.png",
        text: "I spent the summer at DSO National Laboratories working on a cognitive system for awareness and response. The AI developed was meant to be able to distinguish between instances of known classes which it had been trained on, and instances of unknown classes which had little similarity to the currently known classes it was trained on. The system would then handle each case appropriately. The framework designed allowed for the system to use interchangeable modules for each of its components. During the process of this internship, I investigated uncertainty modelling in AI with Bayesian neural networks and case-based reasoning.",
        caption: "Intern",
        date: "May \'19 - Aug \'19",
        short: "Cognitive System Framework"
      },
      {
        name: 'dso1',
        img: "/images/dso.png",
        text: "My internship at DSO National Laboratories for the summer was one of my first experiences working on AI. I helped to develop an AI agent for automatic image tracking and recognition. During this internship, I investigated the effectiveness of k-means clustering and transfer learning.",
        caption: "Intern",
        date: "May \'18 - Aug \'18",
        short: "Automatic Image Tracking and Recognition"
      },
      {
        name: 'tinkertanker',
        img: "/images/tinkertanker.png",
        text: "I spent the summer of 2017 interning at Tinkertanker, where I helped out with programming classes for schools on the Micro:bit. I also worked on a physical cardboard arcade machine, building the physical machine as well as a racing arcade game for it on the Arduino and the Micro:bit.",
        caption: "Intern",
        date: "May \'17 - Jul \'17",
        short: "Cardboard Arcade"
      },
      {
        name: 'nus',
        img: "/images/nus.jpg",
        text: "I have been a TA for CS1231 Discrete Structures (Fall 2017, Fall 2018) and CS3203 Software Engineering Project (Fall 2019, Spring 2020). My teaching duties involve conducting tutorial sessions, consultation sessions, assignment grading, and project discussion.",
        caption: "Teaching Assistant",
        date: "Aug \'17 - Apr \'20",
        short: "Teaching Assistant for various modules"
      }
    ]
    const projs = [
      {
        name: 'fyp',
        img: "/images/ai.png",
        text: "I worked on developing data poisoning attacks built specifically to affect the explanations provided by model explanation algorithms without affecting the underlying model, as part of my Final Year Project.",
        caption: "AI Research",
        date: "Apr \'20",
        short: "Data Poisoning Attacks against Model Explanation Algorithms"
      },
      {
        name: 'spa',
        img: "/images/checklist.png",
        text: "I worked on a Static Program Analyzer from scratch as part of a school group project. It was able to parse programs written in a custom language using top-down recursive descent, store the data, and answer queries about the program.",
        caption: "Static Program Analyzer",
        date: "Oct \'19",
        short: "Static Program Analyzer to parse a program and answer queries"
      },
      {
        name: 'pokemon',
        img: "/images/pokemon.ico",
        text: "I wrote an AI which could compete in structured Pokémon battles online as part of a group project. We investigated the use of deep Q-learning to train our agent.",
        caption: "Pokémon AI",
        date: "Oct \'18",
        short: "Creating a Pokémon Master through Reinforcement Learning"
      },
      {
        name: 'tetris',
        img: "/images/tetris.jpg",
        text: "I wrote a Java based Tetris playing AI as part of a school group project. We used a combination of a Genetic Algorithm and a Particle Swarm algorithm to build our model.",
        caption: "Tetris AI",
        date: "Mar \'18",
        short: "Java-based Tetris playing AI"
      },
      {
        name: 'bot',
        img: "/images/telegram.jpg",
        text: "I wrote a Telegram bot for internal route planning within NUS, meant to help students find the best trip to take to get to their next class. It retrieved a student's timetable and generated the appropriate path based on the internal shuttle bus route and timings. The project won 3rd prize at <hackfestsg/>.",
        caption: "Telegram bot",
        date: "Aug \'16",
        short: "NUS Busbot"
      }
    ]
    return (
      <div>
        <Head>
          <title>Alexander Lee</title>
        </Head>
        
        <Header />
        <body class='flexfill'>
          <About />

          <Exp items={works} />
          
          <Proj items={projs} />
        </body>
        <Footer />
      </div>
    )
  }
  
}

export default Index