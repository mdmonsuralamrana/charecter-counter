const countWords = () =>{
    let NumberOfWords = document.getElementById('input').value.length;
    document.getElementById('showData').innerHTML = "your total Characters = " + NumberOfWords;
}