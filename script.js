const supabase = window.supabase.createClient(
"https://blrsnfmljaycubcysbfw.supabase.co",
"YOUR_PUBLIC_KEY"
)

function openForm(){

document.getElementById("orderForm").style.display="block"

window.scrollTo(0,document.body.scrollHeight)

}

let time=600

setInterval(()=>{

let min=Math.floor(time/60)
let sec=time%60

document.getElementById("countdown").innerText=
min+":"+("0"+sec).slice(-2)

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
