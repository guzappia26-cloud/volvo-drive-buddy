// Vehicle Images Data - maps model/version/color/interior to image paths

export interface VehicleImageSet {
  exterior: string;
  frente: string;
  traseira: string;
  interior: string;
  bancos: string;
  console: string;
}

export interface VehicleImageConfig {
  model: string;
  version: string;
  colorSlug: string;
  interiorSlug: string;
  images: VehicleImageSet;
}

// Helper to generate image path
function getImagePath(model: string, colorSlug: string, interiorSlug: string, imageName: string): string {
  return `/vehicles/${model}/${colorSlug}/${interiorSlug}/${imageName}.jpg`;
}

function getExteriorImagePath(model: string, colorSlug: string, imageName: string): string {
  return `/vehicles/${model}/${colorSlug}/${imageName}.jpg`;
}

// EX30 Cloud Blue Plus - Pine Interior
const ex30CloudBluePlusPine: VehicleImageConfig = {
  model: 'EX30',
  version: 'Plus',
  colorSlug: 'cloud-blue',
  interiorSlug: 'pine',
  images: {
    exterior: getExteriorImagePath('EX30', 'cloud-blue', 'exterior'),
    frente: getExteriorImagePath('EX30', 'cloud-blue', 'frente'),
    traseira: getExteriorImagePath('EX30', 'cloud-blue', 'traseira'),
    interior: getImagePath('EX30', 'cloud-blue', 'pine', 'interior'),
    bancos: getImagePath('EX30', 'cloud-blue', 'pine', 'bancos'),
    console: getImagePath('EX30', 'cloud-blue', 'pine', 'console'),
  },
};

// EX30 Cloud Blue Plus - Indigo Interior
const ex30CloudBluePlusIndigo: VehicleImageConfig = {
  model: 'EX30',
  version: 'Plus',
  colorSlug: 'cloud-blue',
  interiorSlug: 'indigo',
  images: {
    exterior: getExteriorImagePath('EX30', 'cloud-blue', 'exterior'),
    frente: getExteriorImagePath('EX30', 'cloud-blue', 'frente'),
    traseira: getExteriorImagePath('EX30', 'cloud-blue', 'traseira'),
    interior: getImagePath('EX30', 'cloud-blue', 'indigo', 'interior'),
    bancos: getImagePath('EX30', 'cloud-blue', 'indigo', 'bancos'),
    console: getImagePath('EX30', 'cloud-blue', 'indigo', 'console'),
  },
};

// EX30 Crystal White Plus - Pine Interior
const ex30CrystalWhitePlusPine: VehicleImageConfig = {
  model: 'EX30',
  version: 'Plus',
  colorSlug: 'crystal-white',
  interiorSlug: 'pine',
  images: {
    exterior: getExteriorImagePath('EX30', 'crystal-white', 'exterior'),
    frente: getExteriorImagePath('EX30', 'crystal-white', 'frente'),
    traseira: getExteriorImagePath('EX30', 'crystal-white', 'traseira'),
    interior: getImagePath('EX30', 'crystal-white', 'pine', 'interior'),
    bancos: getImagePath('EX30', 'crystal-white', 'pine', 'bancos'),
    console: '/vehicles/EX30/crystal-white/pine/console.avif',
  },
};

// EX30 Crystal White Plus - Indigo Interior
const ex30CrystalWhitePlusIndigo: VehicleImageConfig = {
  model: 'EX30',
  version: 'Plus',
  colorSlug: 'crystal-white',
  interiorSlug: 'indigo',
  images: {
    exterior: getExteriorImagePath('EX30', 'crystal-white', 'exterior'),
    frente: getExteriorImagePath('EX30', 'crystal-white', 'frente'),
    traseira: getExteriorImagePath('EX30', 'crystal-white', 'traseira'),
    interior: getImagePath('EX30', 'crystal-white', 'indigo', 'interior'),
    bancos: getImagePath('EX30', 'crystal-white', 'indigo', 'bancos'),
    console: '/vehicles/EX30/crystal-white/indigo/console.avif',
  },
};

