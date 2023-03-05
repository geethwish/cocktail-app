import { tempDrinks } from "./tempDrinks";

describe('Temp Data', () => {
    it('should not be empty', () => {
      expect(tempDrinks.length).toEqual(6);
    });
  
  });