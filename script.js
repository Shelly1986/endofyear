var score = 0; 

document.getElementById('submit1').addEventListener('click',()=>{
  let match = false;
  const value = document.getElementById('c1').value.toUpperCase().replace(/\s+/g, "");
  const correct = document.getElementById('c1').getAttribute("mdf");
  for (let i = 0; i<=value.length; i++){
    const answer = md5(value.slice(0, i))
    if (answer === correct){
      match = true;
    }
  }
  if (match === true){
    score = score + 1;
    document.getElementById('img1').classList.remove('hidden')
    document.getElementById('img1').setAttribute('src','correct.png')
    document.getElementById('one').classList.add('overlay');
    document.getElementById('c1').value = '';
    document.getElementById('c1').disabled = 'true';
    document.getElementById('submit1').disabled = 'true';
    document.getElementById('score').innerHTML = score;
    
  } else{
    document.getElementById('img1').classList.remove('hidden')
    document.getElementById('img1').setAttribute('src','cross.png')
  }
})

document.getElementById('submit2').addEventListener('click',()=>{
  let match = false;
  const value = document.getElementById('c2').value.toUpperCase().replace(/\s+/g, "");
  const correct = document.getElementById('c2').getAttribute("mdf");
  for (let i = 0; i<=value.length; i++){
    const answer = md5(value.slice(0, i))
    if (answer === correct){
      match = true;
    }
  }
  if (match === true){
    score = score + 1;
    document.getElementById('img2').classList.remove('hidden')
    document.getElementById('img2').setAttribute('src','correct.png')
    document.getElementById('two').classList.add('overlay');
    document.getElementById('c2').value = '';
    document.getElementById('c2').disabled = 'true';
    document.getElementById('submit2').disabled = 'true';
    document.getElementById('score').innerHTML = score;
    
  } else{
    document.getElementById('img2').classList.remove('hidden')
    document.getElementById('img2
    
    ').setAttribute('src','cross.png')
  }
})

document.getElementById('submit3').addEventListener('click',()=>{
  if (document.getElementById('musk').value.toLowerCase() == 'elon musk'){
    score = score + 1;
    document.getElementById('img3').classList.remove('hidden')
    document.getElementById('img3').setAttribute('src','correct.png')
    document.getElementById('three').classList.add('overlay');
    document.getElementById('musk').value = '';
    document.getElementById('musk').disabled = 'true';
    document.getElementById('submit3').disabled = 'true';
    document.getElementById('score').innerHTML = score;
    
  } else{
    document.getElementById('img3').classList.remove('hidden')
    document.getElementById('img3').setAttribute('src','cross.png')
  }
})

document.getElementById('submit4').addEventListener('click',()=>{
  if (parseInt(document.getElementById('dots').value) == 0){
    score = score + 1;
    document.getElementById('img4').classList.remove('hidden')
    document.getElementById('img4').setAttribute('src','correct.png')
    document.getElementById('four').classList.add('overlay');
    document.getElementById('dots').value = '';
    document.getElementById('dots').disabled = 'true';
    document.getElementById('submit2').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img4').classList.remove('hidden')
    document.getElementById('img4').setAttribute('src','cross.png')
  }
})

document.getElementById('submit5').addEventListener('click',()=>{
  if (document.getElementById('sine').value.toLowerCase() == 'sinusoidal'){
    score = score + 1;
    document.getElementById('img5').classList.remove('hidden')
    document.getElementById('img5').setAttribute('src','correct.png')
    document.getElementById('five').classList.add('overlay');
    document.getElementById('sine').value = '';
    document.getElementById('sine').disabled = 'true';
    document.getElementById('submit5').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img5').classList.remove('hidden')
    document.getElementById('img5').setAttribute('src','cross.png')
  }
})

document.getElementById('submit6').addEventListener('click',()=>{
  if (document.getElementById('smoke').value.toLowerCase() == 'no smoking'){
    score = score + 1;
    document.getElementById('img6').classList.remove('hidden')
    document.getElementById('img6').setAttribute('src','correct.png')
    document.getElementById('six').classList.add('overlay');
    document.getElementById('smoke').value = '';
    document.getElementById('smoke').disabled = 'true';
    document.getElementById('submit6').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img6').classList.remove('hidden')
    document.getElementById('img6').setAttribute('src','cross.png')
  }
})

document.getElementById('submit7').addEventListener('click',()=>{
  if (document.getElementById('blur').value.toLowerCase() == 'sundar pichai'){
    score = score + 1;
    document.getElementById('img7').classList.remove('hidden')
    document.getElementById('img7').setAttribute('src','correct.png')
    document.getElementById('seven').classList.add('overlay');
    document.getElementById('blur').value = '';
    document.getElementById('blur').disabled = 'true';
    document.getElementById('submit7').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img7').classList.remove('hidden')
    document.getElementById('img7').setAttribute('src','cross.png')
  }
})
document.getElementById('submit8').addEventListener('click',()=>{
  if (document.getElementById('africa').value.toLowerCase() == 'africa'){
    score = score + 1;
    document.getElementById('img8').classList.remove('hidden')
    document.getElementById('img8').setAttribute('src','correct.png')
    document.getElementById('eight').classList.add('overlay');
    document.getElementById('africa').value = '';
    document.getElementById('africa').disabled = 'true';
    document.getElementById('submit3').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img8').classList.remove('hidden')
    document.getElementById('img8').setAttribute('src','cross.png')
  }
})

document.getElementById('submit9').addEventListener('click',()=>{
  if (document.getElementById('credit').value == '1888'){
    score = score + 1;
    document.getElementById('img9').classList.remove('hidden')
    document.getElementById('img9').setAttribute('src','correct.png')
    document.getElementById('nine').classList.add('overlay');
    document.getElementById('credit').value = '';
    document.getElementById('credit').disabled = 'true';
    document.getElementById('submit9').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img9').classList.remove('hidden')
    document.getElementById('img9').setAttribute('src','cross.png')
  }
})

document.getElementById('submit10').addEventListener('click',()=>{
  if (document.getElementById('binary').value == '1000'){
    score = score + 1;
    document.getElementById('img10').classList.remove('hidden')
    document.getElementById('img10').setAttribute('src','correct.png')
    document.getElementById('ten').classList.add('overlay');
    document.getElementById('binary').value = '';
    document.getElementById('binary').disabled = 'true';
    document.getElementById('submit10').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img10').classList.remove('hidden')
    document.getElementById('img10').setAttribute('src','cross.png')
  }
})

document.getElementById('submit11').addEventListener('click',()=>{
  if (document.getElementById('mac').value.toLowerCase() == 'apple'){
    score = score + 1;
    document.getElementById('img11').classList.remove('hidden')
    document.getElementById('img11').setAttribute('src','correct.png')
    document.getElementById('eleven').classList.add('overlay');
    document.getElementById('mac').value = '';
    document.getElementById('mac').disabled = 'true';
    document.getElementById('submit11').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img11').classList.remove('hidden')
    document.getElementById('img11').setAttribute('src','cross.png')
  }
})

document.getElementById('submit12').addEventListener('click',()=>{
  if (document.getElementById('lake').value == '4952'){
    score = score + 1;
    document.getElementById('img12').classList.remove('hidden')
    document.getElementById('img12').setAttribute('src','correct.png')
    document.getElementById('twelve').classList.add('overlay');
    document.getElementById('lake').value = '';
    document.getElementById('lake').disabled = 'true';
    document.getElementById('submit12').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img12').classList.remove('hidden')
    document.getElementById('img12').setAttribute('src','cross.png')
  }
})

document.getElementById('submit13').addEventListener('click',()=>{
  if (document.getElementById('steg').value.toLowerCase() == 'steganography'){
    score = score + 1;
    document.getElementById('img13').classList.remove('hidden')
    document.getElementById('img13').setAttribute('src','correct.png')
    document.getElementById('thirteen').classList.add('overlay');
    document.getElementById('steg').value = '';
    document.getElementById('steg').disabled = 'true';
    document.getElementById('submit13').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    document.getElementById('img13').classList.remove('hidden')
    document.getElementById('img13').setAttribute('src','cross.png')
  }
})

document.getElementById('graphy').addEventListener('click',()=>{
  window.open('Doc1.odt');
})

document.getElementById('mona').addEventListener('click',()=>{
  window.open('mona.pdf');
})

document.getElementById('submit14').addEventListener('click',()=>{
  if (document.getElementById('monal').value.toLowerCase() == 'vinci'){
    score = score + 1;
    document.getElementById('img14').classList.remove('hidden')
    document.getElementById('img14').setAttribute('src','correct.png')
    document.getElementById('fourteen').classList.add('overlay');
    document.getElementById('monal').value = '';
    document.getElementById('monal').disabled = 'true';
    document.getElementById('submit14').disabled = 'true';
    document.getElementById('score').innerHTML = score;
  

  } else{
    document.getElementById('img14').classList.remove('hidden')
    document.getElementById('img14').setAttribute('src','cross.png')
  }
})

document.getElementById('submit15').addEventListener('click',()=>{
  if (document.getElementById('qr').value.toLowerCase() == 'keyboard'){
    score = score + 1;
    document.getElementById('img15').classList.remove('hidden')
    document.getElementById('img15').setAttribute('src','correct.png')
    document.getElementById('fifteen').classList.add('overlay');
    document.getElementById('qr').value = '';
    document.getElementById('qr').disabled = 'true';
    document.getElementById('submit15').disabled = 'true';
    document.getElementById('score').innerHTML = score;
  

  } else{
    document.getElementById('img15').classList.remove('hidden')
    document.getElementById('img15').setAttribute('src','cross.png')
  }
})