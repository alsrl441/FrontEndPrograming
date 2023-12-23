// ====================================================================
let orderNormalRamyeon = '<div class="addedMenu"><div class="addedMenuName">라면</div> ₩2,500</div><div class="controlAmount"><div class="minus" id="minusNR">-</div><div class="amount" id="amountNR">1</div><div class="plus" id="plusNR">+</div></div>';
let orderCheeseRamyeon = '<div class="addedMenu"><div class="addedMenuName">치즈라면+밥</div> ₩3,500</div><div class="controlAmount"><div class="minus" id="minusCR">-</div><div class="amount" id="amountCR">1</div><div class="plus" id="plusCR">+</div></div>';
let orderDumplingRamyeon = '<div class="addedMenu"><div class="addedMenuName">만두라면+밥</div> ₩3,500</div><div class="controlAmount"><div class="minus" id="minusDR">-</div><div class="amount" id="amountDR">1</div><div class="plus" id="plusDR">+</div></div>';
let orderJaeyookDeopbap = '<div class="addedMenu"><div class="addedMenuName">제육덮밥</div> ₩4,500</div><div class="controlAmount"><div class="minus" id="minusJD">-</div><div class="amount" id="amountJD">1</div><div class="plus" id="plusJD">+</div></div>';
let orderSpamDeopbap = '<div class="addedMenu"><div class="addedMenuName">스팸마요덮밥</div> ₩4,500</div><div class="controlAmount"><div class="minus" id="minusSD">-</div><div class="amount" id="amountSD">1</div><div class="plus" id="plusSD">+</div></div>';
let orderChickenDeopbap = '<div class="addedMenu"><div class="addedMenuName">치킨톡톡덮밥</div> ₩4,500</div><div class="controlAmount"><div class="minus" id="minusCD">-</div><div class="amount" id="amountCD">1</div><div class="plus" id="plusCD">+</div></div>';
let orderNormalPorkCutlet = '<div class="addedMenu"><div class="addedMenuName">돈까스</div> ₩4,500</div><div class="controlAmount"><div class="minus" id="minusNP">-</div><div class="amount" id="amountNP">1</div><div class="plus" id="plusNP">+</div></div>';
let orderNoodleAndPorkCutlet = '<div class="addedMenu"><div class="addedMenuName">쟁반비빔국수+돈까스</div> ₩5,500</div><div class="controlAmount"><div class="minus" id="minusNnP">-</div><div class="amount" id="amountNnP">1</div><div class="plus" id="plusNnP">+</div></div>';
let orderJaeyookAndPorkCutlet = '<div class="addedMenu"><div class="addedMenuName">제돈세트</div> ₩6,000</div><div class="controlAmount"><div class="minus" id="minusJnP">-</div><div class="amount" id="amountJnP">1</div><div class="plus" id="plusJnP">+</div></div>';
let orderKimchijjigae = '<div class="addedMenu"><div class="addedMenuName">돈김치찌개+달걀후라이</div> ₩5,500</div><div class="controlAmount"><div class="minus" id="minusK">-</div><div class="amount" id="amountK">1</div><div class="plus" id="plusK">+</div></div>';
let sum = 0;
let orderArray = [];
let amtNR, amtCR, amtDR,amtJD, amtSD, amtCD, amtNP, amtNnP, amtJnP, amtK;
let oml = "";
let total = 0;
let input = 0;
let bodyContent;
let printContent;

// ====================================================================
function clickRamyeon() {
    $(".menu").hide();
    $("#normalRamyeon").show();
    $("#cheeseRamyeon").show();
    $("#dumplingRamyeon").show();
}
function clickDeopbap() {
    $(".menu").hide();
    $("#jaeyookDeopbap").show();
    $("#spamDeopbap").show();
    $("#chickenDeopbap").show();
}
function clickPorkCutlet() {
    $(".menu").hide();
    $("#normalPorkCutlet").show();
    $("#noodleAndPorkCutlet").show();
    $("#jaeyookAndPorkCutlet").show();
}
function clickStew() {
    $(".menu").hide();
    $("#kimchijjigae").show();
}

