import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const arr=[
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

function App() {
  const[count,setCount]=useState(0)
  function handlePrev(){
        if(count!=0){
          setCount(count-1);
        }
        else{
          alert("you are at the first review")
        }
  }
  function handleRandom(){
      let num=Math.floor(Math.random()*arr.length);
      if(num==count){
        setCount(num+1);
      }
      else{
        setCount(num)
      }
  }
  function handleNext(){
     if(count!=arr.length-1){
      setCount(count+1);
     }
     else{
      alert('You have reached to last one')
     }
  }
  return (
    <div>
         <h1 id="review-heading">Our Reviews</h1>
         <div className='reviews'>
             <h2>{arr[count].name}</h2>
             <img src={arr[count].image} style={{height:"200px"}}></img>
             <h3>Job:{arr[count].job}</h3>
             <p>{arr[count].text}</p>
         </div>
         <div>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleRandom}>random</button>
          <button onClick={handleNext}>next</button>
          </div>
    </div>
  );
}

export default App;
