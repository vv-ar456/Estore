const supabase = window.supabase.createClient(
"https://blrsnfmljaycubcysbfw.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJscnNuZm1samF5Y3ViY3lzYmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjcxMDcsImV4cCI6MjA4ODg0MzEwN30.d_oh9H-GMJ5M0wiEDonuVrJQSKqCGPToeuaIDNohIxs"
)

function openForm(){

document.getElementById("orderForm").style.display="block"

window.scrollTo(0,document.body.scrollHeight)

}

async function placeCOD(){

let name=document.getElementById("name").value
let phone=document.getElementById("phone").value
let address=document.getElementById("address").value
let pincode=document.getElementById("pincode").value

if(!name || !phone || !address){

alert("Please fill all details")

return

}

const {data,error}=await supabase
.from("orders")
.insert([
{
name:name,
phone:phone,
address:address,
pincode:pincode,
payment:"COD"
}
])

if(error){

alert("Order failed")

}else{

alert("Order placed successfully")

}

}
