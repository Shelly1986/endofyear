var score = 0; 
document.getElementById('submit1').addEventListener('click',()=>{
  if (document.getElementById('louvre').value.toLowerCase() == 'laduree'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('one').classList.add('overlay');
    document.getElementById('louvre').value = '';
    document.getElementById('louvre').disabled = 'true';
    document.getElementById('submit1').disabled = 'true';
    document.getElementById('score').innerHTML = score;
    
  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit2').addEventListener('click',()=>{
  if (document.getElementById('bean').value.toLowerCase() == 'jeff'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('two').classList.add('overlay');
    document.getElementById('bean').value = '';
    document.getElementById('bean').disabled = 'true';
    document.getElementById('submit2').disabled = 'true';
    document.getElementById('score').innerHTML = score;
    
  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit3').addEventListener('click',()=>{
  if (document.getElementById('musk').value.toLowerCase() == 'elon musk'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('three').classList.add('overlay');
    document.getElementById('musk').value = '';
    document.getElementById('musk').disabled = 'true';
    document.getElementById('submit3').disabled = 'true';
    document.getElementById('score').innerHTML = score;
    
  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit4').addEventListener('click',()=>{
  if (parseInt(document.getElementById('dots').value) == 0){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('four').classList.add('overlay');
    document.getElementById('dots').value = '';
    document.getElementById('dots').disabled = 'true';
    document.getElementById('submit2').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit5').addEventListener('click',()=>{
  if (document.getElementById('sine').value.toLowerCase() == 'sinusoidal'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('five').classList.add('overlay');
    document.getElementById('sine').value = '';
    document.getElementById('sine').disabled = 'true';
    document.getElementById('submit5').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit6').addEventListener('click',()=>{
  if (document.getElementById('smoke').value.toLowerCase() == 'no smoking'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('six').classList.add('overlay');
    document.getElementById('smoke').value = '';
    document.getElementById('smoke').disabled = 'true';
    document.getElementById('submit6').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit7').addEventListener('click',()=>{
  if (document.getElementById('blur').value.toLowerCase() == 'sundar pichai'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('seven').classList.add('overlay');
    document.getElementById('blur').value = '';
    document.getElementById('blur').disabled = 'true';
    document.getElementById('submit7').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
  }
})
document.getElementById('submit8').addEventListener('click',()=>{
  if (document.getElementById('africa').value.toLowerCase() == 'africa'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('eight').classList.add('overlay');
    document.getElementById('africa').value = '';
    document.getElementById('africa').disabled = 'true';
    document.getElementById('submit3').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit9').addEventListener('click',()=>{
  if (document.getElementById('credit').value == '1888'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('nine').classList.add('overlay');
    document.getElementById('credit').value = '';
    document.getElementById('credit').disabled = 'true';
    document.getElementById('submit9').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit10').addEventListener('click',()=>{
  if (document.getElementById('binary').value == '1000'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('ten').classList.add('overlay');
    document.getElementById('binary').value = '';
    document.getElementById('binary').disabled = 'true';
    document.getElementById('submit10').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit11').addEventListener('click',()=>{
  if (document.getElementById('mac').value.toLowerCase() == 'apple'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('eleven').classList.add('overlay');
    document.getElementById('mac').value = '';
    document.getElementById('mac').disabled = 'true';
    document.getElementById('submit11').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit12').addEventListener('click',()=>{
  if (document.getElementById('lake').value.toLowerCase() == 'lake'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('twelve').classList.add('overlay');
    document.getElementById('lake').value = '';
    document.getElementById('lake').disabled = 'true';
    document.getElementById('submit12').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit13').addEventListener('click',()=>{
  if (document.getElementById('steg').value.toLowerCase() == 'steganography'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('thirteen').classList.add('overlay');
    document.getElementById('steg').value = '';
    document.getElementById('steg').disabled = 'true';
    document.getElementById('submit13').disabled = 'true';
    document.getElementById('score').innerHTML = score;

  } else{
    window.alert('Try Again!')
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
    window.alert('Well done!');
    document.getElementById('fourteen').classList.add('overlay');
    document.getElementById('monal').value = '';
    document.getElementById('monal').disabled = 'true';
    document.getElementById('submit14').disabled = 'true';
    document.getElementById('score').innerHTML = score;
  

  } else{
    window.alert('Try Again!')
  }
})

document.getElementById('submit15').addEventListener('click',()=>{
  if (document.getElementById('qr').value.toLowerCase() == 'keyboard'){
    score = score + 1;
    window.alert('Well done!');
    document.getElementById('fifteen').classList.add('overlay');
    document.getElementById('qr').value = '';
    document.getElementById('qr').disabled = 'true';
    document.getElementById('submit15').disabled = 'true';
    document.getElementById('score').innerHTML = score;
  

  } else{
    window.alert('Try Again!')
  }
})
