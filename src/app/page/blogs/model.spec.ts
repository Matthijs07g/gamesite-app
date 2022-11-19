import { Model } from './model';

describe('Model', () => {
  it('should create an instance', () => {
    expect(new Model("gtav", "a game where you can do anything", "a game that takes place in a city where you can do anything", new Date(), '../../../assets/gtav.jpg')).toBeTruthy();
  });
});
