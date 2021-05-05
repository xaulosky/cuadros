let app = document.querySelector("#app"),
    cuadrado = document.querySelector("#cuadrado"),
    x = 0,
    y = 0,
    mousedown = false;
  console.log(cuadrado);
  cuadrado.addEventListener(
    "mousedown",
    function (e) {
      mousedown = true;
      x = cuadrado.offsetLeft - e.clientX;
      y = cuadrado.offsetTop - e.clientY;
    },
    true
  );
  cuadrado.addEventListener('mouseup', function (e) { 
    // mouse state set to false 
    mousedown = false; 
}, true); 

app.addEventListener('mousemove', function (e) { 
    // Is mouse pressed 
    if (mousedown) { 
        // Now we calculate the difference upwards 
        cuadrado.style.left = e.clientX + x + 'px'; 
        cuadrado.style.top = e.clientY + y + 'px'; 
    } 
}, true); 