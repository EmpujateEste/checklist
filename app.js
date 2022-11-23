var num = 40;
var lef = 0;
dir = true;

var hmen = document.querySelector(".hmenu");

document.querySelector(".menu-btn").addEventListener("click", () => {
    console.log("ran");
    slides = document.querySelectorAll(".burg");
    var interval = setInterval(function(){
        if((num <= 41 && num > 24) && dir){
            slides[0].style.width = num + "px";
            slides[2].style.width = num + "px";
            slides[0].style.lef = lef + "px";
            slides[2].style.lef = lef + "px";
            num -= 0.5;
            lef += 0.25;
            console.log(num);
            if(num == 25){
                dir = false;
                clearInterval(interval);
            }
        }
        else if((num >=24 && num < 41) && !dir){
            slides[0].style.width = num + "px";
            slides[2].style.width = num + "px";
            slides[0].style.lef = lef + "px";
            slides[2].style.lef = lef + "px";
            num += 0.5;
            lef -= 0.25;
            console.log(num);
            if(num == 40){
                dir = true;
                clearInterval(interval);
            }
        }
    }, 25);
});

serials = ["None", "N00501", "N00502", "P00104", "A00008", "P91240", "P92557 <br>NSN : 6140-01-490-5387", "P91262", "P92814", "P90953", "P95100", "None", "N03102", "P00519", "P70812 <br>NSN : 5940-01-492-7238", "P70791 <br>NSN : 6130-01-606-3739", "P92557 <br>NSN : 6140-01-490-5387", "P90007", "P92048", "A91054", "A10011", "P90122", "P91162", "P03512", "P00500", "P02306", "P90011 <br>NSN : 6150-01-535-2008", "P10012", "P11012", "P90900", "P90901", "P90008", "P90300", "P90301", "P00003", "P70810", "P70810U", "P0007", "P95205", "P90010", "P90306", "P90302", "A90005", "A90006", "P91176", "P91177", "P03150", "P10002", "P12013", "P92716", "P400302", "P40300", "P40301", "P40203", "A90204", "P90105"]

descriptions = ["Pelican Storm Case IM2720 ( Small ) <br>System : ____ Node ", "VMAX Sensor <br>Serial Number : ", "VMAX Power Amplifier Serial Number : ","Antenna , GPS ( Sensor ) ", "Power Adapter , VMAX <br>Serial Number : ", "AC Power Supply ( 28V ) , with 150W Power Cord ", "BB - 2557 Battery for VMAX ", "\" Y \" Power Cable , 28VDC ( Battery to Power Adapter ) ", "Cable , VMAX Broadcast with Mast Adapter ", "Transit Case custom foam for VMAX ", "Wave Relay MPU - 5 Radio With S - Band Module ( Attached to MPU5 ) <br>Serial Number : ", "Pelican Storm Case IM2950 ( Large ) <br>System : ____ Node", "Remote Antenna - X2 , RAX2 <br>Serial Number : ", "RH519 , Antenna DF Whip 6 \" ", "Charging Adapter , BB - 2557 , Green Shoe ", "Battery Charger ( Individual Charger , Medium Rate ) ", "BB-2557 Battery for VMAX", "Vehicle Power Adapter, DC to DC (Lind)", "Hard Drive, Rugged, 2TB (With USB to USB Cable)", "Wave Relay Power Adapter", "Power Cord 12 VDC Cigarette Lighter", "Ear Piece, 3.5mm Straight Plug, 42\" Clear Tube", "\"Y\" Power Cable, 14 VDC (1 Battery to 2 Connectors)", "A-Band Antenna, 30-512 MHz", "B-Band Antenna, 500-3000 MHz", "C-Band Antenna, 2300-6000 MHz", "Cable, Vehicle Power Adapter to Tablet", "Cable, Cigarette Lighter", "Cable, Mil Battery", "VHF Antenna, Fox Hunt Loop", "UHF Antenna, Fox Hunt Loop", "TNC to BNC Antenna Adapter (On UHF Antenna)", "Tablet, Panasonic, Toughpad with Slim Battery & Pen", "Tablet Battery, Long-Life, Panasonic", "Dust Caps, BNC, Non-Shorting", "Charger Module, Wave Relay Battery", "Charger Module, Wave Relay Battery, International Plug Adapters<br>(European, British, Australia)", "DF Antenna Whip, 12\"", "Antenna, Wave Relay, RF", "AC Power Supply, VROD with Power Cord", "Charger, Panasonic Tablet with Power Cord", "Charger, Individual Tablet Battery", "Tether Cable, Single, Rapid Mate To USB (VROD to Tablet)", "Tether Cable, Rapid Mate to USB & Ethernet (VROD to Tablet & MPU5)", "RAX Cable, 1.5m (4ft)", "RAX Cable, 5M (15FT)", "Antenna Band A-Low, 30-108MHz Harris", "Wave Relay Audi Cable", "Wave Relay Data Cable", "Wave Relay Battery", "Wave Relay Manual", "VMAX User Guide (CD-ROM)", "VMAX Quick Start Guide", "Computer Based Training CD", "Backpack Assembly, VMAX Tactical Tailor with GUI Pounch", "Antenna Mast"]

qs = ["1", "1", "1", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "10", "1", "1", "2", "1", "1", "1", "1", "1", "1", "2", "2", "2", "1", "1", "1", "1", "1", "1", "1", "2", "10", "1", "1", "10", "3", "1", "1", "1", "1", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "2"]

window.onload = function(){

    var cookie = document.cookie;

    if(!cookie){
        document.cookie = "0"
    }

    if(window.location.pathname == "/max.html"){

    var title = document.querySelector(".item");
    title.innerHTML = descriptions[+document.cookie];

    var id = document.querySelector(".id");
    id.innerHTML = serials[+document.cookie];

    var num = document.querySelector(".num");
    var q = document.querySelector(".q");
    num.innerHTML = String(+document.cookie + 1);
    q.innerHTML = "Quantity: " + qs[+document.cookie];

    }
};

var left = document.querySelector(".left");
var right = document.querySelector(".right");

function funciona(d) {
    console.log(d);

    var title = document.querySelector(".item");
    var id = document.querySelector(".id");
    var num = document.querySelector(".num");
    var q = document.querySelector(".q");

    if(d == 2 || ((+document.cookie == 0) && d == 0) || ((+document.cookie == (serials.length - 1)) && d == 1)){
            title.innerHTML = descriptions[+document.cookie];
            id.innerHTML = serials[+document.cookie];
            num.innerHTML = String(+document.cookie + 1);
            q.innerHTML = "Quantity: " + qs[+document.cookie];
    }else{
        if(d == 0){
            document.cookie = String(+document.cookie - 1);
        }else{
            document.cookie = String(+document.cookie + 1);
        }
            title.innerHTML = descriptions[+document.cookie];
            id.innerHTML = serials[+document.cookie];
            num.innerHTML = String(+document.cookie + 1);
            q.innerHTML = "Quantity: " + qs[+document.cookie];
    }
};

funciona(2);

left.addEventListener("click", () => {funciona(0)});
right.addEventListener("click", () => {funciona(1)});
