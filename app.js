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

const profiles = profileIterator(data);

//Display first profile
nextProfile();

//Next event
document.getElementById('next').addEventListener('click', nextProfile);

//Next profile 
 
function nextProfile() {
  const currentProfile = profiles.next().value; 
  if(currentProfile !== undefined){
    document.getElementById('profile-display').innerHTML = `
      <ul class="list-group"> 
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul>
    `
    document.getElementById('image-display').innerHTML = `<img src="${currentProfile.image}">`
  }else{
    //No more profiles
    window.location.reload();
  }
}

//Profile Iterator

function profileIterator(profiles) {
  let nextIndex = 0;
  

  return {
    next: function() {
      return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done:true}
    }
  };
}