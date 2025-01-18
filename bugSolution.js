```javascript
// Solution 1: Remove null values from the array
const values = [1, 2, null];
const filteredValues = values.filter(val => val !== null);
db.collection('myCollection').find({ field: { $in: filteredValues } });

// Solution 2: Check for null separately (if applicable)
db.collection('myCollection').find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });
```