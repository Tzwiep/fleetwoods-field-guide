export const photos = {
  caterpillar: '/images/caterpillar.jpg',
  snail: '/images/snail.jpg',
  beachShells: '/images/beach-shells.jpg',
  beachRocks: '/images/beach-rocks.jpg',
  campingNight: '/images/camping-night.jpg',
  campingTent: '/images/camping-tent.jpg',
  popupCamperForest: '/images/popup-camper-forest.jpg',
  killbearShore: '/images/killbear-shore.jpg',
  killbearRockShore: '/images/killbear-rock-shore.jpg',
  killbearClearWater: '/images/killbear-clear-water.jpg',
  rocksGems: '/images/rocks-gems.jpg',
  growingStrawberries: '/images/growing-strawberries.jpg',
  legoBuild: '/images/lego-build.jpg',
} as const;

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
    date: 'September 2026',
    location: 'The backyard',
    category: 'Creatures',
    image: photos.snail,
    observation: 'I think he’s going to his home.',
    href: '/#snail',
  },
} as const;