function mouseOverRed() {
    $(this).css("background-color", "#aa0000");
}
function mouseOutRed() {
    $(this).css("background-color", "#ff0000");
}

function mouseOverGray() {
    $(this).css("background-color", "#bbbbbb");
}
function mouseOutGray() {
    $(this).css("background-color", "#dddddd");
}

function clickNormalRamyeon() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "normalRamyeon") {
            b = false;
            break;
        }
    }
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderNormalRamyeon);
        amtNR = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusNR").click(clickPlusNR);
        $("#minusNR").click(clickMinusNR);
        sum += 2500;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("normalRamyeon");
    }
}
function clickCheeseRamyeon() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "cheeseRamyeon") {
            b = false;
            break;
        }
    }
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderCheeseRamyeon);
        amtCR = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusCR").click(clickPlusCR);
        $("#minusCR").click(clickMinusCR);
        sum += 3500;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("cheeseRamyeon");
    }
}
function clickDumplingRamyeon() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "dumplingRamyeon") {
            b = false;
            break;
        }
    }
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderDumplingRamyeon);
        amtDR = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusDR").click(clickPlusDR);
        $("#minusDR").click(clickMinusDR);
        sum += 3500;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("dumplingRamyeon");
    }
}
function clickJaeyookDeopbap() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "jaeyookDeopbap") {
            b = false;
            break;
        }
    }
    console.log(1);
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderJaeyookDeopbap);
        amtJD = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusJD").click(clickPlusJD);
        $("#minusJD").click(clickMinusJD);
        sum += 4500;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("jaeyookDeopbap");
    }
}
function clickSpamDeopbap() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "spamDeopbap") {
            b = false;
            break;
        }
    }
    console.log(1);
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderSpamDeopbap);
        amtSD = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusSD").click(clickPlusSD);
        $("#minusSD").click(clickMinusSD);
        sum += 4500;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("spamDeopbap");
    }
}
function clickChickenDeopbap() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "chickenDeopbap") {
            b = false;
            break;
        }
    }
    console.log(1);
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderChickenDeopbap);
        amtCD = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusCD").click(clickPlusCD);
        $("#minusCD").click(clickMinusCD);
        sum += 4500;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("chickenDeopbap");
    }
}
function clickNormalPorkCutlet() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "normalPorkCutlet") {
            b = false;
            break;
        }
    }
    console.log(1);
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderNormalPorkCutlet);
        amtNP = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusNP").click(clickPlusNP);
        $("#minusNP").click(clickMinusNP);
        sum += 4500;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("normalPorkCutlet");
    }
}
function clickNoodleAndPorkCutlet() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "noodleAndPorkCutlet") {
            b = false;
            break;
        }
    }
    console.log(1);
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderNoodleAndPorkCutlet);
        amtNnP = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusNnP").click(clickPlusNnP);
        $("#minusNnP").click(clickMinusNnP);
        sum += 5500;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("noodleAndPorkCutlet");
    }
}
function clickJaeyookAndPorkCutlet() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "jaeyookAndPorkCutlet") {
            b = false;
            break;
        }
    }
    console.log(1);
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderJaeyookAndPorkCutlet);
        amtJnP = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusJnP").click(clickPlusJnP);
        $("#minusJnP").click(clickMinusJnP);
        sum += 6000;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("jaeyookAndPorkCutlet");
    }
}
function clickKimchijjigae() {
    let b = true;
    for(let i = 0; i < orderArray.length; i++) {
        if(orderArray[i] == "kimchijjigae") {
            b = false;
            break;
        }
    }
    console.log(1);
    if(b) {
        $(`#menu${orderArray.length + 1}`).html(orderKimchijjigae);
        amtK = 1;
        $(".plus").hover(mouseOverGray, mouseOutGray);
        $(".minus").hover(mouseOverGray, mouseOutGray);
        $("#plusK").click(clickPlusK);
        $("#minusK").click(clickMinusK);
        sum += 5500;
        $("#sumPrice").html(`₩${sum}`);
        orderArray.push("kimchijjigae");
    }
}

