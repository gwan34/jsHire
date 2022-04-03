const body= document.querySelector('body');

const row = document.getElementsByClassName('item_row');
const rowHeight = 490;

console.dir(row)
window.addEventListener('scroll' , (e) => {

    const scrollTop = e.target.scrollingElement.scrollTop;


    if(scrollTop > 200){

        if(!row[1].classList.contains('animate'))
        {
            row[1].classList.add('animate');
        
        }
    }
    if(scrollTop > 200 +rowHeight ){

        if(!row[2].classList.contains('animate'))
        {
            row[2].classList.add('animate');
          
        }
    }
    if(scrollTop > 200 +rowHeight*2 ){

        if(!row[3].classList.contains('animate'))
        {
            row[3].classList.add('animate');
          
        }
    }

    console.log(scrollTop)



})


