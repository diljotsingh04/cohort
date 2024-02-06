/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    let final = [];
    for(let i of transactions){
      let inserted = false;
      for(let j of final){
        if(j.category == i.category){
          j.totalSpent += i.price;
          inserted = true;
          break;
        }
      }
      if(!inserted){
        final.push({category: i.category, totalSpent: i.price})
      }
    }

    return final;
}

// console.log(calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 50,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
// ]));

module.exports = calculateTotalSpentByCategory;
