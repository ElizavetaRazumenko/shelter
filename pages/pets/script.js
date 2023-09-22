//                                 BURGER MENU

{

    const burgerButton = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.nav');
    const greyShadow = document.querySelector('.grey-shadow');
    const navLiSecond = document.querySelector('.second-li');
    const navLi = document.querySelectorAll('.nav-li');


    burgerButton.addEventListener('click', () => { 
        burgerButton.classList.toggle('open');
        navigation.classList.toggle('open');
        greyShadow.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    })


    navLiSecond.addEventListener('click', () => {
        if (navigation.classList.contains('open')) {
            navigation.classList.remove('open');
            burgerButton.classList.remove('open');
            greyShadow.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    })


    for (let elem of navLi) {
        elem.addEventListener('click', () => {
            if (navigation.classList.contains('open')) {
                navigation.classList.remove('open');
                burgerButton.classList.remove('open');
                greyShadow.classList.remove('open');
                document.body.classList.remove('no-scroll');
            }
        })
    }


    greyShadow.addEventListener('click', () => {
        if (navigation.classList.contains('open')) {
            navigation.classList.remove('open');
            burgerButton.classList.remove('open');
            greyShadow.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    })
}

//                                      PAGINATION



import friends from './friends.js';


{  

    
    let paginationArray = [[], [], [], [], [], []];

    function paginationGenerator() {  
               
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 8; j++) {
                let num = Math.floor(Math.random() * 8)
                if (!paginationArray[i].includes(num)) {
                    paginationArray[i].push(num); 
                } else {
                    j--;
                }
            }
           
        }

    }

    paginationGenerator();


    

    document.body.onload = () => {
        
        let animalPhotos = document.querySelectorAll('.animal-pic');

        for (let [index, photo] of Object.entries(animalPhotos)) {
            
            photo.style.backgroundImage = `url(${friends[paginationArray[0][+index]]['img']})`;
        
        
    }
        
        let animalNames = document.querySelectorAll('.animal-name');
        
        for (let [index, name] of Object.entries(animalNames)) {
            
                name.innerHTML = `${friends[paginationArray[0][+index]]['name']}`;
            
            
        }

    }


    const L_L_BUT = document.querySelector('.arrow.left-left');
    const SPAN_L_L = document.querySelector('.arrow-span.left-left')
    const L_BUT = document.querySelector('.arrow.left');
    const SPAN_L = document.querySelector('.arrow-span.left')
    const R_BUT = document.querySelector('.arrow.right');
    const SPAN_R = document.querySelector('span.right');
    const R_R_BUT = document.querySelector('.arrow.right-right');
    const SPAN_R_R = document.querySelector('.arrow-span.right-right')
    const CENTRAL_BUT = document.querySelector('.page-number');
    const PAGE_NUMBER = document.querySelector('.arrow-span.center');
    
    
    


    function page(number) {

        let animalPhotos = document.querySelectorAll('.animal-pic');

        for (let [index, photo] of Object.entries(animalPhotos)) {
            
            photo.style.backgroundImage = `url(${friends[paginationArray[number][+index]]['img']})`;
        
        
    }
        
        let animalNames = document.querySelectorAll('.animal-name');
        
        for (let [index, name] of Object.entries(animalNames)) {
            
                name.innerHTML = `${friends[paginationArray[number][+index]]['name']}`;
            
            
        }
    }


   
    
    let arrayFor = paginationArray.flat();
    console.log(paginationArray)

    function sliceArray(arr, leng) {

        let res = [];
        for (let i = 0; i < arr.length; i += leng) {
            const numb = arr.slice(i, i + leng);
            res.push(numb);
        }
        return res;
    }

    let paginationArrayFor768 = sliceArray(arrayFor, 6);
           
    let paginationArrayFor320 = sliceArray(arrayFor, 3);
        
        
    console.log(paginationArrayFor768)

    function pagefor768(number) {

        let animalPhotos = document.querySelectorAll('.animal-pic');

        for (let [index, photo] of Object.entries(animalPhotos)) {
            if (+index > 5) break;
            photo.style.backgroundImage = `url(${friends[paginationArrayFor768[number][+index]]['img']})`;
            console.log(photo.style.backgroundImage)
        
        
    }
        
        let animalNames = document.querySelectorAll('.animal-name');
        
        for (let [index, name] of Object.entries(animalNames)) {
            if (+index > 5) break;
            name.innerHTML = `${friends[paginationArrayFor768[number][+index]]['name']}`;
            
            
        }
    }
    
    function pagefor320(number) {

        let animalPhotos = document.querySelectorAll('.animal-pic');

        for (let [index, photo] of Object.entries(animalPhotos)) {
            if (+index > 2) break;
            photo.style.backgroundImage = `url(${friends[paginationArrayFor320[number][+index]]['img']})`;
            console.log(photo.style.backgroundImage)
        
        
    }
        
        let animalNames = document.querySelectorAll('.animal-name');
        
        for (let [index, name] of Object.entries(animalNames)) {
            if (+index > 2) break;
            name.innerHTML = `${friends[paginationArrayFor320[number][+index]]['name']}`;
            
            
        }
    }


    
   
    window.onresize = () => {
        let pageNum = +PAGE_NUMBER.innerHTML;
        const SCREEN_WIDTH = window.screen.width;
        if (SCREEN_WIDTH > 1210) {
            if (pageNum > 5) {
                PAGE_NUMBER.innerHTML = 6;
                R_BUT.classList.remove('active');
                R_BUT.classList.add('unactive');
                SPAN_R.classList.add('gray');
        
                R_R_BUT.classList.remove('active');
                R_R_BUT.classList.add('unactive');
                SPAN_R_R.classList.add('gray');
                page(5);
            }
        }

        if (SCREEN_WIDTH < 1211 && SCREEN_WIDTH > 650) {
            if (pageNum > 7) {
                PAGE_NUMBER.innerHTML = 8;
                R_BUT.classList.remove('active');
                R_BUT.classList.add('unactive');
                SPAN_R.classList.add('gray');
        
                R_R_BUT.classList.remove('active');
                R_R_BUT.classList.add('unactive');
                SPAN_R_R.classList.add('gray');
                pagefor768(7);
            }

            if (pageNum < 8) {
                R_BUT.classList.add('active');
                R_BUT.classList.remove('unactive');
                SPAN_R.classList.remove('gray');
        
                R_R_BUT.classList.add('active');
                R_R_BUT.classList.remove('unactive');
                SPAN_R_R.classList.remove('gray');
            }
        }

        if (SCREEN_WIDTH < 651) {
            if (pageNum < 16) {
                R_BUT.classList.add('active');
                R_BUT.classList.remove('unactive');
                SPAN_R.classList.remove('gray');
        
                R_R_BUT.classList.add('active');
                R_R_BUT.classList.remove('unactive');
                SPAN_R_R.classList.remove('gray');
            }
        }
    }
    
    

    R_BUT.addEventListener('click', () => {
        let pageNum = +PAGE_NUMBER.innerHTML;
        const SCREEN_WIDTH = window.screen.width;

        if (SCREEN_WIDTH > 1210) {
            if (pageNum < 6) {
                PAGE_NUMBER.innerHTML = pageNum + 1;
                page(pageNum);
        
                L_L_BUT.classList.add('active');
                L_L_BUT.classList.remove('unactive');
                SPAN_L_L.classList.add('black');
        
                L_BUT.classList.add('active');
                L_BUT.classList.remove('unactive');
                SPAN_L.classList.add('black');
        
        
               } 
                if (PAGE_NUMBER.innerHTML == '6') {
                R_BUT.classList.remove('active');
                R_BUT.classList.add('unactive');
                SPAN_R.classList.add('gray');
        
                R_R_BUT.classList.remove('active');
                R_R_BUT.classList.add('unactive');
                SPAN_R_R.classList.add('gray');
               }
        }

        if (SCREEN_WIDTH < 1211 && SCREEN_WIDTH > 650) {
            if (pageNum < 8) {
                PAGE_NUMBER.innerHTML = pageNum + 1;
                
                pagefor768(pageNum);
        
                L_L_BUT.classList.add('active');
                L_L_BUT.classList.remove('unactive');
                SPAN_L_L.classList.add('black');
        
                L_BUT.classList.add('active');
                L_BUT.classList.remove('unactive');
                SPAN_L.classList.add('black');
        
        
               } 

                if (PAGE_NUMBER.innerHTML == '8') {
                R_BUT.classList.remove('active');
                R_BUT.classList.add('unactive');
                SPAN_R.classList.add('gray');
        
                R_R_BUT.classList.remove('active');
                R_R_BUT.classList.add('unactive');
                SPAN_R_R.classList.add('gray');
               }
        }


        if (SCREEN_WIDTH < 651) {
            if (pageNum < 16) {
                PAGE_NUMBER.innerHTML = pageNum + 1;
                
                pagefor320(pageNum);
        
                L_L_BUT.classList.add('active');
                L_L_BUT.classList.remove('unactive');
                SPAN_L_L.classList.add('black');
        
                L_BUT.classList.add('active');
                L_BUT.classList.remove('unactive');
                SPAN_L.classList.add('black');
        
        
               } 

                if (PAGE_NUMBER.innerHTML == '16') {
                R_BUT.classList.remove('active');
                R_BUT.classList.add('unactive');
                SPAN_R.classList.add('gray');
        
                R_R_BUT.classList.remove('active');
                R_R_BUT.classList.add('unactive');
                SPAN_R_R.classList.add('gray');
               }
        }

       
    })

    R_R_BUT.addEventListener('click', () => {
        let pageNum = +PAGE_NUMBER.innerHTML;
        const SCREEN_WIDTH = window.screen.width;

        if (SCREEN_WIDTH > 1210) {
            if (pageNum < 6) {
            PAGE_NUMBER.innerHTML = 6; 
            page(5);
            R_BUT.classList.remove('active');
            R_BUT.classList.add('unactive');
            SPAN_R.classList.add('gray');
    
            R_R_BUT.classList.remove('active');
            R_R_BUT.classList.add('unactive');
            SPAN_R_R.classList.add('gray');

            L_L_BUT.classList.add('active');
            L_L_BUT.classList.remove('unactive');
            SPAN_L_L.classList.add('black');

            L_BUT.classList.add('active');
            L_BUT.classList.remove('unactive');
            SPAN_L.classList.add('black');
        }
        }


        if (SCREEN_WIDTH < 1211 && SCREEN_WIDTH > 650) {
            if (pageNum < 8) {
                PAGE_NUMBER.innerHTML = 8; 
                pagefor768(7);
                R_BUT.classList.remove('active');
                R_BUT.classList.add('unactive');
                SPAN_R.classList.add('gray');
        
                R_R_BUT.classList.remove('active');
                R_R_BUT.classList.add('unactive');
                SPAN_R_R.classList.add('gray');
    
                L_L_BUT.classList.add('active');
                L_L_BUT.classList.remove('unactive');
                SPAN_L_L.classList.add('black');
    
                L_BUT.classList.add('active');
                L_BUT.classList.remove('unactive');
                SPAN_L.classList.add('black');
            } 
        }

        if (SCREEN_WIDTH < 651) {
            if (pageNum < 16) {
                PAGE_NUMBER.innerHTML = 16; 
                pagefor320(15);
                R_BUT.classList.remove('active');
                R_BUT.classList.add('unactive');
                SPAN_R.classList.add('gray');
        
                R_R_BUT.classList.remove('active');
                R_R_BUT.classList.add('unactive');
                SPAN_R_R.classList.add('gray');
    
                L_L_BUT.classList.add('active');
                L_L_BUT.classList.remove('unactive');
                SPAN_L_L.classList.add('black');
    
                L_BUT.classList.add('active');
                L_BUT.classList.remove('unactive');
                SPAN_L.classList.add('black');
            } 
        }
        
    })

    L_BUT.addEventListener('click', () => {
        let pageNum = +PAGE_NUMBER.innerHTML;
        const SCREEN_WIDTH = window.screen.width;

        if (SCREEN_WIDTH > 1210)  {
          if (pageNum > 1) {
            PAGE_NUMBER.innerHTML = pageNum - 1;
            page((pageNum - 2));

            R_R_BUT.classList.add('active');
            R_R_BUT.classList.remove('unactive');
            SPAN_R_R.classList.remove('gray');

            R_BUT.classList.add('active');
            R_BUT.classList.remove('unactive');
            SPAN_R.classList.remove('gray');

        } 

        if (PAGE_NUMBER.innerHTML == '1') {
            L_BUT.classList.remove('active');
            L_BUT.classList.add('unactive');
            SPAN_L.classList.remove('black');

            L_L_BUT.classList.remove('active');
            L_L_BUT.classList.add('unactive');
            SPAN_L_L.classList.remove('black');
        }  
        }



        if (SCREEN_WIDTH < 1211 && SCREEN_WIDTH > 650) {
            if (pageNum > 1) {
                PAGE_NUMBER.innerHTML = pageNum - 1;
                pagefor768((pageNum - 2));
    
                R_R_BUT.classList.add('active');
                R_R_BUT.classList.remove('unactive');
                SPAN_R_R.classList.remove('gray');
    
                R_BUT.classList.add('active');
                R_BUT.classList.remove('unactive');
                SPAN_R.classList.remove('gray');
    
            } 
    
            if (PAGE_NUMBER.innerHTML == '1') {
                L_BUT.classList.remove('active');
                L_BUT.classList.add('unactive');
                SPAN_L.classList.remove('black');
    
                L_L_BUT.classList.remove('active');
                L_L_BUT.classList.add('unactive');
                SPAN_L_L.classList.remove('black');
            }  
        }



        if (SCREEN_WIDTH < 651) {
            if (pageNum > 1) {
                PAGE_NUMBER.innerHTML = pageNum - 1;
                pagefor320((pageNum - 2));
    
                R_R_BUT.classList.add('active');
                R_R_BUT.classList.remove('unactive');
                SPAN_R_R.classList.remove('gray');
    
                R_BUT.classList.add('active');
                R_BUT.classList.remove('unactive');
                SPAN_R.classList.remove('gray');
    
            } 
    
            if (PAGE_NUMBER.innerHTML == '1') {
                L_BUT.classList.remove('active');
                L_BUT.classList.add('unactive');
                SPAN_L.classList.remove('black');
    
                L_L_BUT.classList.remove('active');
                L_L_BUT.classList.add('unactive');
                SPAN_L_L.classList.remove('black');
            }  
        }
        
    })


    L_L_BUT.addEventListener('click', () => {
        let pageNum = +PAGE_NUMBER.innerHTML;
        const SCREEN_WIDTH = window.screen.width;

        if (SCREEN_WIDTH > 1210)  {
            if (pageNum > 1) {
            PAGE_NUMBER.innerHTML = 1; 
            pagefor768(0);
            L_BUT.classList.remove('active');
            L_BUT.classList.add('unactive');
            SPAN_L.classList.remove('black');
    
            L_L_BUT.classList.remove('active');
            L_L_BUT.classList.add('unactive');
            SPAN_L_L.classList.remove('black');

            R_R_BUT.classList.add('active');
            R_R_BUT.classList.remove('unactive');
            SPAN_R_R.classList.remove('gray');

            R_BUT.classList.add('active');
            R_BUT.classList.remove('unactive');
            SPAN_R.classList.remove('gray');
        }
        }


        if (SCREEN_WIDTH < 1211 && SCREEN_WIDTH > 650) {
            if (pageNum > 1) {
                PAGE_NUMBER.innerHTML = 1; 
                pagefor768(0);
                L_BUT.classList.remove('active');
                L_BUT.classList.add('unactive');
                SPAN_L.classList.remove('black');
        
                L_L_BUT.classList.remove('active');
                L_L_BUT.classList.add('unactive');
                SPAN_L_L.classList.remove('black');
    
                R_R_BUT.classList.add('active');
                R_R_BUT.classList.remove('unactive');
                SPAN_R_R.classList.remove('gray');
    
                R_BUT.classList.add('active');
                R_BUT.classList.remove('unactive');
                SPAN_R.classList.remove('gray');
            }
        }


        if (SCREEN_WIDTH < 651) {
            if (pageNum > 1) {
                PAGE_NUMBER.innerHTML = 1; 
                pagefor320(0);
                L_BUT.classList.remove('active');
                L_BUT.classList.add('unactive');
                SPAN_L.classList.remove('black');
        
                L_L_BUT.classList.remove('active');
                L_L_BUT.classList.add('unactive');
                SPAN_L_L.classList.remove('black');
    
                R_R_BUT.classList.add('active');
                R_R_BUT.classList.remove('unactive');
                SPAN_R_R.classList.remove('gray');
    
                R_BUT.classList.add('active');
                R_BUT.classList.remove('unactive');
                SPAN_R.classList.remove('gray');
            }
        }
        
    })

}



//                                              MODAL WINDOW


{
    const MODAL_WINDOW = document.querySelector('.modal-window-wrapper');
    const ANIMAL_PICTURE = document.querySelectorAll('.animal');
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
    const MODAL = document.querySelector('.modal-window')


    for (let animal of ANIMAL_PICTURE) {
        animal.addEventListener('click', () => {
            
            
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
    }


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
