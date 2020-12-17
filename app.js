const data = [
  {
    name:'John Doe',
    age:32,
    gender:'male',
    lookingFor:'female',
    location:'Boston MA',
    image:'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name:'Jehn Smith',
    age:26,
    gender:'female',
    lookingFor:'male',
    location:'Miami FL',
    image:'https://randomuser.me/api/portraits/women/42.jpg'
  },
  {
    name:'Will Joe',
    age:38,
    gender:'male',
    lookingFor:'female',
    location:'Lynn MA',
    image:'https://randomuser.me/api/portraits/men/87.jpg'
  }
];

//Profile Iterator

function profileIterator(profiles) {
  let nextIndex = 0;
  

  return {
    next: function() {
      return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done:true}
    }
  };
}