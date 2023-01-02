const Inventory_Grid = document.querySelector(".Inventory_Grid")
const Invetory_Item_Model = document.querySelector(".Inventory_Item")
const Rarity_Colors = [
    "Gray",
    "rgb(61,87,195)",
    "rgb(107,72,195)",
    "rgb(166, 60, 174)",
    "rgb(181,73,64)",
]
function Update_Inventory () {
    let Current_Inventory = JSON.parse(localStorage.getItem("Inventory_Items"))
for (let i in Current_Inventory){
    var Inventory_Item_Cloned = Invetory_Item_Model.cloneNode(true)
    Inventory_Grid.prepend(Inventory_Item_Cloned)
    const Inventory_Item_Rarity = Inventory_Item_Cloned.querySelector(".Inventory_Item_Rarity")

    Inventory_Item_Cloned.querySelector(".Inventory_Item_IMG img").src = Current_Inventory[i].png;

    let ItemNameArray = (Current_Inventory[i].name).split(" | ")
    
    Inventory_Item_Rarity.querySelector(".Inventory_Item_Weapon").textContent = ItemNameArray[0]
    Inventory_Item_Rarity.querySelector(".Inventory_Item_Skin").textContent = ItemNameArray[1]
    if (Current_Inventory[i].Rarity == "Gray") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[0];
    if (Current_Inventory[i].Rarity == "Blue") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[1];
    if (Current_Inventory[i].Rarity == "Purple") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[2];
    if (Current_Inventory[i].Rarity == "Pink") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[3];
    if (Current_Inventory[i].Rarity == "Red" ||
    Current_Inventory[i].Rarity == "Special") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[4];
    
}}
function Inventory (){
    let Current_Inventory = JSON.parse(localStorage.getItem("Inventory_Items"))
    for (let i in Current_Inventory){

        if (i > Inventory_Grid.children.length - 1){
            console.log("new item")


            var Inventory_Item_Cloned = Invetory_Item_Model.cloneNode(true)
            Inventory_Grid.prepend(Inventory_Item_Cloned)
            const Inventory_Item_Rarity = Inventory_Item_Cloned.querySelector(".Inventory_Item_Rarity")
        
            Inventory_Item_Cloned.querySelector(".Inventory_Item_IMG img").src = Current_Inventory[i].png;
        
            let ItemNameArray = (Current_Inventory[i].name).split(" | ")
            
            Inventory_Item_Rarity.querySelector(".Inventory_Item_Weapon").textContent = ItemNameArray[0]
            Inventory_Item_Rarity.querySelector(".Inventory_Item_Skin").textContent = ItemNameArray[1]
            if (Current_Inventory[i].Rarity == "Gray") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[0];
            if (Current_Inventory[i].Rarity == "Blue") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[1];
            if (Current_Inventory[i].Rarity == "Purple") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[2];
            if (Current_Inventory[i].Rarity == "Pink") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[3];
            if (Current_Inventory[i].Rarity == "Red" ||
            Current_Inventory[i].Rarity == "Special") Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[4];



        }

    }

}
Update_Inventory();
export { Inventory };