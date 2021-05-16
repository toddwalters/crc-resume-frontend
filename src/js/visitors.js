
const url='https://api.resume.waltodders.com/prod/counter';

var count = " ";

async function getCount(){
    let response = await fetch(url);
    let data = await response.json()
    let num = data.Attributes.VisitCount;
    document.getElementById("visits").innerHTML = count.concat(num);
}

getCount()
    .then(data => console.log(data))
