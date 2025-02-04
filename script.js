const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const convertValues = async () => {
    const inputReais = document.getElementById("input-real").value;
    const realValueText = document.getElementById("real-value-text");
    const currencyValueText = document.getElementById("currency-value-text");

    
    if (!inputReais || isNaN(inputReais)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json());
    console.log(data);

    const dolar = data.USDBRL.high;
    const euro = data.EURBRL.high;
    const btc = data.BTCBRL.high;

    
    realValueText.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais);

   
    if (select.value === "US$ Dólar americano") {
        currencyValueText.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar);
    }

    if (select.value === "€ Euro") {
        currencyValueText.textContent = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro);
    }

    if (select.value === "₿ Bitcoin") {
        currencyValueText.textContent = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / btc);
    }
};

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img");

    if (select.value === "US$ Dólar americano") {
        currencyName.textContent = "Dólar americano";
        currencyImg.src = "./assets/estados-unidos (1) 1.png";
    }

    if (select.value === "€ Euro") {
        currencyName.textContent = "Euro";
        currencyImg.src = "./assets/euro.png";
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.textContent = "Bitcoin";
        currencyImg.src = "./assets/bitcoin 1.png";
    }

   
    convertValues();
};


button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);

//  CurrencyDestination.addEventListener("change", changeCurrency) //ação de mudar o nome da moeda de destino
//  convertButton.addEventListener("click", convertValues) //ação de click no butão


// const convertButton = document.querySelector(".button-Roxo");
// const CurrencyDestination = document.querySelector(".MoedaDestino");
// const currencyValueToConvert = document.querySelector(".moedaRealvalor");
// const currencyValueToConverted = document.querySelector(".moedaconvertidavalor");
// const currencyname = document.querySelector(".moedaConvertida");
// const currencyImg = document.querySelector(".eua");

// async function convertValues() {
//   const valueInput = document.querySelector(".valor").value;

//   /// Realiza uma solicitação assíncrona para obter dados de câmbio
//   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json());
  
//   // Extrai as taxas de câmbio do objeto de dados
//   const dolar = data.USDBRL.high;
//   const euro = data.EURBRL.high;
//   const bitcoin = data.BTCBRL.high;

//   // Converte o valor de entrada com base na moeda de destino selecionada
//   if (CurrencyDestination.value == "BRL") {
//     currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
//       style: "currency",
//       currency: "BRL"
//     }).format(valueInput);
//   }

//   if (CurrencyDestination.value == "US$") {
//     currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD"
//     }).format(valueInput / dolar);
//   }

//   if (CurrencyDestination.value == "EUR") {
//     currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
//       style: "currency",
//       currency: "EUR"
//     }).format(valueInput / euro);
//   }

//   if (CurrencyDestination.value == "BTC") {
//     currencyValueToConverted.innerHTML = new Intl.NumberFormat("bitcoin", {
//       style: "currency",
//       currency: "BTC"
//     }).format(valueInput / bitcoin);
//   }

//   // Atualiza o valor convertido e o valor de entrada exibido na página
//   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL"
//   }).format(valueInput);
// }

// function changeCurrency() {
//   // Atualiza o nome da moeda e a imagem com base na moeda de destino selecionada
//   if (CurrencyDestination.value == "US$") {
//     currencyname.innerHTML = "Dólar americano";
//     currencyImg.src = "./assets/estados-unidos (1) 1.png";
//   }

//   if (CurrencyDestination.value == "EUR") {
//     currencyname.innerHTML = "Euro";
//     currencyImg.src = "./assets/euro.png";
//   }

//   if (CurrencyDestination.value == "BTC") {
//     currencyname.innerHTML = "Bitcoin";
//     currencyImg.src = "./assets/bitcoin 1.png";
//   }

//   if (CurrencyDestination.value == "BRL") {
//     currencyname.innerHTML = "Real";
//     currencyImg.src = "./assets/brasil 2.png";
//   }

//   // Chama a função de conversão para atualizar os valores na página
//   convertValues();
// }

// // Adiciona listeners para os eventos de mudança de moeda e clique no botão de conversão
// CurrencyDestination.addEventListener("change", changeCurrency);
// convertButton.addEventListener("click", convertValues);
