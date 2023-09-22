


//                                 BURGER MENU

{

    const BURGERBUTTON = document.querySelector('.burger-menu');
    const NAVIGATION = document.querySelector('.nav');
    const GREYSHADOW = document.querySelector('.grey-shadow');
    const NAVLIFIRST = document.querySelector('.first-li');
    const NAVLI = document.querySelectorAll('.nav-li');


    BURGERBUTTON.addEventListener('click', () => { 
        BURGERBUTTON.classList.toggle('open');
        NAVIGATION.classList.toggle('open');
        GREYSHADOW.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    })


    NAVLIFIRST.addEventListener('click', () => {
        if (NAVIGATION.classList.contains('open')) {
            NAVIGATION.classList.remove('open');
            BURGERBUTTON.classList.remove('open');
            GREYSHADOW.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    })


    for (let elem of NAVLI) {
        elem.addEventListener('click', () => {
            if (NAVIGATION.classList.contains('open')) {
                NAVIGATION.classList.remove('open');
                BURGERBUTTON.classList.remove('open');
                GREYSHADOW.classList.remove('open');
                document.body.classList.remove('no-scroll');
            }
        })
    }


    GREYSHADOW.addEventListener('click', () => {
        if (NAVIGATION.classList.contains('open')) {
            NAVIGATION.classList.remove('open');
            BURGERBUTTON.classList.remove('open');
            GREYSHADOW.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    })
}





//                                      CAROUSEL



import friends from './friends.js';

{  

    let pastArr = [];
    let currArr = [];
    let nextArr = [];

    function randomIntegerOfArr() {
        
        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * 8);
            if (!pastArr.includes(num)) {
                pastArr.push(num);
            } else {
                i--;
            }
        }

        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * 8);
            if (!pastArr.includes(num) && !currArr.includes(num)) {
                currArr.push(num);
            } else {
                i--;
            }
        }


        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * 8);
            if (!nextArr.includes(num) && !currArr.includes(num)) {
                nextArr.push(num);
            } else {
                i--;
            }
        }

                
    }

    randomIntegerOfArr();
    
            

    document.body.onload = () => {

        //                                          CENTRAL CARDS

       let centralFirstCard = document.querySelector('.item-active .friend-pic-first');
       let centralFirstCardName = document.querySelector('.item-active .friend-name-first');

       centralFirstCard.style.backgroundImage = `url(${friends[currArr[0]]['img']})`;
       centralFirstCardName.textContent = `${friends[currArr[0]]['name']}`;


       let centralSecondCard = document.querySelector('.item-active .friend-pic-second');
       let centralSeconCardName = document.querySelector('.item-active .friend-name-second');

       centralSecondCard.style.backgroundImage = `url(${friends[currArr[1]]['img']})`;
       centralSeconCardName.textContent = `${friends[currArr[1]]['name']}`;


       let centralThirdCard = document.querySelector('.item-active .friend-pic-third');
       let centralThirdCardName = document.querySelector('.item-active .friend-name-third');

       centralThirdCard.style.backgroundImage = `url(${friends[currArr[2]]['img']})`;
       centralThirdCardName.textContent = `${friends[currArr[2]]['name']}`;


       //                                          LEFT CARDS

       let leftFirstCard = document.querySelector('.item-left .friend-pic-first');
       let leftFirstCardName = document.querySelector('.item-left .friend-name-first');

       leftFirstCard.style.backgroundImage = `url(${friends[pastArr[0]]['img']})`;
       leftFirstCardName.textContent = `${friends[pastArr[0]]['name']}`;


       let leftSecondCard = document.querySelector('.item-left .friend-pic-second');
       let leftSeconCardName = document.querySelector('.item-left .friend-name-second');

       leftSecondCard.style.backgroundImage = `url(${friends[pastArr[1]]['img']})`;
       leftSeconCardName.textContent = `${friends[pastArr[1]]['name']}`;


       let leftThirdCard = document.querySelector('.item-left .friend-pic-third');
       let leftThirdCardName = document.querySelector('.item-left .friend-name-third');

       leftThirdCard.style.backgroundImage = `url(${friends[pastArr[2]]['img']})`;
       leftThirdCardName.textContent = `${friends[pastArr[2]]['name']}`;

       //                                          RIGHT CARDS

       let rightFirstCard = document.querySelector('.item-right .friend-pic-first');
       let rightFirstCardName = document.querySelector('.item-right .friend-name-first');

       rightFirstCard.style.backgroundImage = `url(${friends[nextArr[0]]['img']})`;
       rightFirstCardName.textContent = `${friends[nextArr[0]]['name']}`;


       let rightSecondCard = document.querySelector('.item-right .friend-pic-second');
       let rightSeconCardName = document.querySelector('.item-right .friend-name-second');

       rightSecondCard.style.backgroundImage = `url(${friends[nextArr[1]]['img']})`;
       rightSeconCardName.textContent = `${friends[nextArr[1]]['name']}`;


       let rightThirdCard = document.querySelector('.item-right .friend-pic-third');
       let rightThirdCardName = document.querySelector('.item-right .friend-name-third');

       rightThirdCard.style.backgroundImage = `url(${friends[nextArr[2]]['img']})`;
       rightThirdCardName.textContent = `${friends[nextArr[2]]['name']}`;
    }





    const LEFT_BUT = document.querySelector('.friends-left-button');
    const RIGHT_BUT = document.querySelector('.friends-right-button');
    const CAROUSEL = document.querySelector('.carousel');
      

    LEFT_BUT.addEventListener('click', () => {
        CAROUSEL.classList.add('transition-left');
    })

    RIGHT_BUT.addEventListener('click', () => {
        CAROUSEL.classList.add('transition-right');
    })


    function randomArrForLeft() {
        nextArr = currArr;
        currArr = pastArr;
        pastArr = [];

        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * 8);
            if (!pastArr.includes(num) && !currArr.includes(num)) {
                pastArr.push(num);
            } else {
                i--;
            }
        }


         //                                          RIGHT CARDS

       let rightFirstCard = document.querySelector('.item-right .friend-pic-first');
       let rightFirstCardName = document.querySelector('.item-right .friend-name-first');

       rightFirstCard.style.backgroundImage = `url(${friends[nextArr[0]]['img']})`;
       rightFirstCardName.textContent = `${friends[nextArr[0]]['name']}`;


       let rightSecondCard = document.querySelector('.item-right .friend-pic-second');
       let rightSeconCardName = document.querySelector('.item-right .friend-name-second');

       rightSecondCard.style.backgroundImage = `url(${friends[nextArr[1]]['img']})`;
       rightSeconCardName.textContent = `${friends[nextArr[1]]['name']}`;


       let rightThirdCard = document.querySelector('.item-right .friend-pic-third');
       let rightThirdCardName = document.querySelector('.item-right .friend-name-third');

       rightThirdCard.style.backgroundImage = `url(${friends[nextArr[2]]['img']})`;
       rightThirdCardName.textContent = `${friends[nextArr[2]]['name']}`;


         
       //                                          LEFT CARDS

       let leftFirstCard = document.querySelector('.item-left .friend-pic-first');
       let leftFirstCardName = document.querySelector('.item-left .friend-name-first');

       leftFirstCard.style.backgroundImage = `url(${friends[pastArr[0]]['img']})`;
       leftFirstCardName.textContent = `${friends[pastArr[0]]['name']}`;


       let leftSecondCard = document.querySelector('.item-left .friend-pic-second');
       let leftSeconCardName = document.querySelector('.item-left .friend-name-second');

       leftSecondCard.style.backgroundImage = `url(${friends[pastArr[1]]['img']})`;
       leftSeconCardName.textContent = `${friends[pastArr[1]]['name']}`;


       let leftThirdCard = document.querySelector('.item-left .friend-pic-third');
       let leftThirdCardName = document.querySelector('.item-left .friend-name-third');

       leftThirdCard.style.backgroundImage = `url(${friends[pastArr[2]]['img']})`;
       leftThirdCardName.textContent = `${friends[pastArr[2]]['name']}`;
        
    }


    function randomArrForRight() {
        pastArr = currArr;
        currArr = nextArr;
        nextArr = [];

        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * 8);
            if (!nextArr.includes(num) && !currArr.includes(num)) {
                nextArr.push(num);
            } else {
                i--;
            }
        }


       //                                          RIGHT CARDS

       let rightFirstCard = document.querySelector('.item-right .friend-pic-first');
       let rightFirstCardName = document.querySelector('.item-right .friend-name-first');

       rightFirstCard.style.backgroundImage = `url(${friends[nextArr[0]]['img']})`;
       rightFirstCardName.textContent = `${friends[nextArr[0]]['name']}`;


       let rightSecondCard = document.querySelector('.item-right .friend-pic-second');
       let rightSeconCardName = document.querySelector('.item-right .friend-name-second');

       rightSecondCard.style.backgroundImage = `url(${friends[nextArr[1]]['img']})`;
       rightSeconCardName.textContent = `${friends[nextArr[1]]['name']}`;


       let rightThirdCard = document.querySelector('.item-right .friend-pic-third');
       let rightThirdCardName = document.querySelector('.item-right .friend-name-third');

       rightThirdCard.style.backgroundImage = `url(${friends[nextArr[2]]['img']})`;
       rightThirdCardName.textContent = `${friends[nextArr[2]]['name']}`;

       //                                          LEFT CARDS

       let leftFirstCard = document.querySelector('.item-left .friend-pic-first');
       let leftFirstCardName = document.querySelector('.item-left .friend-name-first');

       leftFirstCard.style.backgroundImage = `url(${friends[pastArr[0]]['img']})`;
       leftFirstCardName.textContent = `${friends[pastArr[0]]['name']}`;


       let leftSecondCard = document.querySelector('.item-left .friend-pic-second');
       let leftSeconCardName = document.querySelector('.item-left .friend-name-second');

       leftSecondCard.style.backgroundImage = `url(${friends[pastArr[1]]['img']})`;
       leftSeconCardName.textContent = `${friends[pastArr[1]]['name']}`;


       let leftThirdCard = document.querySelector('.item-left .friend-pic-third');
       let leftThirdCardName = document.querySelector('.item-left .friend-name-third');

       leftThirdCard.style.backgroundImage = `url(${friends[pastArr[2]]['img']})`;
       leftThirdCardName.textContent = `${friends[pastArr[2]]['name']}`;
        
        
    }



    CAROUSEL.addEventListener('animationend', (animation) => {
        
        if (animation.animationName === 'move-left') {
            CAROUSEL.classList.remove('transition-left');
            const LEFT_ITEMS = document.querySelector('.item-left').innerHTML;
            document.querySelector('.item-active').innerHTML = LEFT_ITEMS;

            randomArrForLeft();
            

            

        } else {
            CAROUSEL.classList.remove('transition-right');
            const RIGHT_ITEMS = document.querySelector('.item-right').innerHTML;
            document.querySelector('.item-active').innerHTML = RIGHT_ITEMS;

            randomArrForRight();
        } 
    }
    )

   

}







