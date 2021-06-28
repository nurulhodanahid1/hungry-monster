// display meal by categories

document.getElementById("find-meal").addEventListener('click', function(){
    const inputMealName = document.getElementById("input-meal-name");
    displayMeal(inputMealName.value);
})
const displayMeal = name => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
    .then(response => response.json())
    .then(data => {displayMeals(data.meals);  // here no need .meals for for loop
        //console.log(data);
    })
    .catch(err => alert("Wrong meal categories name! Enter the meal categories name form the categories list"));
}
const displayMeals = meals =>{
    const mealsDiv = document.getElementById("meals");
    meals.forEach(meal => {
            const mealDiv = document.createElement("div");
        mealDiv.className = "meal";
        const mealInfo = `
            <img onclick="displayMealDetail('${meal.strMeal}')" width="200" src="${meal.strMealThumb}">
            <h3 onclick="displayMealDetail('${meal.strMeal}')" class="meal-name">${meal.strMeal}</h3>
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });

    // for (let i = 0; i < meals.meals.length; i++) {
    //     const meal = meals.meals[i];
    //     const mealDiv = document.createElement("div");
    //     mealDiv.className = "meal";
    //     const mealInfo = `
    //         <img onclick="displayMealDetail('${meal.strMeal}')" width="200" src="${meal.strMealThumb}">
    //         <h3 onclick="displayMealDetail('${meal.strMeal}')" class="meal-name">${meal.strMeal}</h3>
    //     `
    //     mealDiv.innerHTML = mealInfo;
    //     mealsDiv.appendChild(mealDiv);
    // }
}

// display meal detail

const displayMealDetail = name =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url).then(response => response.json().then(data => mealDetailInfo(data.meals[0])));
}

const mealDetailInfo = meal => {
    //console.log(meal);
    //console.log(meal.strMeal);
    const mealDiv = document.getElementById("meal-detail");
    const mealDetailsInfo = `
            <img width="300" src="${meal.strMealThumb}">
            <h3 class="meal-name">${meal.strMeal}</h3>
            <h4>Meal Ingredient</h4>
            <ul>
                <li>${meal.strIngredient1}</li>
                <li>${meal.strIngredient2}</li>
                <li>${meal.strIngredient3}</li>
                <li>${meal.strIngredient4}</li>
                <li>${meal.strIngredient5}</li>
                <li>${meal.strIngredient6}</li>
                <li>${meal.strIngredient7}</li>
                <li>${meal.strIngredient8}</li>
                <li>${meal.strIngredient9}</li>
                <li>${meal.strIngredient10}</li>
                <li>${meal.strIngredient11}</li>
                <li>${meal.strIngredient12}</li>
                <li>${meal.strIngredient13}</li>
                <li>${meal.strIngredient14}</li>
                <li>${meal.strIngredient15}</li>
                <li>${meal.strIngredient16}</li>
                <li>${meal.strIngredient17}</li>
                <li>${meal.strIngredient18}</li>
                <li>${meal.strIngredient19}</li>
                <li>${meal.strIngredient20}</li>
            </ul>
            <iframe width="300" height="215" src="${meal.strYoutube}"></iframe>
        `
    mealDiv.innerHTML = mealDetailsInfo;
}
