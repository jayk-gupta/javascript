// A Set is a collection of unique values — it cannot contain duplicates.

/*
Key Methods & Properties of Set
✅ add(value) – Adds a value (if not already present).
✅ has(value) – Checks if the value exists.
✅ delete(value) – Removes a value.
✅ clear() – Removes all values.
✅ size – Number of unique values.
*/
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // duplicate, won't be added

console.log(mySet); // Output: Set { 1, 2 }
for (const value of mySet) {
  console.log(value);
}
// Output: 1, 2

mySet.forEach((value) => console.log(value));
