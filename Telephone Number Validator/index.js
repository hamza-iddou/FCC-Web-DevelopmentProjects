const result = document.getElementById(`results-div`);
const checkbtn = document.getElementById(`check-btn`);
const clear = document.getElementById(`clear-btn`);


function checkNUmbandRemove(value){
    let letters = value.split('').every(e =>{
        let c = e.charCodeAt(0);
        return ((c >= 48 && c <= 57 || c == 40 || c == 41 || c == 45 || c == 32))
    })
    let arr = value.split('');
    if(letters){
        for(let i = 0 ; i <= arr.length-1; i++ ){
            if(arr[i].charCodeAt(0) == 40 || arr[i].charCodeAt(0) == 41 || arr[i].charCodeAt(0) == 32 || arr[i].charCodeAt(0) == 45){
                arr.splice(i, 1);
                i--;
            }
        }
        if(arr.length >= 10 && arr.length <= 11){
        return arr
    }else{
        return false;
    }
    }else{
        return false;
    }
}









checkbtn.addEventListener("click", () => {
    const input = document.getElementById("user-input").value.trim();
    console.log(checkNUmbandRemove(input))
    

});

