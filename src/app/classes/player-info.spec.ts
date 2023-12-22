import { UntypedFormArray } from '@angular/forms';
import { PlayerInfo } from './player-info';

describe('PlayerInfo', () => {
  it('should create an instance', () => {
    expect(new PlayerInfo("yo", "yop", new UntypedFormArray([]))).toBeTruthy();
  });
});
