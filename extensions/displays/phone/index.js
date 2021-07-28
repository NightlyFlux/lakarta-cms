export default{id:"phone",name:"Phone",description:"Display a formatted phone number",icon:"phone",handler:e=>e.toString().replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3"),types:["bigInteger"]};
