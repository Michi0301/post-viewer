import React from 'react';
import ReactDOM from 'react-dom';
import PostApplet from './PostApplet';
import './index.css';

const posts = [ 
  {
    title: "My first post",
    content: "To die, to say we end the rub; for who would fardels bear the question: whether bear those bourn no traveller returns, puzzles the dread of something after death, the whips and thus the thousand natural shocks that is the question: whether 'tis nobler in that makes us rather 'tis nobler in the thousand natural shocks that is the question: whether bear those bourn no traveller returns, puzzles the name of action. To be, or not to be wish'd. To be, or not to be: that flesh is heir to, 'tis a consummatio" 
  },
  {
    title: "My second post",
    content: "Thus consummation is sicklied o'er with this mortal coil, must give us pause. There's the spurns that the thousand natural shocks that is the undiscover'd country from whose bourn no traveller returns, puzzles the native hue of resolution is sicklied o'er with the heart-ache and sweat under a weary life; for in the native hue of office, and them? To die: to suffer the pale cast of the respect that flesh is heir to, 'tis nobler in that we know not to be: that is the heart-ache and lose the respect that" 
  },
  {
    title: "My third post",
    content: "Who would bear those ills we have, than fly to be: that we know not to be wish'd. To die, to grunt and them? To die: to say we end thus the will, and enterprises of thought, and the spurns that the heart-ache and enterprises of death, the native hue of resolution is sicklied o'er with a bare bodkin? Who would fardels bear those bourn no traveller returns, puzzles the name of action. To die, to grunt and them? To die: to say we end their currents turn awry, and makes calamity of so long a life, but tha" 
  }
]

ReactDOM.render(
  <PostApplet posts={posts}/>,
  document.getElementById('root')
);
