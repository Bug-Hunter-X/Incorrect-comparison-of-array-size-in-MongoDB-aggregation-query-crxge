```javascript
const query = {
  $expr: {
    $gt: [ {
      $size: "$arrayField" }, 5 ]
  }
}

db.collection.find(query); 
```