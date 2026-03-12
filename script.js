const SUPABASE_URL = "https://blrsnfmljaycubcysbfw.supabase.co"

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJscnNuZm1samF5Y3ViY3lzYmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjcxMDcsImV4cCI6MjA4ODg0MzEwN30.d_oh9H-GMJ5M0wiEDonuVrJQSKqCGPToeuaIDNohIxs"



function showForm(){

document.getElementById("orderForm").style.display="block"

}



async function placeCOD(){

let name=document.getElementById("name").value

let phone=document.getElementById("phone").value

let address=document.getElementById("address").value

let pincode=document.getElementById("pincode").value



if(!name || !phone || !address || !pincode){

alert("Please fill all details")

return

}



try{

let res=await fetch(SUPABASE_URL+"/rest/v1/orders",{

method:"POST",

headers:{

"Content-Type":"application/json",

"apikey":SUPABASE_KEY,

"Authorization":"Bearer "+SUPABASE_KEY,

"Prefer":"return=minimal"

},

body:JSON.stringify({

name:name,

phone:phone,

address:address,

pincode:pincode,

payment_method:"COD"

})

})



if(res.ok){

alert("Order placed successfully! Pay ₹799 on delivery.")

}else{

alert("Order failed. Please try again.")

}



}catch(err){

alert("Network error")

}

}
