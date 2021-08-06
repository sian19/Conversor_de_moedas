// Código para fazer o cálculo de conversão de moedas//

window.onload = function () {

    const tipoConver = {
        converterD: document.getElementById("converterD"),
        converterP: document.getElementById("converterP")
    }

    tipoConver.converterD.innerHTML = "Conversão de: Real(BRL)"
    tipoConver.converterP.innerHTML = "Para: Real(BRL)"

    let valor = document.getElementById("valor");
    let valorDisplay = document.getElementById("valorDisplay");

    //Função para aparecer na tela o valor digitado//   
    valor.addEventListener("input", () => {
        valorDisplay.innerHTML = `Valor a converter: ${valor.value}`
    })

    //Função para selecionar os tipos de moedas//
    let moeda = document.getElementById("moeda");
    moeda.addEventListener("change", () => {
        tipoConver.converterD.innerHTML = `Conversão de: ${moeda.value}`;
    })

    let moedaConver = document.getElementById("moedaConver");
    moedaConver.addEventListener("change", () => {
        tipoConver.converterP.innerHTML = `Para: ${moedaConver.value}`
    })

    let converter = document.getElementById("converter");

    //Função para converter a moeda//
    converter.addEventListener("click", () => {
        fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                //Função para checar se as moedas são iguais e se existe algum valor digitado//
                function checkMoedas(converter, convertida, valor) {
                    let button = document.getElementById("button");
                    let button2 = document.getElementById("button2");

                    if (converter == convertida || valor <= 0) {
                        alert("Favor coloque um valor maior que zero e não escolha o mesmo tipo de moeda para converter")

                        this.valor.style.border = "1px solid red";
                        button.style.border = "1px solid red";
                        button2.style.border = "1px solid red";
                    }

                    else {
                        this.valor.style.border = "1px solid var(--blue)";
                        button.style.border = "1px solid var(--blue)";
                        button2.style.border = "1px solid var(--blue)";

                        //Códigos para converter os valores passados//
                        let conversao;
                        if (converter == "Dólar(USD)" && convertida == "Real(BRL)") {

                            conversao = valor * data.USDBRL.high;
                            conversao = conversao.toFixed(2);
                            return valor > 1 ? `${valor} dólares = ${conversao} reais` : `${valor} dólar = ${conversao} reais`

                        }

                        else if (converter == "Euro(EUR)" && convertida == "Real(BRL)") {

                            conversao = valor * data.EURBRL.high;
                            conversao = conversao.toFixed(2);
                            return valor > 1 ? `${valor} euros = ${conversao} reais` : `${valor} euro = ${conversao} reais`

                        }

                        else if (converter == "Real(BRL)" && convertida == "Dólar(USD)") {
                            let conversao = valor / data.USDBRL.high;
                            conversao = conversao.toFixed(2);

                            if (conversao < 2 && valor <= 1) {
                                return `${valor} real = ${conversao} dólar`
                            }

                            else if (conversao < 2 && valor > 1) {
                                return `${valor} reais = ${conversao} dólar`
                            }

                            else {
                                return `${valor} reais = ${conversao} dólares`
                            }

                        }

                        else if (converter == "Real(BRL)" && convertida == "Euro(EUR)") {

                            let conversao = valor / data.EURBRL.high;
                            conversao = conversao.toFixed(2);

                            if (conversao < 2 && valor <= 1) {
                                return `${valor} real = ${conversao} euro`;
                            }

                            else if (conversao < 2 && valor > 1) {
                                return `${valor} reais = ${conversao} euro`
                            }

                            else {
                                return `${valor} reais  = ${conversao} euros`
                            }
                        }

                        else if (converter == "Dólar(USD)" && convertida == "Euro(EUR)") {
                            data.EURBRL.USDEUR = "0.85";  //Dólar para euro //

                            let conversao = valor * data.EURBRL.USDEUR;
                            conversao = conversao.toFixed(2);

                            if (conversao < 2 && valor <= 1) {
                                return `${valor} dólar = ${conversao} euro`
                            }

                            else if (conversao < 2 && valor > 1) {
                                return `${valor} dólares = ${conversao} euro`
                            }

                            else {
                                return `${valor} dólares = ${conversao} euros`
                            }
                        }

                        else {
                            data.USDBRL.EURUSD = "1.18"; //Euro pra dólar //

                            let conversao = valor * data.USDBRL.EURUSD;
                            conversao = conversao.toFixed(2);

                            if (conversao < 2 && valor <= 1) {
                                return `${valor} euro = ${conversao} dólar`
                            }

                            else if (conversao < 2 && valor > 1) {
                                return `${valor} euros = ${conversao} dólar`;
                            }

                            else {
                                return `${valor} euros = ${conversao} dólares`;
                            }

                        }


                    }
                }

                let result = checkMoedas(moeda.value, moedaConver.value, valor.value);

                if (result != null) {
                    document.getElementById("resultado").innerHTML = result
                }



            })

    })

}


