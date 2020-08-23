function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");
//console.log(id);

fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
  .then(result => result.json())
  .then((res) => {
    currentMeal(res);
    })
  .catch(err => console.log(err))

  function currentMeal(result) {
    var mealName = result.meals[0];
    console.log(mealName);
    var ingrArray = [mealName.strIngredient1, mealName.strIngredient2, mealName.strIngredient3,
    mealName.strIngredient4, mealName.strIngredient5, mealName.strIngredient6, mealName.strIngredient7,
    mealName.strIngredient8, mealName.strIngredient9, mealName.strIngredient10, mealName.strIngredient11,
    mealName.strIngredient12, mealName.strIngredient13, mealName.strIngredient14, mealName.strIngredient15];

    var measureArray = [mealName.strMeasure1, mealName.strMeasure2, mealName.strMeasure3,
    mealName.strMeasure4, mealName.strMeasure5, mealName.strMeasure6, mealName.strMeasure7,
    mealName.strMeasure8, mealName.strMeasure9, mealName.strMeasure10, mealName.strMeasure11,
    mealName.strMeasure12, mealName.strMeasure13, mealName.strMeasure14, mealName.strMeasure15];
    //console.log(ingrArray);
    //console.log(mealName);
    var main = document.getElementById("specMain");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    var li = document.createElement("li");
    var liIng = document.createElement("li");
    var liIng2 = document.createElement("li");


    var img = document.createElement("img");
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    var leftDiv = document.createElement("div");
    var rightDiv = document.createElement("div");

    img.src = mealName.strMealThumb;
    var h3Text = "Ingredients:"
    div2.classList.add("ingredients");
    var ingredient1 = mealName.strIngredient1;

    h2.append(mealName.strMeal);
    p.append(mealName.strInstructions);
    div.append(h2);
    div.append(img);
    div.append(p);
    h3.append(h3Text);
    div.append(h3);

    for (let i = 0; i < ingrArray.length; i++) {
      console.log(ingrArray[i]);
      var br = document.createElement("br");
      var pIng = document.createElement("p");
      pIng.append(ingrArray[i]) + pIng.append(br);
      liIng.append(pIng);
    }

    for (let i = 0; i < measureArray.length; i++) {
      console.log(measureArray[i]);
      var br2 = document.createElement("br");
      var pMeas = document.createElement("p");
      pMeas.append(measureArray[i]) + pMeas.append(br);
      liIng2.append(pMeas);
    }

    leftDiv.append(liIng);
    rightDiv.append(liIng2);
    div2.append(leftDiv);
    div2.append(rightDiv);
    div.append(div2);
    main.append(div);

};
