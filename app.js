//Users Data
let users = [
    {
      profilePic:
        "https://images.unsplash.com/photo-1622038494116-838f7a8f9318?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgPic:
        "https://images.unsplash.com/photo-1577120321615-6a748c007151?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMsg: 6,
      name: "John Doe",
      age: 20,
      location: "New York, USA",
      bio: "I put the “elation” in “Public Relations” and the “fun” in “funeral director.”",
      interests: [
        {
          icon: '<i class="ri-music-line"></i>',
          interest: "Music",
        },
        {
          icon: '<i class="ri-book-line"></i>',
          interest: "Reading",
        },
      ],
      isFriend: null,
    },
    {
      profilePic:
        "https://images.unsplash.com/photo-1541583109558-96944e7d2e33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgPic:
        "https://images.unsplash.com/photo-1600023533868-d0a6101da971?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMsg: 3,
      name: "Smith",
      age: 19,
      location: "Los Angeles, USA",
      bio: "Professional napper and snack enthusiast. Ask me about my latest nap.",
      interests: [
        {
          icon: '<i class="ri-dv-fill"></i>',
          interest: "Photography",
        },
        {
          icon: '<i class="ri-car-line"></i>',
          interest: "Traveling",
        },
        {
          icon: '<i class="ri-book-line"></i>',
          interest: "Reading",
        },
      ],
      isFriend: true,
    },
    {
      profilePic:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgPic:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMsg: 0,
      name: "Alexa",
      age: 22,
      location: "Chicago, USA",
      bio: "I speak fluent sarcasm and I am a professional binge-watcher.",
      interests: [
        {
          icon: '<i class="ri-car-line"></i>',
          interest: "Traveling",
        },
        {
          icon: '<i class="ri-gamepad-line"></i>',
          interest: "Gaming",
        },
      ],
      isFriend: null,
    },
    {
      profilePic:
        "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgPic:
        "https://images.unsplash.com/photo-1520423465871-0866049020b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMsg: 7,
      name: "Daisy",
      age: 22,
      location: "Houston, USA",
      bio: "My hobbies include breakfast, lunch, and dinner. Oh, and snacks.",
      interests: [
        {
          icon: '<i class="ri-gamepad-line"></i>',
          interest: "Gaming",
        },
        {
          icon: '<i class="ri-book-line"></i>',
          interest: "Reading",
        },
      ],
      isFriend: false,
    },
    {
      profilePic:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgPic:
        "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMsg: 2,
      name: "Emily Davis",
      age: 18,
      location: "San Francisco, USA",
      bio: "I run on coffee, sarcasm, and inappropriate thoughts.",
      interests: [
        {
          icon: '<i class="ri-code-s-slash-line"></i>',
          interest: "Coding",
        },
        {
          icon: '<i class="ri-book-line"></i>',
          interest: "Reading",
        },
        {
          icon: '<i class="ri-heart-fill"></i>',
          interest: "Love",
        },
      ],
      isFriend: null,
    },
];  

//Creating function to select elements instead of using document.querySelector(...) everytime
function select(element) {
  return document.querySelector(element);
}

function setData (index) {
    select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMsg;
  select(".location h5").textContent = users[index].location;
  select(".name h1").textContent = users[index].name;
  select(".age").textContent = users[index].age;
  select(".bio").textContent = users[index].bio;

  let clutter = "";
  users[index].interests.forEach((interest) => {
    clutter += ` <div class="tag flex items-center capitalize gap-1 bg-white/20 rounded-full px-2 py-1">
                            ${interest.icon}
                            <h5 class="text-xs">${interest.interest}</h5>
                        </div>`;
  });
  select(".tags").innerHTML = clutter;
}

//Displaying the Real Data 
let curr = 0;
(function setInitials () {
    select(".maincard img").src = users[curr].bgPic;
  select(".incomingcard img").src = users[curr + 1]?.bgPic;
  
    setData(curr);

  curr = 2;
})();

//Changing the background picture
let crossBtn  = select(".btns button:nth-child(1)");
let loveBtn  = select(".btns button:nth-child(2)");
let isAnimating = false;

function imageChange  () {
    if(!isAnimating){
        isAnimating = true;
    
    
    let tl = gsap.timeline({
        onComplete: () => {
            isAnimating = false;
            let main = select('.maincard');
            let incoming = select('.incomingcard');

            incoming.classList.remove('z-[2]');
            incoming.classList.add('z-[3]');
            incoming.classList.remove('incomingcard');
            
            main.classList.remove('z-[3]');
            main.classList.add('z-[2]');
            gsap.set(main, {
                scale: 1,
                opacity: 1
            })
            if (curr === users.length) curr = 0;
            select('.maincard img').src = users[curr].bgPic;
            curr++;
            main.classList.remove('maincard');
            incoming.classList.add('maincard');
            main.classList.add('incomingcard');
        }
    });

    tl.to('.maincard', {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: .9
    }, 'start').from('.incomingcard',{
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1
    }, 'start')
}
}


crossBtn.addEventListener('click', ()=>{
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
      });
});

loveBtn.addEventListener('click', ()=>{
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
      });
});

//Wrapping each element with a container
(() => {
    document.querySelectorAll('.element').forEach((element) => {
      let div = document.createElement('div');
      div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
      div.appendChild(element);
      select('.details').appendChild(div);
    });
  })();