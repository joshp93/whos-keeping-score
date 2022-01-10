import { FormArray } from '@angular/forms';
import { PlayerInfo } from './player-info';
import { PlayerInfoSession } from './player-info-session';

describe('PlayerInfoSession', () => {
  it('should create an instance', () => {
    expect(new PlayerInfoSession(new PlayerInfo("test", "test", new FormArray([])))).toBeTruthy();
  });
});
