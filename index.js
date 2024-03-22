var count = 0;
var b = ['https://theindianschool.in/frontend/images/school-main1.jpg',
 'https://theindianschool.in/uploads/posts/L-16972255898684-our-school-main.jpg',
  'https://theindianschool.in/uploads/posts/L-16972253161054-vission-and-mission-main.jpg',
   'https://theindianschool.in/uploads/posts/L-16972259411607-parents-main.jpg'];
var c = document.querySelector('.mid-img');
var before= document.querySelector('.previous');
var after= document.querySelector('.next');

const t = b.length

const fun = () => {
    if (count > (t - 1))
        count = 0
    else {

        console.log(count);
        console.log(b[count])
        c.style.backgroundImage = `url(${b[count]})`;
        ++count;
    }   
}
setInterval(fun, 3000);




function previous(){
    if(count==0)
    {
        count=b.length
    }
    else{
        --count;
        c.style.backgroundImage = `url(${b[count]})`;
        
    }

}

function next(){
    if(count>=(b.length-1))
    {
        count=0;
    }

    else{
        ++count;
        c.style.backgroundImage = `url(${b[count]})`;
    
    }

    
    }
    
    before.addEventListener('click',previous)

    after.addEventListener('click',next)