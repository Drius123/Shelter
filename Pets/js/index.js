const navBtn = document.querySelector('#nav-btn');
const navList = document.querySelector('.nav');
const petsCard = document.querySelector('.our-friends-card');
const popUp = document.querySelector('#pop');
const pets = [
  {
    "name": "Jennifer",
    "img": "img/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "img/pets-sophia.jpg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "img/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "img/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "img/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "img/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "img/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "img/pets-charly.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];
function itemActive(){
	navBtn.classList.toggle('active');
	navList.classList.toggle('open');
	document.body.classList.toggle('hidden');
}
navBtn.addEventListener('click', itemActive);
navList.addEventListener('click', itemActive);
petsCard.addEventListener('click', function(event){
	const item = event.target;
	if(item !== event.currentTarget){
		document.body.classList.toggle('hidden');
		popUp.classList.toggle('active');
		let petName;
		if(item.parentElement.classList.contains('img-container')){
			petName = item.parentElement.parentElement.children[1].textContent;
		} else if (item.parentElement.classList.contains('slider-card')){
			petName = item.children[1].textContent;
		} else {
			petName = item.parentElement.children[1].textContent;
		}
		let petObj;
		pets.forEach(item => {item.name == petName ? petObj = item : null});

		popUp.firstElementChild.children[1].children[0].src = petObj.img;
		popUp.firstElementChild.children[1].children[1].children[0].textContent = petObj.name;
		popUp.firstElementChild.children[1].children[1].children[1].textContent = petObj.type + ' - ' + petObj.breed;
		popUp.firstElementChild.children[1].children[1].children[2].textContent = petObj.description;
		popUp.firstElementChild.children[1].children[1].children[3].children[0].innerHTML = `<strong>Age:</strong>` + petObj.age;
		popUp.firstElementChild.children[1].children[1].children[3].children[1].innerHTML = `<strong>Inoculations:</strong>` + petObj.inoculations;
		popUp.firstElementChild.children[1].children[1].children[3].children[2].innerHTML = `<strong>Diseases:</strong>` + petObj.diseases;
		popUp.firstElementChild.children[1].children[1].children[3].children[3].innerHTML = `<strong>Parasites:</strong>` + petObj.parasites;
	}
});
popUp.addEventListener('click', function(event){
	event.target === event.currentTarget || event.target.classList.contains('pop-up-btn') ? (popUp.classList.toggle('active'), 		document.body.classList.toggle('hidden')) : null;
});


// pagination!

const pagRight = document.querySelector('#paginattor-right');
const pagRightAll = document.querySelector('#paginattor-right-all');
const pagCenter = document.querySelector('#paginattor-center');
const pagLeft = document.querySelector('#paginattor-left');
const pagLeftAll = document.querySelector('#paginattor-left-all');
const pagCard = document.querySelector('#our-friends-card');
let screenWidth = window.screen.width;
let petsArr = [];
let maxpages;

while(petsArr.length < 48){
	petsArr = petsArr.concat(pets.sort(() => Math.random() - 0.5));
}

function checker(){
	screenWidth = window.screen.width
	if(screenWidth > 880){
		maxpages = 6;
	} else if(screenWidth < 880 && screenWidth > 585){
		maxpages = 8;
	} else {
		maxpages = 16;
	}
}
function paginator(){
	if(maxpages == 6){
		for(let i = 0, count = pagCenter.textContent * 8 - 8; i < 8; i++, count++){
			pagCard.children[i].children[1].textContent = petsArr[count].name;
			pagCard.children[i].children[0].children[0].src = petsArr[count].img;
		}
	} else if(maxpages == 8){
			for(let i = 0, count = pagCenter.textContent * 6 - 6; i < 6; i++, count++){
				pagCard.children[i].children[1].textContent = petsArr[count].name;
				pagCard.children[i].children[0].children[0].src = petsArr[count].img;
			}
	} else{
		for(let i = 0, count = pagCenter.textContent * 3 - 3; i < 3; i++, count++){
			pagCard.children[i].children[1].textContent = petsArr[count].name;
			pagCard.children[i].children[0].children[0].src = petsArr[count].img;
		}
	}
}
paginator();

pagLeft.addEventListener('click', function(){
	checker();
	pagRight.classList.remove('active');
	pagRightAll.classList.remove('active');
	if(Number(pagCenter.innerHTML) - 1 > maxpages){
		pagCenter.innerHTML = maxpages + 1;
		pagRight.classList.add('active');
		pagRightAll.classList.add('active');
	}
	if(Number(pagCenter.innerHTML) > 1){
		pagCard.classList.remove('transition-hidden');
		pagCard.classList.remove('transition-visible');
		pagCard.classList.add('transition-hidden');
		if(pagCenter.textContent == '2'){
			pagLeft.classList.remove('active');
			pagLeftAll.classList.remove('active');
		}
		pagCenter.innerHTML = Number(pagCenter.innerHTML) - 1;
	};
});
pagRight.addEventListener('click', function(){
	checker();
	if(Number(pagCenter.innerHTML) < maxpages){
		pagCard.classList.remove('transition-hidden');
		pagCard.classList.remove('transition-visible');
		pagCard.classList.add('transition-hidden');
		pagLeft.classList.add('active');
		pagLeftAll.classList.add('active');
		pagCenter.innerHTML = Number(pagCenter.innerHTML) + 1;
	}
	if(Number(pagCenter.innerHTML) == maxpages){
		pagRight.classList.add('active');
		pagRightAll.classList.add('active');
	}
});
pagCard.addEventListener('animationend', function(){
	paginator();
	pagCard.classList.add('transition-visible');
});
pagLeftAll.addEventListener('click', function(){
	checker();
	if(Number(pagCenter.innerHTML) > 1){
		pagCenter.innerHTML = 1;
		pagLeft.classList.remove('active');
		pagLeftAll.classList.remove('active');
		pagRight.classList.remove('active');
		pagRightAll.classList.remove('active');
		pagCard.classList.remove('transition-hidden');
		pagCard.classList.remove('transition-visible');
		pagCard.classList.add('transition-hidden');
	}
})

pagRightAll.addEventListener('click', function(){
	checker();
	if(Number(pagCenter.innerHTML) < maxpages){
		pagCenter.innerHTML = maxpages;
		pagLeft.classList.add('active');
		pagLeftAll.classList.add('active');
		pagRight.classList.add('active');
		pagRightAll.classList.add('active');
		pagCard.classList.remove('transition-hidden');
		pagCard.classList.remove('transition-visible');
		pagCard.classList.add('transition-hidden');
	}
})
