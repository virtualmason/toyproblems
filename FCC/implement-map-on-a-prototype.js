var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback) {
  var newArray = [...s];
  let near = [];
  newArray.forEach(function(elm) {
    near.push(callback(elm));
    n;
  }); // Add your code above this linen  return near;};

  var new_s = s.myMap(function(item) {
    return item * 2;
  });
  console.log(new_s + " new_s");
};
s;
