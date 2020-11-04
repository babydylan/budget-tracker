const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
  const db = target.result;
  const offlineStore = db.createObjectStore("pending",{ autoIncrement: true, keyPath: "itemID"});
};