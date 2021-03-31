function Validation() {

    let inputFirstname = document.getElementById('InputFirstName').value;
    let inputLastname = document.getElementById('InputLastName').value;
    let inputClass = document.getElementById('InputClass').value;
    let inputAddress = document.getElementById('InputAddress').value;
    let inputSection = document.getElementById('InputSection').value;
    let inputRollno = document.getElementById('InputRollno').value;
    document.getElementById('showResult').innerHTML =
        ` Your student name is ${inputFirstname} ${inputLastname} <br> and Class is ${inputClass} ${inputSection} and roll no is ${inputRollno} <br> and your  is ${inputAddress}. `

}