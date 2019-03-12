let n = prompt("Введіть значення");
let res = 0;
for(let k = 0;k<n;k++){
   res =  Math.cos(k**2+1)-Math.abs(Math.sin(2*k)-5.76)/k;
} 
document.write(res);