
//creating constant variable and linking it to an element id in html
const keyNum = document.getElementById('key-num')
const keyName = document.getElementById('key-name')
const codeKey =document.getElementById('key-code')

//Creating a function for pressing keys and returning keyCode, key and keyName
function Keycode(){

    //register when the key is getting pressed down
    window.addEventListener("keydown", () => {
        //when the key is pressed down we're using the .textContent to change after an event happened to make a change
        keyNum.textContent = event.keyCode;
        codeKey.textContent = event.code;
        keyName.textContent = event.key;
    })

    window.addEventListener('keyup', ()=>{
        keyNum.textContent = event.keyCode;
        codeKey.textContent = event.code;
        keyName.textContent = event.key;
    })
}
Keycode()



//window.addEventListener("keydown", keycode())
