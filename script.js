let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]
let currentYear = 2022;

let typeS1Count = 0;

// Iterate through new Inventory Car Models, Print in console
let i = 0;
while (i < newInventoryCarModels.length){
    
    if (newInventoryCarModels[i] == "T1"){
        newInventoryCarModels[i] = "S1";
    }
    if (newInventoryCarModels[i] == "S1"){
        typeS1Count++;
    }
    i++;
}

console.log(typeS1Count);
console.log(newInventoryCarModels);


// Count the Lorries
let lorrieCount = 0;
for(let i=0; i < newInventoryCarTypes.length; i++){
    if (newInventoryCarTypes[i] == "Lorrie"){
        lorrieCount++;
    }
}

console.log(lorrieCount);

// Average the age of trains
let trainAge = [];
let sum = 0;
let average = 0;
for(let i=0; i < newInventoryYearBuilt.length; i++){
    sum += (currentYear - newInventoryYearBuilt[i]);
    trainAge.push(currentYear - newInventoryYearBuilt[i]);
}
average = sum / trainAge.length;


console.log(trainAge);
console.log(average);