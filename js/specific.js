function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + id)
  .then(result => result.json())
  .then((res) => {
    alphabeth(res);
    })
  .catch(err => console.log(err))

function alphabeth(result) {
  var myResult = result.meals;

  var main = document.getElementById("specMain");
  var ul = document.getElementById("mealList");

  var hr = document.createElement("hr");

  var p = document.createElement("p");
  var div = document.createElement("div");


  for (var i = 0; i < myResult.length; i++) {
          var idResult = myResult[i];
          console.log(idResult.idMeal);
          var urls = "mealSpecific.html" + "?id=" + idResult.idMeal;
          var currentSort = myResult[i].strMeal;
          var h2 = document.createElement("h2");
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = urls;
          a.append(currentSort);
          h2.append(a);
          li.append(h2);
          ul.append(li);
          main.append(ul);
      }
}
    /*  var myResult2 = result.meals.strMeal;
      var idResult = result.meals.idMeal;
      var liCount = document.querySelectorAll("li");
      console.log(myResult2);
    //  var sorter = myResult2;
      var urlArray = [];
      var urls = "https://www.themealdb.com/meal.php?c=" + idResult;

      for (var i = 0; i < liCount.length; i++) {
        urlArray = urls;
        console.log(urlArray);
}
}


/*fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + id)
  .then(result => result.json())
  .then((res) => {
    eachMeal(res);
    })
  .catch(err => console.log(err))

function eachMeal(result) {

  var myResult = result.meals.strMeal;
  var idResult = result.meals.idMeal;
  console.log(myResult);
  var sorter = [myResult];
  var urlArray = [];
  var urls = "https://www.themealdb.com/meal.php?c=" + idResult;

  for (var i = 0; i < sorter.length; i++) {
    urlArray = urls + sorter[i];
    console.log(urlArray);
  }
}*/
