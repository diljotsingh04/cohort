let timeOut;
// debouncting or throatling
function reqOptimizer(){
    clearTimeout(timeOut);
    timeOut = setTimeout(()=>giveAnswer(), 1000);
}
async function giveAnswer(){
    let aVal = document.getElementById("aValue").value;
    let bVal = document.getElementById("bValue").value;
    

    const reqBody = {
        a: aVal,
        b: bVal
    };
    const reqHeaders = {
        'Content-Type': 'application/json',
        authentication : "This is authentication token of client's username"
    };
    const response = await fetch("http://localhost:3000/sum", {
        method: 'POST', 
        headers: reqHeaders,
        body: JSON.stringify(reqBody)
    });
    const data = await response.json();

    document.querySelector("#result").innerText = `Sum is ${data.result}`;
}