import parseSkiCamsData from './parseSkiCamsData';

const input = [
  {
    name: 'Castelluccio di Norcia',
    prov: 'PG',
    cams: {
      194: {
        name: 'Pian Perduto alt. 1452 mt',
        url: 'http://www.umbriameteo.com/web1a/images/castelluccio_pdah.jpg',
      },
      195: {
        name: "Vista sull'abitato di Castelluccio",
        url: 'http://www.umbriameteo.com/web1/images/lastpdah.jpg',
      },
    },
  },
  {
    name: "Piani dell'Avaro",
    prov: 'BG',
    cams: {
      602: {
        name: 'Vista panoramica dal Rifugio Monte Avaro',
        url: 'http://www.rifugiomonteavaro.bg.it/webcam/20080618-113001_image-640.jpg',
      },
    },
  },
  {
    name: 'Piani di Bobbio',
    prov: 'LC',
    cams: {
      604: {
        name: 'Impianti sci Fortino alt. 1740 mt.',
        url: 'http://www.pianidibobbio.com/images/stories/webcam/fortino_800.jpg',
      },
      605: {
        name: 'Seggiovia Orscellera',
        url: 'http://www.pianidibobbio.com/images/stories/webcam/orscellera_800.jpg',
      },
      606: {
        name: 'Veduta Campelli alt. 1600 mt.',
        url: 'http://www.pianidibobbio.com/images/stories/webcam/campelli_800.jpg',
      },
    },
  },
  {
    name: 'Piazzatorre',
    prov: 'BG',
    cams: {
      609: {
        name: 'Torcole alt. 1850 mt - Alpi Orobie Bergamasche - Alta Val Brembana',
        url: 'http://www.valbrembanaweb.org/webcam/orobie.jpg',
      },
    },
  },
];

const output = [
  {
    name: 'Castelluccio di Norcia',
    prov: 'PG',
    cams: {
      194: {
        name: 'Pian Perduto alt. 1452 mt',
        url: 'http://www.umbriameteo.com/web1a/images/castelluccio_pdah.jpg',
      },
      195: {
        name: "Vista sull'abitato di Castelluccio",
        url: 'http://www.umbriameteo.com/web1/images/lastpdah.jpg',
      },
    },
  },
  {
    name: 'Piani di Bobbio',
    prov: 'LC',
    cams: {
      604: {
        name: 'Impianti sci Fortino alt. 1740 mt.',
        url: 'http://www.pianidibobbio.com/images/stories/webcam/fortino_800.jpg',
      },
      605: {
        name: 'Seggiovia Orscellera',
        url: 'http://www.pianidibobbio.com/images/stories/webcam/orscellera_800.jpg',
      },
      606: {
        name: 'Veduta Campelli alt. 1600 mt.',
        url: 'http://www.pianidibobbio.com/images/stories/webcam/campelli_800.jpg',
      },
    },
  },
];

const searchFor = [
  'Castelluccio di Norcia',
  'Piani di Bobbio',
];

describe('parseSkiCamsData()', () => {
  it('should return 2 objects with resorts details', () => {
    expect(parseSkiCamsData(input, searchFor)).toEqual(output);
  });
  it('should return 2 objects with searched name', () => {
    const parsedData = parseSkiCamsData(input, searchFor);
    expect(parsedData.some(skiResortData => skiResortData.name === searchFor[0])).toBe(true);
    expect(parsedData.some(skiResortData => skiResortData.name === searchFor[1])).toBe(true);
  });
});