//                                              MODAL WINDOW


{
    const MODAL_WINDOW = document.querySelector('.modal-window-wrapper');
    const MODAL_IMAGE = document.querySelector('.modal-image');
    const MODAL_H = document.querySelector('.modal-h');
    const DESCRIPTION = document.querySelector('.modal-description');
    const HISTORY = document.querySelector('.modal_history');
    const AGE = document.querySelector('.modal-age-span');
    const INOCULATION = document.querySelector('.inoculations-span');
    const DISEASIS = document.querySelector('.diseases-span');
    const PARASITES = document.querySelector('.parasites-span');
    const BLACKOUT = document.querySelector('.blackout');
    const CROSS = document.querySelector('.cross-for-modal');
    const CENTRAL_BLOCK = document.querySelector('.item-active');


    CENTRAL_BLOCK.addEventListener('click', (event) => {
        let animal = event.target.closest('.friend');

        if (!animal) return;

        document.body.classList.add('no-scroll');
        BLACKOUT.classList.add('open');
        MODAL_WINDOW.classList.add('open');
        let animalName = animal.children[1].textContent;
        let objOfAnimal = friends.find((item, index) => friends[index]['name'] === animalName);
        MODAL_IMAGE.style.backgroundImage = `url(${objOfAnimal["img"]})`;
        MODAL_H.innerHTML = objOfAnimal['name'];
        DESCRIPTION.innerHTML = `${objOfAnimal['type']} - ${objOfAnimal['breed']}`;
        HISTORY.innerHTML = objOfAnimal['description'];
        AGE.innerHTML = objOfAnimal['age'];
        INOCULATION.innerHTML = objOfAnimal['inoculations'];
        DISEASIS.innerHTML = objOfAnimal['diseases'];
        PARASITES.innerHTML = objOfAnimal['parasites'];
        MODAL_WINDOW.style.left = Math.round(document.documentElement.clienttWidth / 2 - MODAL_WINDOW.offsetWidth / 2) + 'px';
        MODAL_WINDOW.style.top = Math.round(document.documentElement.clientHeight / 2 - MODAL_WINDOW.offsetHeight / 2 ) + 'px';
    })
   



    CROSS.addEventListener('click', () => {
        MODAL_WINDOW.classList.remove('open');
        BLACKOUT.classList.remove('open');
        document.body.classList.remove('no-scroll');

    })


    BLACKOUT.addEventListener('click', () => {
        MODAL_WINDOW.classList.remove('open');
        BLACKOUT.classList.remove('open');
        document.body.classList.remove('no-scroll');
    })

    


}







