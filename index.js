const btn=document.getElementById("btn");
const coun=document.getElementById("con_ip");

coun.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click(); 
  }
});


btn.addEventListener("click",()=>{
    let countryname =coun.value;
    let finalUrl= `https://restcountries.com/v3.1/name/${countryname}?fullText=true`;
    console.log(finalUrl);
    fetch(finalUrl)
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data[0]);
            // console.log(data[0].capital[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(
            //     Object.values(data[0].languages).toString().split(",").join(", ")
            // );
            result.innerHTML= `
                <img src="${data[0].flags.svg}" class="flag-img">
                <h2>${data[0].name.common}</h2>
                <div class="content">
                    <div class="data">
                        <h4>Capital:</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                <div>
                <div class="content">
                    <div class="data">
                        <h4>Continent:</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="data">
                        <h4>Population:</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="data">
                        <h4>Currency:</h4>
                        <span>${
                        data[0].currencies[Object.keys(data[0].currencies)].name
                        } - ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="data">
                        <h4>Common Languages:</h4>
                        <span>${Object.values(data[0].languages)
                        .toString()
                        .split(",")
                        .join(", ")}</span>
                    </div>
                </div>
            `;
        })
        .catch(() => {
            coun.innerHTML="";
            alert("Please enter a valid country name.");
        })
    ;
    coun.value = '';
});



