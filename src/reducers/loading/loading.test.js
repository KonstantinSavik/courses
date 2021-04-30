import loading from './loading';

describe('reducer: loading', () => {
  it('should return initial state', () => {
    expect(loading(undefined, { type: 'test' })).toStrictEqual(false);
  });

  it('should handle START_LOADING action', () => {
    expect(loading(undefined, { type: 'START_LOADING' })).toStrictEqual(true);
  });

  it('should handle STOP_LOADING action', () => {
    expect(loading(undefined, { type: 'STOP_LOADING' })).toStrictEqual(false);
  });
});
