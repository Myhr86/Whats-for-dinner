fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
  .then(result => result.json())
  .then((res) => {
    alphabeth(res);
    })
  .catch(err => console.log(err))

//search.php?f=b

function alphabeth(result) {
  var sorter = ["A", "B", "C", "D", "E","F", "G", "H", "I", "J",
                "K", "L", "M", "N", "O","P", "Q", "R", "S", "T",
                "U", "V", "W", "X", "Y", "Z"];
  var urlArray = [];
  var urls = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
  for (var i = 0; i < sorter.length; i++) {
    urlArray = urls + sorter[i];
  }


  var ul = document.getElementById("sortList");
  //console.log(sorter.length);
  for (var i = 0; i < sorter.length; i++) {
    var id = sorter[i];
    var idSpecific = "idSpecific.html?id="

    var li = document.createElement("li");
    var a = document.createElement("a");

    a.href = idSpecific + id;
    a.append(li);
    li.append(sorter[i]);

    ul.append(a);
  }
};
