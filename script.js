function si(){
      
    var p = parseInt(document.getElementById('principal').value);
    var r = document.getElementById('rate').value;
    var t = document.getElementById('time').value;
    let btn = document.getElementById('btn');
    
    var interest = (p*r*t)/100;
    
    
    document.getElementById('principal1').innerHTML = p;
    document.getElementById('rate1').innerHTML = r;
    var plusInterest = p + interest;
    document.getElementById('plus').innerHTML = plusInterest;
    document.getElementById('time1').innerHTML = t;

    
  }
  