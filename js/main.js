function add1 () {
  document.getElementById('number1').innerHTML++
  document.getElementById('price1').innerHTML = Number(document.getElementById('price1').innerHTML) + 300
  document.getElementById('total-price').innerHTML = Number(document.getElementById('total-price').innerHTML) + 300
}
function subs1 () {
  if (document.getElementById('number1').innerHTML > 0) {
    document.getElementById('price1').innerHTML = Number(document.getElementById('price1').innerHTML) - 300
    document.getElementById('number1').innerHTML--
    document.getElementById('total-price').innerHTML = Number(document.getElementById('total-price').innerHTML) - 300
  }
}

function remove1 () {
  var el = document.getElementById('div-01')
  el.remove()
}

function add2 () {
  document.getElementById('number2').innerHTML++
  document.getElementById('price2').innerHTML = Number(document.getElementById('price2').innerHTML) + 350
  document.getElementById('total-price').innerHTML = Number(document.getElementById('total-price').innerHTML) + 350
}

function subs2 () {
  if (document.getElementById('number2').innerHTML > 0) {
    document.getElementById('price2').innerHTML = Number(document.getElementById('price2').innerHTML) - 350
    document.getElementById('number2').innerHTML--
    document.getElementById('total-price').innerHTML = Number(document.getElementById('total-price').innerHTML) - 350
  }
}

function remove2 () {
  var el = document.getElementById('div-02')
  el.remove()
}

function add3 () {
  document.getElementById('number3').innerHTML++
  document.getElementById('price3').innerHTML = Number(document.getElementById('price3').innerHTML) + 400
  document.getElementById('total-price').innerHTML = Number(document.getElementById('total-price').innerHTML) + 400
}

function subs3 () {
  if (document.getElementById('number3').innerHTML > 0) {
    document.getElementById('price3').innerHTML = Number(document.getElementById('price3').innerHTML) - 400
    document.getElementById('number3').innerHTML--
    document.getElementById('total-price').innerHTML = Number(document.getElementById('total-price').innerHTML) - 400
  }
}

function remove3 () {
  var el = document.getElementById('div-03')
  el.remove()
}
