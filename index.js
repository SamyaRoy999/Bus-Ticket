const setBtn = document.querySelectorAll("#btnId");
let availableDicment = 8;
let setIncrement = 0;
let total = 0;



for (const btn of setBtn) {


    btn.addEventListener("click", function () {
        if (setIncrement===4) {
            return
        }
        btn.classList.add("bg-[#1dd100]");
        availableDicment--;
        setIncrement++;
        document.getElementById("available-set").innerText = availableDicment;
        const sitName = btn.innerText;

        document.getElementById("increment").innerText = setIncrement;

        const appenTable = document.getElementById("table");
        const tr = document.createElement("tr");


        const td = document.createElement("td");
        const text = document.createTextNode(sitName)
        td.append(text)
        tr.appendChild(td)
        appenTable.appendChild(tr);

        const td2 = document.createElement("td");
        const text2 = document.createTextNode("Economoy")
        td2.append(text2)
        tr.appendChild(td2)

        const td3 = document.createElement("td");
        const text3 = document.createTextNode(550)
        td3.append(text3)
        tr.appendChild(td3)

        const totalPrices = 550;
        total += totalPrices
        console.log(total);
        const totalPrice = document.getElementById("total-Price")
        totalPrice.innerText = total;

        const grandTotal = document.getElementById("grand-Total")
        grandTotal.innerText = total;

        const apply = document.getElementById("apply-btn")
        apply.addEventListener("click", function () {
            
            const copunElement = document.getElementById("input-field").value;
            const copun = copunElement.toUpperCase().split(" ").join("");
            console.log(copun);
            if (copun === "COUPLE20") {
                if (total === 2200) {
                    let devidet = total / 100;
                    devidet *= 20  
                    const result = total - devidet;
                    grandTotal.innerText = result
                }
                document.getElementById("hiddenInput").classList.add("hidden")
            }
            else if(copun === "NEW15"){
                if (total === 2200) {
                    let devidet = total / 100;
                    devidet *= 15  
                    const result = total - devidet;
                    grandTotal.innerText = result
                }
                document.getElementById("hiddenInput").classList.add("hidden")
            }
        })

      
    })
}
