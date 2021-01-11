function rotiraj(){
    let img = document.getElementById('logo');
    img.style.transition = " transform 5s";
    img.style.transform = 'rotateX(360deg)';
}

function popuni(){

    let greska = document.getElementById('greska');

    if( ime.value === '' || ime.value == null){
        greska.innerHTML = 'Popunite polje sa imenom!';
    }
    else if(prezime.value === '' || prezime.value == null){
        greska.innerHTML = 'Popunite polje sa prezimenom!';
    }
    else if( email.value === '' || email.value == null){
        greska.innerHTML = 'Popunite polje za email adresu!';
    }
    else if (lozinka.value.length < 3 ||  lozinka.value ==='')
{
		greska.innerHTML = 'Vasa lozinka nije dovoljno dugacka!';
}
else{
        
    let g = document.getElementById('forma').style.display = 'none';
    let b = document.getElementById('sub').style.display = 'none';
    let text = document.getElementById('unesi').innerHTML ='Vasu podaci su poslati. ';
    let inf = document.getElementById('demo').innerHTML = 'Podaci koje ste uneli: <br><br> Ime:' +
    ime.value + '.' + '<br>' +'Prezime:' + prezime.value + '.' +  '<br>' +'Email adresa:' + email.value + '.';
}
}



function slider(){
    let img = document.getElementById('img');
    let images = ['1.jpg', '2.jpg','3.jpg', '4.jpg', '5.jpg'];
    let i = 0;

     function slide(){
          if(i <images.length ){
           i += 1;  }
          else{
            i = 1;   }
           
       img.innerHTML = "<img src=" +images[i-1]+ ">";
                    }
             setInterval(slide, 1000);
 }

    

          
          
