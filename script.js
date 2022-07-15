      
      function showDiv() {
        let div1 = document.querySelector('#first');
        let div2 = document.querySelector('#next');
    
        if (div1.style.display == "block") {
            div1.style.display = "none";
            div2.style.display = "block";
        } else {
            div1.style.display = "block";
            div2.style.display = "none";
        }
    
     }
     
     function showDiv1() {
        let div1 = document.querySelector('#first');
        let div2 = document.querySelector('#next');
    
        if (div2.style.display == "block") {
            div2.style.display = "none";
            div1.style.display = "block";
        } else {
            div2.style.display = "block";
            div1.style.display = "none";
        }
    
     }
     