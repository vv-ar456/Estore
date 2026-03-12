const supabase = window.supabase.createClient(
"https://blrsnfmljaycubcysbfw.supabase.co",
"YOUR_PUBLIC_KEY"
)

function openForm(){

document.getElementById("orderForm").style.display="block"

window.scrollTo({

top:document.body.scrollHeight,
behavior:"smooth"

})

}

function changeImage(img){

document.getElementById("mainImage").src = img.src

}



let time = 600

setInterval(()=>{

let m = Math.floor(time/60)

let s = time%60

document.getElementById("countdown").innerText =
m+":"+("0"+s).slice(-2)

time--

},1000)



async function placeCOD(){

let name=document.getElementById("name").value
let phone=document.getElementById("phone").value
let address=document.getElementById("address").value
let pincode=document.getElementById("pincode").value

await supabase

.from("orders")

.insert([
{name,phone,address,pincode,payment:"COD"}
])

alert("Order placed!")

}



const names=["Rahul","Aman","Priya","Vikas","Neha"]
const cities=["Delhi","Mumbai","Bangalore","Hyderabad","Pune"]

setInterval(()=>{

let n=names[Math.floor(Math.random()*names.length)]
let c=cities[Math.floor(Math.random()*cities.length)]

let popup=document.getElementById("popup")

popup.innerText=n+" from "+c+" just ordered this!"

popup.style.display="block"

setTimeout(()=>{

popup.style.display="none"

},3000)

},8000)



let stock=17

setInterval(()=>{

if(stock>5){

stock--

document.getElementById("stock").innerText=stock

}

},20000)
