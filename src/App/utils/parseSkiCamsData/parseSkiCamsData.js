const parseSkiCamsData = (data, resortsToSearch) => Object.values(data)
  .filter(
    skiResort => resortsToSearch.includes(skiResort.name),
  );

export default parseSkiCamsData;
