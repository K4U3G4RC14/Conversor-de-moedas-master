const btn = document.getElementById("btn")
const select = document.getElementById("currency-select")


const convet_value = async () => {
    const real_value = document.getElementById("input-real").value
    const text_real = document.getElementById("text-real")
    const other_money = document.getElementById("other-money")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const cripto = data.BTCBRL.high

    text_real.innerHTML = new Intl.NumberFormat('pt-br',
        { style: 'currency', currency: 'brl' }
    ).format(real_value);

    if (real_value === "") {
        alert("Você precisa inserir um valor antes")
    }

    if (select.value === "US$ Dolar Americano") {
        other_money.innerHTML = new Intl.NumberFormat('pt-US',
            { style: 'currency', currency: 'USD' }
        ).format(real_value / dolar);
    }

    if (select.value === "€ Euro") {
        other_money.innerHTML = new Intl.NumberFormat('pt-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(real_value / euro);
    }

    if (select.value === "BTC Bitcoin") {
        other_money.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BTC' }
        ).format(real_value / cripto);
    }

}

const change_currency = () => {
    const currency_text = document.getElementById("currency")
    const flag = document.getElementById("money-flag")


    if (select.value === "US$ Dolar Americano") {
        currency_text.innerHTML = "Dólar Americano"
        flag.src = "./assets/estados-unidos (1) 1.svg"
    }

    if (select.value === "€ Euro") {
        currency_text.innerHTML = "Euro"
        flag.src = "./assets/Design sem nome 1.svg"
    }

    if (select.value === "BTC Bitcoin") {
        currency_text.innerHTML = "BTC"
        flag.src = "./assets/bitcoin.png"
        alert("Alguns valores não são mostrados por serem muitos baixos")
    }

    convet_value()
}


btn.addEventListener('click', convet_value)
select.addEventListener('change', change_currency)