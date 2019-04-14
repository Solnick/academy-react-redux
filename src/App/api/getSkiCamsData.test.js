import getSkiCamsData from './getSkiCamsData';

it('the data fetched is Object', () => getSkiCamsData()
  .then((data) => {
    expect(typeof data).toBe('object');
  }));
