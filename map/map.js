// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();

// Adds key-value pairs:
map.set("a", 1);
map.set("b", 1);
map.set("c", 2);
map.set("d", 3);

// get: Retrieves values
console.log(map.get("a"));
console.log(map.get("d"));

// Checking if a key exists with has
console.log(map.has("b"));
console.log(map.has("c"));

// number of entries with size
console.log(map.size);

// Iterating through MAP
for (const [key, value] of map) {
    console.log(key,value);
}
// forEach
map.forEach((value, key) => {
    console.log(key,value);
})

//  Iterating keys or values separately:
for (const key of map.keys()) {
    console.log(key);
  }
  for (const value of map.values()) {
    console.log(value);
}
  
//   Iterating entries (same as default):
for (const entry of map.entries()) {
    console.log(entry[0], entry[1]);
    console.log(typeof entry); // object
}

//  Deleting an entry with delete
// map.delete("b")

