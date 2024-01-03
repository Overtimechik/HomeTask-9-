import { detail } from "./src/scripts/data";
let price_project = 0; 
let price_item = 0;
let price_department = 0;

Object.entries(detail.tech)
for (let i = 0; i<detail.tech.length;i++){
    Object.entries(detail.tech[i].details)
    console.log(detail.tech[i].name)
    for(let j = 0;j<detail.tech[i].details.length;j++){
        price_item+=(detail.tech[i].details[j].params.width*detail.tech[i].details[j].params.height)/(detail.tech[i].details[j].params.weight*150)
        console.log(detail.tech[i].details[j].title+" - "+price_item)
        price_project+=price_item
        price_item=0
    }
    console.log("Бюджет на весь проект: " + price_project)
    console.log("-------------------")
    price_department+=price_project
    price_project=0
}

console.log("Бюджет на весь отдел TECH: " + price_department)
console.log("-------------------")
price_department=0
console.log("\n")
for (let i = 0; i<detail.turbo.length;i++){
    Object.entries(detail.turbo[i].details)
    console.log(detail.turbo[i].name)
    for(let j = 0;j<detail.turbo[i].details.length;j++){
        price_item+=(detail.turbo[i].details[j].params.width*detail.turbo[i].details[j].params.height)/(detail.turbo[i].details[j].params.weight*150)
        console.log(detail.turbo[i].details[j].title+" - "+price_item)
        price_project+=price_item
        price_item=0
    }
    console.log("Бюджет на весь проект: " + price_project)
    console.log("-------------------")
    price_department+=price_project
    price_project=0
}
console.log("Бюджет на весь отдел TURBO: " + price_department)
console.log("-------------------")
price_department=0
console.log("\n")
for (let i = 0; i<detail.chemical.length;i++){
    Object.entries(detail.chemical[i].details)
    console.log(detail.chemical[i].name)
    for(let j = 0;j<detail.chemical[i].details.length;j++){
        price_item+=(detail.chemical[i].details[j].params.width*detail.chemical[i].details[j].params.height)/(detail.chemical[i].details[j].params.weight*150)
        console.log(detail.chemical[i].details[j].title+" - "+price_item)
        price_project+=price_item
        price_item=0
    }
    console.log("Бюджет на весь проект: " + price_project)
    console.log("-------------------")
    price_department+=price_project
    price_project=0
}
console.log("Бюджет на весь отдел CHEMICAL: " + price_department)
console.log("-------------------")
price_department=0