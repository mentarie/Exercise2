window.onload = function() {

// variabel-------------------------------------------------
var current,
    screen,
    output,
    limit,
    zero,
    period,
    operator;
    
    screen = document.getElementById("hasil");//buat nampilin hasil

var elem = document.querySelectorAll(".num");//ngambil data dari id num yang udah masuk
    
      var len = elem.length;
    
      for(var i = 0; i < len; i++ ) {        
        elem[i].addEventListener("click",function() {                  
            num = this.value;                     
            output = screen.innerHTML +=num;                  
            limit = output.length; //bikin limit buat masukkan angka dan karakter (maksimal 16 di tampilan hasil)
        if(limit > 16 ) {
            alert("Jumlah inputan sudah maksimal!");             
        }
      },false); 
    } 

    document.querySelector(".zero").addEventListener("click",function() {        
        zero = this.value;        
        if(screen.innerHTML === "") {            
           output = screen.innerHTML = zero;  
        }        
        else if(screen.innerHTML === output) {            
          output = screen.innerHTML +=zero;            
        }          
    },false);
    
    document.querySelector(".period").addEventListener("click",function() {
        period = this.value;
        if(screen.innerHTML === "") {
         output = screen.innerHTML = screen.innerHTML.concat("0.");
        }
        else if(screen.innerHTML === output) {
          screen.innerHTML = screen.innerHTML.concat(".");
        }
    },false);
    
    
    document.querySelector("#eqn-bg").addEventListener("click",function() {
      if(screen.innerHTML === output) {
        screen.innerHTML = eval(output);
        output = screen.innerHTML;
      }
      else {
        screen.innerHTML = "";
      }
    },false);
    
    document.querySelector("#delete").addEventListener("click",function() {
      screen.innerHTML = "";
    },false);
    
   
    var elem1 = document.querySelectorAll(".operator");
    var len1 = elem1.length;
    
      for(var i = 0; i < len1; i++ ) {
        
        elem1[i].addEventListener("click",function() {         
          operator = this.value;
           
           if(screen.innerHTML === "") {            
              screen.innerHTML = screen.innerHTML.concat("");            
          }
          
          else if(output) {        
              screen.innerHTML = output.concat(operator);            
          }             
        },false);          
    }   
}