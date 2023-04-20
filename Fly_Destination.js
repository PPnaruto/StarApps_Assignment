
function minimumPlanesRequired(fuelArray) {
    const n = fuelArray.length;
    let planesNeeded = 1;
    let fuelLeft = fuelArray[0];
  
    for (let i = 1; i < n; i++) {
      fuelLeft--;
  
      if (fuelLeft < 0) {
        return -1;
      }
  
      if (fuelArray[i] > fuelLeft) {
        planesNeeded++;
        fuelLeft = fuelArray[i];
      }
    }
  
    return planesNeeded;
  }
  
const fuel = [2,1,2,3,1];
const ans = minimumPlanesRequired(fuel);
console.log(ans);
  