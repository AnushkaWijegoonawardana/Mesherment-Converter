//Hidden The Visibility Of the cards
document.getElementById("output-cards").style.visibility = "hidden";
document.getElementById("output-cards-1").style.visibility = "hidden";

// ========== Weight Converter Functions ==========
//Gram Input
document.getElementById("gramInput").addEventListener("input", function(e) {
  const gramValue = e.target.value;

  document.getElementById("output-cards").style.visibility = "visible";

  document.getElementById("gramOutpu").innerHTML = gramValue;
  document.getElementById("kgOutpu").innerHTML = gramValue / 1000;
  document.getElementById("toneOutpu").innerHTML = gramValue / 907184.74;
  document.getElementById("poundOutpu").innerHTML = gramValue / 453.592;

  document.getElementById("kgInput").value = "Enter kg...";
  document.getElementById("toneInput").value = "Enter tone...";
  document.getElementById("poundInput").value = "Enter pound...";
});

//kg Input
document.getElementById("kgInput").addEventListener("input", function(e) {
  const kgValue = e.target.value;

  document.getElementById("output-cards").style.visibility = "visible";

  document.getElementById("gramOutpu").innerHTML = kgValue * 1000;
  document.getElementById("kgOutpu").innerHTML = kgValue;
  document.getElementById("toneOutpu").innerHTML = kgValue / 907.185;
  document.getElementById("poundOutpu").innerHTML = kgValue * 2.205;

  document.getElementById("gramInput").value = "Enter grams...";
  document.getElementById("toneInput").value = "Enter tone...";
  document.getElementById("poundInput").value = "Enter pound...";
});

//Tone Input
document.getElementById("toneInput").addEventListener("input", function(e) {
  const toneValue = e.target.value;

  document.getElementById("output-cards").style.visibility = "visible";

  document.getElementById("gramOutpu").innerHTML = toneValue * 907184.74;
  document.getElementById("kgOutpu").innerHTML = toneValue * 907.185;
  document.getElementById("toneOutpu").innerHTML = toneValue;
  document.getElementById("poundOutpu").innerHTML = toneValue * 2000;

  document.getElementById("gramInput").value = "Enter grams...";
  document.getElementById("kgInput").value = "Enter kg...";
  document.getElementById("poundInput").value = "Enter pound...";
});

//Pounds Input
document.getElementById("poundInput").addEventListener("input", function(e) {
  const poundValue = e.target.value;

  document.getElementById("output-cards").style.visibility = "visible";

  document.getElementById("gramOutpu").innerHTML = poundValue * 453.592;
  document.getElementById("kgOutpu").innerHTML = poundValue * 2.205;
  document.getElementById("toneOutpu").innerHTML = poundValue / 2000;
  document.getElementById("poundOutpu").innerHTML = poundValue;

  document.getElementById("gramInput").value = "Enter grams...";
  document.getElementById("kgInput").value = "Enter kg...";
  document.getElementById("toneInput").value = "Enter tone...";
});
// ========== Weight Converter Functions ==========

// ========== Length Converter Functions ==========
//cm Input
document.getElementById("cmInput").addEventListener("input", function(e) {
  const cmValue = e.target.value;

  document.getElementById("output-cards-1").style.visibility = "visible";

  document.getElementById("cmOutpu").innerHTML = cmValue;
  document.getElementById("meterOutpu").innerHTML = cmValue / 100;
  document.getElementById("kmOutpu").innerHTML = cmValue / 100000;
  document.getElementById("mileOutpu").innerHTML = cmValue / 160934.4;
  document.getElementById("footOutpu").innerHTML = cmValue / 30.48;

  document.getElementById("meterInput").value = "Enter meter...";
  document.getElementById("kmInput").value = "Enter km...";
  document.getElementById("mileInput").value = "Enter mile...";
  document.getElementById("footInput").value = "Enter foot...";
});

//meter Input
document.getElementById("meterInput").addEventListener("input", function(e) {
  const mValue = e.target.value;

  document.getElementById("output-cards-1").style.visibility = "visible";

  document.getElementById("cmOutpu").innerHTML = mValue * 100;
  document.getElementById("meterOutpu").innerHTML = mValue;
  document.getElementById("kmOutpu").innerHTML = mValue / 1000;
  document.getElementById("mileOutpu").innerHTML = mValue / 1609.344;
  document.getElementById("footOutpu").innerHTML = mValue * 3.281;

  document.getElementById("cmInput").value = "Enter cm...";
  document.getElementById("kmInput").value = "Enter km...";
  document.getElementById("mileInput").value = "Enter mile...";
  document.getElementById("footInput").value = "Enter foot...";
});

//km Input
document.getElementById("kmInput").addEventListener("input", function(e) {
  const kmValue = e.target.value;

  document.getElementById("output-cards-1").style.visibility = "visible";

  document.getElementById("cmOutpu").innerHTML = kmValue * 100000;
  document.getElementById("meterOutpu").innerHTML = kmValue * 1000;
  document.getElementById("kmOutpu").innerHTML = kmValue;
  document.getElementById("mileOutpu").innerHTML = kmValue / 1.609;
  document.getElementById("footOutpu").innerHTML = kmValue * 3280.84;

  document.getElementById("cmInput").value = "Enter cm...";
  document.getElementById("meterInput").value = "Enter meter...";
  document.getElementById("mileInput").value = "Enter mile...";
  document.getElementById("footInput").value = "Enter foot...";
});

//mile Input
document.getElementById("mileInput").addEventListener("input", function(e) {
  const mileValue = e.target.value;

  document.getElementById("output-cards-1").style.visibility = "visible";

  document.getElementById("cmOutpu").innerHTML = mileValue * 160934.4;
  document.getElementById("meterOutpu").innerHTML = mileValue * 1609.344;
  document.getElementById("kmOutpu").innerHTML = mileValue * 1.609;
  document.getElementById("mileOutpu").innerHTML = mileValue;
  document.getElementById("footOutpu").innerHTML = mileValue * 5280;

  document.getElementById("cmInput").value = "Enter cm...";
  document.getElementById("meterInput").value = "Enter meter...";
  document.getElementById("kmInput").value = "Enter km...";
  document.getElementById("footInput").value = "Enter foot...";
});

//foot Input
document.getElementById("footInput").addEventListener("input", function(e) {
  const footValue = e.target.value;

  document.getElementById("output-cards-1").style.visibility = "visible";

  document.getElementById("cmOutpu").innerHTML = footValue * 30.48;
  document.getElementById("meterOutpu").innerHTML = footValue / 3.281;
  document.getElementById("kmOutpu").innerHTML = footValue / 3280.84;
  document.getElementById("mileOutpu").innerHTML = footValue / 5280;
  document.getElementById("footOutpu").innerHTML = footValue;

  document.getElementById("cmInput").value = "Enter cm...";
  document.getElementById("meterInput").value = "Enter meter...";
  document.getElementById("kmInput").value = "Enter km...";
  document.getElementById("mileInput").value = "Enter mile...";
});
// ========== Length Converter Functions ==========

// ========== Show the Tab For the Menu Click ==========
function openTab(evt, tabName) {
  var i, tabContent, tabLink;

  tabContent = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLink = document.getElementsByClassName("menu-item");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(" menu-active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " menu-active";
}

document.getElementById("defaultTab").click();
// ========== Show the Tab For the Menu Click ==========