// EX30 Onyx Black Plus - Pine Interior
const ex30OnyxBlackPlusPine: VehicleImageConfig = {
  model: 'EX30',
  version: 'Plus',
  colorSlug: 'onyx-black',
  interiorSlug: 'pine',
  images: {
    exterior: getExteriorImagePath('EX30', 'onyx-black', 'exterior'),
    frente: getExteriorImagePath('EX30', 'onyx-black', 'frente'),
    traseira: getExteriorImagePath('EX30', 'onyx-black', 'traseira'),
    interior: getImagePath('EX30', 'onyx-black', 'pine', 'interior'),
    bancos: getImagePath('EX30', 'onyx-black', 'pine', 'bancos'),
    console: getImagePath('EX30', 'onyx-black', 'pine', 'console'),
  },
};

// EX30 Onyx Black Plus - Indigo Interior
const ex30OnyxBlackPlusIndigo: VehicleImageConfig = {
  model: 'EX30',
  version: 'Plus',
  colorSlug: 'onyx-black',
  interiorSlug: 'indigo',
  images: {
    exterior: getExteriorImagePath('EX30', 'onyx-black', 'exterior'),
    frente: getExteriorImagePath('EX30', 'onyx-black', 'frente'),
    traseira: getExteriorImagePath('EX30', 'onyx-black', 'traseira'),
    interior: getImagePath('EX30', 'onyx-black', 'indigo', 'interior'),
    bancos: getImagePath('EX30', 'onyx-black', 'indigo', 'bancos'),
    console: getImagePath('EX30', 'onyx-black', 'indigo', 'console'),
  },
};

// All available vehicle image configurations
export const vehicleImageConfigs: VehicleImageConfig[] = [
  ex30CloudBluePlusPine,
  ex30CloudBluePlusIndigo,
  ex30CrystalWhitePlusPine,
  ex30CrystalWhitePlusIndigo,
  ex30OnyxBlackPlusPine,
  ex30OnyxBlackPlusIndigo,
];

// Color name to slug mapping
export const colorSlugMap: Record<string, string> = {
  'Crystal White': 'crystal-white',
  'Onyx Black': 'onyx-black',
  'Sand Dune': 'sand-dune',
  'Vapour Grey': 'vapour-grey',
  'Cloud Blue': 'cloud-blue',
  'Forest Lake': 'forest-lake',
  'Denim Blue': 'denim-blue',
  'Aurora Silver': 'aurora-silver',
  'Mulberry Red': 'mulberry-red',
  'Bright Dusk': 'bright-dusk',
  'Platinum Grey': 'platinum-grey',
};

// Interior name to slug mapping
export const interiorSlugMap: Record<string, string> = {
  'Indigo': 'indigo',
  'Pine': 'pine',
  'Breeze': 'breeze',
  'Mist': 'mist',
  'Charcoal Suede': 'charcoal-suede',
  'Charcoal Microtech': 'charcoal-microtech',
  'Dawn Fusion': 'dawn-fusion',
  'Zinc': 'zinc',
  'Nórdico Charcoal': 'nordico-charcoal',
  'Nórdico Cardamon': 'nordico-cardamon',
  'City Wave': 'city-wave',
  'Couro Charcoal': 'couro-charcoal',
  'Couro Cardamon': 'couro-cardamon',
  'Couro Blond': 'couro-blond',
  'Navy': 'navy',
};

// Get vehicle images for a specific configuration
export function getVehicleImages(
  model: string,
  version: string,
  colorName: string,
  interiorName: string
): VehicleImageSet | null {
  const colorSlug = colorSlugMap[colorName];
  const interiorSlug = interiorSlugMap[interiorName];

  if (!colorSlug || !interiorSlug) return null;

  const config = vehicleImageConfigs.find(
    (c) =>
      c.model === model &&
      c.version === version &&
      c.colorSlug === colorSlug &&
      c.interiorSlug === interiorSlug
  );

  return config?.images || null;
}

// Check if images are available for a configuration
export function hasVehicleImages(
  model: string,
  version: string,
  colorName: string,
  interiorName: string
): boolean {
  return getVehicleImages(model, version, colorName, interiorName) !== null;
}

// Image labels for display
export const imageLabels: Record<keyof VehicleImageSet, string> = {
  exterior: 'Exterior',
  frente: 'Frente',
  traseira: 'Traseira',
  interior: 'Interior',
  bancos: 'Bancos',
  console: 'Console',
};
