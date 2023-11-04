
/*-- ===================================== --*/
/*-- ========== Get Graphics ========= --*/
let typez= document.getElementById("selGraph");
 typez.addEventListener("change", ()=>{
let  pricez =document.getElementById("pricez");
let textrex=document.getElementById("gForm-ta");
let showPrice=document.getElementById("moveto");
let selVal=typez.value;
 if (selVal=="others") {
     pricez.style.display="none";
 }else{
     switch (selVal) {
         case  "simple logo":
             pricez.value="Cost Price: N2000"
             pricez.style.display="inline";
             break;
         case "professional logo":
             pricez.value="Cost Price: N7000";
             pricez.style.display="inline";
             break;
         case "gaming logo":
             pricez.value="Cost Price: N5000";
             pricez.style.display="inline"; 
             break; 
         case "religious flyer":
             pricez.value="Cost Price: N7000";
             pricez.style.display="inline";
             break;
         case "business flyer":
             pricez.value="Cost Price: N10,000";
             pricez.style.display="inline";
             break;
         case "gaming banner":
             pricez.value="Cost Price: N5000";
             pricez.style.display="inline";
             break;
         case "book cover":
             pricez.value="Cost Price: N7000";
             break;
         default:
             alert("please select a design type or choose '\OTHERS\' if what you want is not listed. \n \n Thank you.")
       }
 }
 showPrice.value=pricez.value;
     });
/*-- ===================================== --*/

<!-- ===================================== -->

  
