var collection = {
"2548" : {
  "album" : "Slippary when wet",
  "artist" : "Bon Jovi",
  "tracks" : [
    "Let It Rock",
    "You Give Love a Bad Name"
  ]
},
"2468" : {
  "album" : "1999",
  "artist" : "Prince",
  "tracks" : [
    "1999",
    "Little Red Corvette"
  ]
},
"1245" : {
  "album" : "Robert Palmar",
  "tracks" : []
},
"5439" : {
  "album" : "ABBA gold",
}
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if(value === ""){
    delete collection[id][prop];
  }
  else if (prop == "tracks") {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
  }
  else {
    collection[id][prop] = value;
  }
  return collection;
}


console.log(updateRecords(5439, "artist", "ABAA"));
console.log(upadteRecords(1245, "tracks", "addy"));
