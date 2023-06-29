var score = 0;
function check(button_pressed,input_box,image,divx){
    let match = false;
    const value = document.getElementById(input_box).value.toUpperCase().replace(/\s+/g, "");
    const correct = document.getElementById(input_box).getAttribute("mdf");
    for (let i = 0; i<=value.length; i++){
        const answer = md5(value.slice(0, i))
        if (answer === correct){
          match = true;
        }
      }
      if (match === true){
        score = score + 1;
        document.getElementById(image).classList.remove('hidden')
        document.getElementById(image).setAttribute('src','correct.png')
        document.getElementById(divx).classList.add('overlay');
        document.getElementById(input_box).value = '';
        document.getElementById(input_box).disabled = 'true';
        document.getElementById(button_pressed).disabled = 'true';
        document.getElementById('score').innerHTML = score;
        
      } else{
        document.getElementById(image).classList.remove('hidden')
        document.getElementById(image).setAttribute('src','cross.png')
      }
    }
    
