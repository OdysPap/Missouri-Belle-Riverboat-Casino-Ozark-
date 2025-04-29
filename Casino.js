const input = document.getElementById("buyin");
const warning = document.getElementById("FBI");
const max = 10000;
input.addEventListener("input", () => {
    if (parseFloat(input.value) > max) {
      warning.style.display = "inline";
    } else {
      warning.style.display = "none";
    }
  })//This code is for the input field with id 'buyin' to show a warning message.
const condition= document.getElementById("yes");
const clientInfo = document.getElementById("Client-Info");
condition.addEventListener("change", () => {
    if (condition.checked) {
      clientInfo.style.display = "block";
    } else {
      clientInfo.style.display = "none";
    }
  })//This code is for the checkbox with id 'yes' to show or hide the client information section.
//First page done,
const buyinForm= document.getElementById("buyinForm");
let spinsLeft= 0;
const page1= document.getElementById("page1");
const page2= document.getElementById("page2");
buyinForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const buyinValue = parseFloat(document.getElementById("buyin").value);
    spinsLeft = parseInt(buyinValue, 10); // Set the number of spins left based on the buyin value
    document.getElementById("money").textContent = buyinValue; // Display the buyin value on the second page
    page1.style.display = "none";
    page2.style.display = "block";
    document.body.style.backgroundImage= "url('https://www.hotel-lasvegas.net/data/Photos/OriginalPhoto/12754/1275449/1275449323.JPEG')";
    document.getElementById("tries").textContent = spinsLeft; // Display the number of spins left on the second page
    document.getElementById("spinsLeft").style.display= "block";
});
//I decided to create one big HTML file with all the pages in it, and use JS to show/hide the pages as needed.
//This code is for the submit button with id 'submit' to redirect to the next page when clicked.
iconsArray = ["https://www.freeiconspng.com/uploads/diamond-png-4.png",// diamond
  "https://png.pngtree.com/png-clipart/20211009/original/pngtree-gold-dollar-coin-png-image_6848497.png",//coin
  "https://pngimg.com/d/clover_PNG24218.png",//clover
  "https://images.vexels.com/media/users/3/306638/isolated/preview/ccec51b89d57e0283452746c4f417041-red-and-succulent-strawberry.png",//strawberry
  "https://png.pngtree.com/png-clipart/20220910/original/pngtree-star-png-vector-icon-ui-game-png-image_8528046.png",// star
  "https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-open-dower-chest-icon-png-image_4996961.png",// chest
  "https://seeklogo.com/images/M/minnesota-timberwolves-logo-4CC6086DA9-seeklogo.com.png",// wolf
  "https://pngfre.com/wp-content/uploads/Gold-Crown-2.png"];  // crown
const spinButton = document.getElementById("spinButton");
const endPage = document.getElementById("endPage");
const resultWin= document.getElementById("resultWin");
const resultLose= document.getElementById("resultLose");
spinButton.addEventListener("click", () => {
  if ( spinsLeft > 0) {
    const randomIndex1 = Math.floor(Math.random() * 8);
    const randomIndex2 = Math.floor(Math.random() * 8);
    const randomIndex3 = Math.floor(Math.random() * 8);
    const slot1= document.getElementById("slot1");
    const slot2= document.getElementById("slot2"); 
    const slot3= document.getElementById("slot3");
    slot1.src= iconsArray[randomIndex1];
    slot2.src= iconsArray[randomIndex2];
    slot3.src= iconsArray[randomIndex3];
    let prize = 0;
    if (randomIndex1 === randomIndex2 && randomIndex2 === randomIndex3 && randomIndex1===2) {
      prize = 8;
      resultWin.style.display = "block";
      document.getElementById("prize").textContent = prize;
      resultLose.style.display = "none";
    }else if (randomIndex1 === randomIndex2 && randomIndex2 === randomIndex3 && randomIndex1===3) {
      prize = 5;
      resultWin.style.display = "block";
      document.getElementById("prize").textContent = prize;
      resultLose.style.display = "none";
    }else if (randomIndex1 === randomIndex2 && randomIndex2 === randomIndex3 && randomIndex1===1) {
      prize = 10;
      resultWin.style.display = "block";
      document.getElementById("prize").textContent = prize;
      resultLose.style.display = "none";
    }else if (randomIndex1 === randomIndex2 && randomIndex2 === randomIndex3 && randomIndex1===4) {
      prize = 20;
      resultWin.style.display = "block";
      document.getElementById("prize").textContent = prize;
      resultLose.style.display = "none";
    }else if (randomIndex1 === randomIndex2 && randomIndex2 === randomIndex3 && randomIndex1===7) {
      prize = 30;
      resultWin.style.display = "block";
      document.getElementById("prize").textContent = prize;
      resultLose.style.display = "none";
    }else if(randomIndex1 === randomIndex2 && randomIndex2 === randomIndex3 && randomIndex1===6) {
      prize = 50;
      resultWin.style.display = "block";
      document.getElementById("prize").textContent = prize;
      resultLose.style.display = "none";
    }else if (randomIndex1 === randomIndex2 && randomIndex2 === randomIndex3 && randomIndex1===5) {
      prize = 80;
      resultWin.style.display = "block";
      document.getElementById("prize").textContent = prize;
      resultLose.style.display = "none";
    }else if (randomIndex1 === randomIndex2 && randomIndex2 === randomIndex3 && randomIndex1===0) {
      prize = 100;
      resultWin.style.display = "block";
      document.getElementById("prize").textContent = prize;
      resultLose.style.display = "none";
    }else {
      prize = 0;
      resultLose.style.display = "block";
      document.getElementById("prize").textContent = prize;
      resultWin.style.display = "none";
    }
    spinsLeft--;
    spinsLeft+= prize;
    document.getElementById("tries").textContent = spinsLeft;
  }else {
      endPage.style.display = "block";
      page2.style.marginTop = 60 + "px";
  }

});
const restart = document.getElementById("restart");
restart.addEventListener('click', ()=> {
  page1.style.display = "block";
  page2.style.display = "none";
  resultLose.style.display = "none"; 
  endPage.style.display = "none"; 
  document.body.style.backgroundImage= "url('https://cdn.dribbble.com/userupload/28262570/file/original-79a084a7b489e31ad7846e6553fbf423.png')";
  document.getElementById("spinsLeft").style.display= "none";
});