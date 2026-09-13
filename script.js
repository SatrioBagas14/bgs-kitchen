const menu=[
{cat:"ice-cream",name:"Es Potong",desc:"Black Forest • Blueberry • Bubblegum • Cappuccino • Cheese • Coklat • Durian • Mangga • Matcha • Milo • Oreo • Red Velvet • Strawberry • Tiramisu • Vanilla",price:5000,badge:"+ topping Rp1.000"},
{cat:"ice-cream",name:"Es Krim Gabin",desc:"Es krim gabin, mulai dari",price:10000},
{cat:"dimsum",name:"Dimsum Kecil — Original",desc:"6 pcs",price:10000},
{cat:"dimsum",name:"Dimsum Kecil — Bakar",desc:"5 pcs",price:12000},
{cat:"dimsum",name:"Dimsum Kecil — Mentai",desc:"5 pcs",price:12000},
{cat:"dimsum",name:"Dimsum Besar — Original",desc:"4 pcs",price:12000},
{cat:"dimsum",name:"Dimsum Besar — Bakar",desc:"4 pcs",price:15000},
{cat:"dimsum",name:"Dimsum Besar — Mentai",desc:"4 pcs",price:15000},
{cat:"dimsum",name:"Dimsum Frozen",desc:"10 pcs",price:35000},
{cat:"dimsum",name:"Wonton",desc:"6 pcs",price:20000},
{cat:"snack",name:"Bakso Bakar Celuup",desc:"Snack",price:10000},
{cat:"snack",name:"Gohyong",desc:"10 pcs",price:13000},
{cat:"snack",name:"Mix Plater",desc:"Kentang + sosis + nugget",price:13000},
{cat:"snack",name:"Tahu Walik",desc:"20 pcs",price:13000},
{cat:"drink",name:"Lemon Tea",desc:"Ice",price:4000},
{cat:"drink",name:"Teh Original",desc:"Ice",price:4000},
{cat:"drink",name:"Jasmine Tea",desc:"Ice",price:5000},
{cat:"drink",name:"Lychee Tea",desc:"Ice",price:5000},
{cat:"drink",name:"Matcha",desc:"Ice",price:5000},
{cat:"drink",name:"Jeruk Peras",desc:"Ice",price:5000},
{cat:"drink",name:"Sunkist",desc:"Ice",price:6000},
{cat:"drink",name:"Sunkist Fizz",desc:"Ice",price:8000},
{cat:"drink",name:"Sunkist Squash",desc:"Ice",price:10000},
{cat:"drink",name:"Susu Murni",desc:"Hot",price:5000},
{cat:"drink",name:"Susu Rempah",desc:"Hot",price:12000},
{cat:"drink",name:"Susu Uwuh",desc:"Hot",price:10000},
{cat:"drink",name:"Wedang Uwuh",desc:"Hot",price:10000},
{cat:"drink",name:"Wedang Telang",desc:"Hot",price:10000},
{cat:"drink",name:"Wedang Temulawak",desc:"Hot",price:10000}
];
const labels={"ice-cream":"🍦 ICE CREAM","dimsum":"🥟 DIMSUM","snack":"🍢 SNACK","drink":"🥤 DRINK"};
const rupiah=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n).replace("Rp","Rp ");
function render(category="all"){
 const el=document.querySelector("#menu"),items=category==="all"?menu:menu.filter(x=>x.cat===category);
 el.innerHTML="";let last="";
 items.forEach(item=>{
  if(category==="all"&&item.cat!==last){const t=document.createElement("h2");t.className="category-title";t.textContent=labels[item.cat];el.appendChild(t);last=item.cat;}
  const card=document.createElement("article");card.className="menu-card";
  card.innerHTML=`<div><h3>${item.name}</h3><p>${item.desc}</p>${item.badge?`<span class="badge">${item.badge}</span>`:""}</div><div class="price">${rupiah(item.price)}</div>`;
  el.appendChild(card);
 });
}
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));btn.classList.add("active");render(btn.dataset.category)}));
render();