fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
  .then(result => result.json())
  .then((res) => {
    weather(res);
    })
  .catch(err => console.log(err))

  function weather(result) {
    console.log(result);
    var sorter = result;
  var ul = document.getElementById("sortList");
  //console.log(sorter.length);
  for (var i = 0; i < sorter.length; i++) {
    var id = sorter[i].idMeal;
    var idSpecific = "idSpecific.html?id="

    var li = document.createElement("li");
    var a = document.createElement("a");

    a.href = idSpecific + id;
    a.append(li);
    li.append(sorter[i].strMeal);

    ul.append(a);
}
  }
