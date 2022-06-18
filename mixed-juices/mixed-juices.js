// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy': 
      return .5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  };
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let count = 0;
  while (i < limes.length) {
    if (limes[i] === 'small') count += 6;
    if (limes[i] === 'medium') count += 8;
    if (limes[i] === 'large') count += 10;
    i++;
    if (count >= wedgesNeeded) break;
  }
  return wedgesNeeded === 0 || limes.length === 0 ? 0 : i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeToMixJuiceList = [];
  let i = 0;
  let count = 0;
  while (i < orders.length) {
    timeToMixJuiceList.push(timeToMixJuice (orders[i]));
    count += timeToMixJuiceList[i];
    i++;
    if (count >= timeLeft) break;
  }
  return orders.slice(i,);
}
