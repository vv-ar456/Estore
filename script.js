await fetch(SUPABASE_URL+"/rest/v1/orders",{

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
