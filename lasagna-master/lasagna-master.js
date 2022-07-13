/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (timer) {
  if (timer === 0) return "Lasagna is done.";
  else if (!timer) return "You forgot to set the timer.";
  return "Not done, please wait.";
};

export function preparationTime (layers, prepTime = 2) {
  return layers.length * prepTime;
};

export function quantities (layers) {
  let noodles = 0, sauce = 0;
  layers.map(layer => layer === 'noodles' ? noodles += 1 : (
    layer === 'sauce' ? sauce += 1 : ''
  ));
  return {
    noodles: 50 * noodles,
    sauce: .2 * sauce
  }
};

export function addSecretIngredient (friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
  return;
};

export function scaleRecipe (recipe, portions) {
  let newRecipe = { ...recipe };
  for (let item in newRecipe) {
      newRecipe[item] *= portions/2;
  }
  return newRecipe;
};