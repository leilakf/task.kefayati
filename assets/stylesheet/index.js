

// create a counter for added to id
let _id = 0


// add function for add a new li to form/
function _add() {
    let $id = document.getElementById("inp1").innerHTML;
    let ProductName = document.getElementById("inp2").value;
    let Seller = document.getElementById("inp3").value;
    let Price = document.getElementById("inp4").value;


    if (ProductName == "" || ProductName == null || ProductName == ' ') {
        alert("please fill in the blanks...")
    }
    else if (Seller == "" || Seller == null || Seller == ' ') {
        alert("please fill in the blanks......")
    }
    else if (Price == "" || Price == null || Price == ' ') {
        alert("please fill in the blanks......")
    }
    else {

        // I created this part as a separate function to make the code more readable👇🏻👇🏻
        litag(ProductName, Seller, Price)
    }

}


function litag(_ProductName, _Seller, _Price) {

    let _tag = document.createElement("li");
    _tag.classList.add('col-12', 'my-3', 'rounded', 'bg-light')



    _id++
    _tag.setAttribute('id', _id)
    let _$id = document.getElementById("inp1").innerText = _tag.getAttribute('id')



    _tag.innerHTML = `

    <div id=${_$id}>
                <div class=" col-12 row justify-content-center  m-0" id="rem"> 
                    <h6 class="col-2  bg-light d-flex justify-content-center  align-items-center">${_$id}</h6>
                    <h6  class="col-2 bg-light d-flex justify-content-center align-items-center">${_ProductName}</h6>
                    <h6  class="col-2 bg-light d-flex justify-content-center align-items-center">${_Seller}</h6>
                    <h6  class="col-2 bg-light d-flex justify-content-center align-items-center">$${_Price}</h6>
                    <h6  class="col-2 bg-light _select d-flex justify-content-center align-items-center bg-info" onclick="_Edit(this)">Edit
                         <i class=" text-success d-flex justify-content-center align-items-center demo-icon   icon-edit"></i>
                    </h6>
                    <h6  class="  col-2 bg-light _select d-flex justify-content-center align-items-center " onclick="_dell(this)">Dellet
                         <i class=" justify-content-center align-items-center text-danger demo-icon  icon-trash "></i>
                    </h6>
                </div>
    <div>
`
    document.getElementById("list").appendChild(_tag)
    document.getElementById("inp2").value = null
    document.getElementById("inp3").value = null
    document.getElementById("inp4").value = null
    document.getElementById("inp1").innerHTML = null
    document.getElementById("inp1").innerText = _tag.getAttribute('id')


    //............ //you can focus in first input👇🏻👇🏻 

    document.getElementById("inp2").focus()
    //    ...............................................
    // add localstorage for save forms
    let x = document.getElementById("_All")
    localStorage.setItem("PK", JSON.stringify(x.innerHTML));


}

// ........//// I used THIS to access the current element and to access the parent element 

function _dell(self) {
    if (confirm("Are You Sure?")) {
        self.parentElement.parentElement.remove()
        let x = document.getElementById("_All")
        localStorage.setItem("PK", JSON.stringify(x.innerHTML));

    }
}



let EditId
function _Edit(self) {

    document.getElementById("inp4").value = (self.previousElementSibling.innerText)
    document.getElementById("inp3").value = self.previousElementSibling.previousElementSibling.innerText
    document.getElementById("inp2").value = self.previousElementSibling.previousElementSibling.previousElementSibling.innerText
    document.getElementById("inp1").innerHTML = self.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText


    //........ create id turn
    EditId = self.parentElement.parentElement.getAttribute("id")

}

//..... create final edite for Edits to replace  UL made in original form...
// After editing an item, we press this button to replace and change each edit

function FinallEdite() {

    var a = document.getElementById("inp2").value;


    var ed = document.getElementById(EditId);
    var Elements = ed.getElementsByTagName("h6");
    var _select1 = Elements[1].innerText = document.getElementById("inp2").value;
    var _select2 = Elements[2].innerText = document.getElementById("inp3").value;
    var _select3 = Elements[3].innerText = document.getElementById("inp4").value;


    document.getElementById("inp2").value = null
    document.getElementById("inp3").value = null
    document.getElementById("inp4").value = null
    document.getElementById("inp1").innerHTML = null

    // / add localstorage for save forms
    let x = document.getElementById("_All")
    localStorage.setItem("PK", JSON.stringify(x.innerHTML));



}

function DelletAll(self) {

    var _remove = document.querySelectorAll("#rem");

    for (let index = 0; index < _remove.length; index++) {
        _remove[index].remove();
    }

    localStorage.removeItem("PK");





}


// / add localstorage for save forms onlode
window.onload = function () {

    var storedNames = JSON.parse(localStorage.getItem("PK"));
    if (storedNames != null) {
        document.getElementById("_All").innerHTML = storedNames

    }





}




