export const photos = {
  caterpillar: '/images/caterpillar.jpg',
  snail: '/images/snail-leaf.jpg',
  beachShells: '/images/beach-shells.jpg',
  beachRocks: '/images/beach-rocks.jpg',
  popupCamper: '/images/popup-camper-autumn.jpg',
  killbearShore: '/images/killbear-shore.jpg',
  killbearRockShore: '/images/killbear-rock-shore.jpg',
  killbearClearWater: '/images/killbear-clear-water.jpg',
  killbearFunOnRocks: '/images/killbear-fun-on-rocks.jpg',
  killbearKayak: '/images/killbear-kayak.jpg',
  rocksGems: '/images/rock-specimen-tray.jpg',
  growingStrawberries: '/images/wild-strawberries.jpg',
  legoBuild: '/images/lego-red-rover.jpg',
} as const;

export const sections = [
  { id: 'creatures', number: '01', label: 'Creatures', count: 5 },
  { id: 'places', number: '02', label: 'Places', count: 4 },
  { id: 'growing', number: '03', label: 'Growing Things', count: 3 },
  { id: 'rocks', number: '04', label: 'Rocks & Gems', count: 11 },
  { id: 'made', number: '05', label: 'Things I Made', count: 8 },
] as const;

export const discoveries = {
  caterpillar: {
    number: '001',
    title: 'The Giant Caterpillar',
    date: 'September 2026',
    location: 'Found outside',
    category: 'Creatures',
    image: photos.caterpillar,
    observation: 'Look how big he is.',
    href: '/discoveries/giant-caterpillar',
  },
  snail: {
    number: '002',
    title: 'A Really Big Snail',
    date: 'September 2026 · The backyard',
    location: 'The backyard',
    category: 'Creatures',
    image: photos.snail,
    observation: 'I think he’s going to his home.',
  },
} as const;
