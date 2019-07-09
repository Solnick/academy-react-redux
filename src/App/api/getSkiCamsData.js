const getSkiCamsData = () => fetch('https://makevoid-skicams.p.mashape.com/cams.json',
  {
    headers: {
      'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw',
    },
  })
  .then(res => res.json());

export default getSkiCamsData;
