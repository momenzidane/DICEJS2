function rand() {
    let rande = Math.floor(1 + Math.random() * 6);
    return rande;
}
let intval;
let a = 0;
let b = 0;
let chose = "p1";


function insert() {
    document.getElementById('p1').innerHTML = a;
    document.getElementById('p2').innerHTML = b;
}
    
function Roll() {
    let matches = document.querySelector("#imgDise");
    ss = parseInt(rand());
    
    
    matches.setAttribute("src", `${ss}.png`);
  
    if (ss == 1) {
        if (chose == "p1") {
            chose = "p2";
        } else {
            chose = "p1";
        }
    } else {
        if (chose == "p1") {
            a += ss;
        } else {
            b += ss;
        }
        if (a >= 30 || b >= 30) {
            if (b >= 30) {
                a = 0;
                b = 0;
                document.getElementById('win').innerHTML = 'wine is: Fadi';
                document.getElementById('d').innerHTML = `
                <div class="pyro">
                  <div class="before"></div>
                  <div class="after"></div>
                </div>
                `;
                const myTimeout = setTimeout(myGreeting, 3000);
                
            } if (a >= 30) {
                b = 0;
                a = 0;

                document.getElementById('win').innerHTML = 'wine is: Momen';
                document.getElementById('d').innerHTML = `
                <div class="pyro">
                  <div class="before"></div>
                  <div class="after"></div>
                </div>
                `;
                const myTimeout = setTimeout(myGreeting, 3000);
            }
        }

    }
}
function myGreeting() {
    location.reload();
}
function fun() {
    if (chose == "p1") {
        chose = "p2";
    } else {
        chose = "p1";
    }
}



function btn() {
    Roll();
    insert();
    
}
function relode() {
    location.reload();
}