function clickPlusNR() {
    amtNR++;
    $("#amountNR").html(amtNR);
    sum += 2500;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusNR() {
    if(amtNR > 0) {
        amtNR--;
        sum -= 2500;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountNR").html(amtNR);
    
}
function clickPlusCR() {
    amtCR++;
    $("#amountCR").html(amtCR);
    sum += 3500;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusCR() {
    if(amtCR > 0) {
        amtCR--;
        sum -= 3500;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountCR").html(amtCR);
}
function clickPlusDR() {
    amtDR++;
    $("#amountDR").html(amtDR);
    sum += 3500;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusDR() {
    if(amtDR > 0) {
        amtDR--;
        sum -= 3500;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountDR").html(amtDR);
}
function clickPlusJD() {
    amtJD++;
    $("#amountJD").html(amtJD);
    sum += 4500;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusJD() {
    if(amtJD > 0) {
        amtJD--;
        sum -= 4500;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountJD").html(amtJD);
}
function clickPlusSD() {
    amtSD++;
    $("#amountSD").html(amtSD);
    sum += 4500;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusSD() {
    if(amtSD > 0) {
        amtSD--;
        sum -= 4500;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountSD").html(amtSD);
}
function clickPlusCD() {
    amtCD++;
    $("#amountCD").html(amtCD);
    sum += 4500;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusCD() {
    if(amtCD > 0) {
        amtCD--;
        sum -= 4500;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountCD").html(amtCD);
}
function clickPlusNP() {
    amtNP++;
    $("#amountNP").html(amtNP);
    sum += 4500;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusNP() {
    if(amtNP > 0) {
        amtNP--;
        sum -= 4500;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountNP").html(amtNP);
}
function clickPlusNnP() {
    amtNnP++;
    $("#amountNnP").html(amtNnP);
    sum += 5500;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusNnP() {
    if(amtNnP > 0) {
        amtNnP--;
        sum -= 5500;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountNnP").html(amtNnP);
}
function clickPlusJnP() {
    amtJnP++;
    $("#amountJnP").html(amtJnP);
    sum += 6000;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusJnP() {
    if(amtJnP > 0) {
        amtJnP--;
        sum -= 6000;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountJnP").html(amtJnP);
}
function clickPlusK() {
    amtK++;
    $("#amountK").html(amtK);
    sum += 5500;
    $("#sumPrice").html(`₩${sum}`);
}
function clickMinusK() {
    if(amtK > 0) {
        amtK--;
        sum -= 5500;
        $("#sumPrice").html(`₩${sum}`);
    }
    $("#amountK").html(amtK);
}

function clickPay() {
    orderedMenuList();
    if(total != 0) {
        input = window.prompt("금액을 입력해주세요.", "0");
        checkInput(input);
    }
    
    orderArray = [];
    oml = "";
    sum = 0;
    total = 0;
    $("#sumPrice").html(`₩${sum}`);
    $(".addedMenu").remove();
    $(".controlAmount").remove();
}

function checkInput(input) {
    let change = input - total;
    if(total == input) {
        window.alert("결제가 완료되었습니다 이용해주셔서 감사합니다.");
        $("#total").html(`<div style="font-size: x-large;"><div style="text-align: left; display: inline-block;">총액:&nbsp</div><div style="display: inline-block;">₩${total}</div></div>`);
        $("#orderedMenuList").html(oml);
        $(".receipt").show();
    }
    else if(total < input) {
        window.alert(`결제가 완료되었습니다 이용해주셔서 감사합니다.\n거스름돈: ${change}원`);
        $("#total").html(`<div style="font-size: x-large;"><div style="text-align: left; display: inline-block;">총액:&nbsp</div><div style="display: inline-block;">₩${total}</div></div>`);
        $("#orderedMenuList").html(oml);
        $(".receipt").show();
    }
    else {
        window.alert("금액이 부족합니다.")
        
    }
    
}

function clickCancel() {
    orderArray = [];
    sum = 0;
    $("#sumPrice").html(`₩${sum}`);
    $(".addedMenu").remove();
    $(".controlAmount").remove();
    
}

function orderedMenuList() {
    for(let i = 0; i < orderArray.length; i++) {
        let name;
        let price = 0;
        let amount = 0;
        let pxn = 0;
        switch(orderArray[i]) {
            case "normalRamyeon":
                name = "라면"
                price = 2500;
                amount = amtNR;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;
            case "cheeseRamyeon":
                name = "치즈라면+밥"
                price = 3500;
                amount = amtCR;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;
            case "dumplingRamyeon":
                name = "만두라면+밥"
                price = 3500;
                amount = amtDR;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;
            case "jaeyookDeopbap":
                name = "제육덮밥"
                price = 4500;
                amount = amtJD;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;
            case "spamDeopbap":
                name = "스팸마요덮밥"
                price = 4500;
                amount = amtSD;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;
            case "chickenDeopbap":
                name = "치킨톡톡덮밥"
                price = 4500;
                amount = amtCD;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;
            case "normalPorkCutlet":
                name = "돈까스"
                price = 4500;
                amount = amtNP;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;
            case "noodleAndPorkCutlet":
                name = "쟁반비빔국수+돈까스"
                price = 5500;
                amount = amtNnP;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;
            case "jaeyookAndPorkCutlet":
                name = "제돈세트"
                price = 6000;
                amount = amtJnP;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;
            case "kimchijjigae":
                name = "돈김치찌개+달걀후라이"
                price = 5500;
                amount = amtK;
                pxn = price * amount;
                total += pxn;
                oml += `<div id="oml" style="text-align: left; padding-left: 70px; padding-right: 70px;"><div style="display: inline-block; width: 34%" class="n">${name}</div><div style="display: inline-block; width:22%;" class="p">${price}</div><div style="display: inline-block; width: 22%;" class="a">${amount}</div><div style="display: inline-block; width: 22%;" class="pxn">${pxn}</div></div>`;
                break;

        }
    }
}

function hideRecipt() {
    $(".receipt").hide();
    
}

function clickPrint() {
    $("#payBox").css("margin-left", "30%")
    $("#payBox").css("width", "40%")
    $("#payBox").css("margin-right", "30%")
    bodyContent = document.querySelector("#body");
    printContent = document.querySelector("#printArea");
    $("body").html(printContent);
    $(".line").html("----------------------------------------------------------------");
    $("#closeBox").hide();
    $("#lastLine").hide();
    $("#print").hide();
    window.print();
    window.location.reload();
}

// ====================================================================
$(document).ready(function() {
    $(".receipt").hide();
    $(".menu").hide();
    $("#normalRamyeon").show();
    $("#cheeseRamyeon").show();
    $("#dumplingRamyeon").show();
    $("#ramyeon").click(clickRamyeon);
    $("#deopbap").click(clickDeopbap);
    $("#porkCutlet").click(clickPorkCutlet);
    $("#stew").click(clickStew);
    
    $("#ramyeon").hover(mouseOverRed, mouseOutRed);
    $("#deopbap").hover(mouseOverRed, mouseOutRed);
    $("#porkCutlet").hover(mouseOverRed, mouseOutRed);
    $("#stew").hover(mouseOverRed, mouseOutRed);
    $("#pay").hover(mouseOverRed, mouseOutRed);
    $("#cancel").hover(mouseOverRed, mouseOutRed);
    
    $("#normalRamyeon").click(clickNormalRamyeon);
    $("#cheeseRamyeon").click(clickCheeseRamyeon);
    $("#dumplingRamyeon").click(clickDumplingRamyeon);
    $("#jaeyookDeopbap").click(clickJaeyookDeopbap);
    $("#spamDeopbap").click(clickSpamDeopbap);
    $("#chickenDeopbap").click(clickChickenDeopbap);
    $("#normalPorkCutlet").click(clickNormalPorkCutlet);
    $("#noodleAndPorkCutlet").click(clickNoodleAndPorkCutlet);
    $("#jaeyookAndPorkCutlet").click(clickJaeyookAndPorkCutlet);
    $("#kimchijjigae").click(clickKimchijjigae);
    
    $("#pay").click(clickPay);
    $("#cancel").click(clickCancel);
    
    $("#print").click(clickPrint);
    $("#close").click(hideRecipt);
})