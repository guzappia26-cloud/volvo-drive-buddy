// Volvo Vehicle Configurator Data

export interface ColorOption {
  name: string;
  hex: string;
  metallic?: boolean;
}

export interface WheelOption {
  name: string;
  size: string;
}

export interface InteriorOption {
  name: string;
  color: string;
}

export interface VehicleConfig {
  model: string;
  version: string;
  colors: ColorOption[];
  wheels: WheelOption[];
  interiors: InteriorOption[];
}

// Color palette - common Volvo colors
const colorPalette: Record<string, ColorOption> = {
  crystalWhite: { name: 'Crystal White', hex: '#F5F5F5', metallic: true },
  onyxBlack: { name: 'Onyx Black', hex: '#1A1A1A', metallic: true },
  sandDune: { name: 'Sand Dune', hex: '#C4B7A6', metallic: true },
  vapourGrey: { name: 'Vapour Grey', hex: '#8C9095', metallic: true },
  cloudBlue: { name: 'Cloud Blue', hex: '#7BA3B3', metallic: true },
  forestLake: { name: 'Forest Lake', hex: '#3D5A5B', metallic: true },
  denimBlue: { name: 'Denim Blue', hex: '#2C4A6E', metallic: true },
  aurorasilver: { name: 'Aurora Silver', hex: '#A8ADB3', metallic: true },
  mulberryRed: { name: 'Mulberry Red', hex: '#722F37', metallic: true },
  brightDusk: { name: 'Bright Dusk', hex: '#8B7355', metallic: true },
  platinumGrey: { name: 'Platinum Grey', hex: '#6B6B6B', metallic: true },
};

// Interior options
const interiorOptions: Record<string, InteriorOption> = {
  indigo: { name: 'Indigo', color: '#3F4D6B' },
  pine: { name: 'Pine', color: '#4A5D4F' },
  breeze: { name: 'Breeze', color: '#B8C4C8' },
  mist: { name: 'Mist', color: '#9CA3A5' },
  charcoalSuede: { name: 'Charcoal Suede', color: '#36454F' },
  charcoalMicrotech: { name: 'Charcoal Microtech', color: '#2F3A3F' },
  dawnFusion: { name: 'Dawn Fusion', color: '#C4B8A8' },
  zinc: { name: 'Zinc', color: '#787D7A' },
  nordicoCharcoal: { name: 'Nórdico Charcoal', color: '#3A3A3A' },
  nordicoCardamon: { name: 'Nórdico Cardamon', color: '#8B7355' },
  cityWave: { name: 'City Wave', color: '#5B6B7C' },
  couroCharcoal: { name: 'Couro Charcoal', color: '#2D2D2D' },
  couroCardamon: { name: 'Couro Cardamon', color: '#7A6548' },
  couroBlond: { name: 'Couro Blond', color: '#D4C4A8' },
  navy: { name: 'Navy', color: '#1B2B4B' },
};

// EX30 Configurations
const ex30Configs: VehicleConfig[] = [
  {
    model: 'EX30',
    version: 'Plus',
    colors: [
      colorPalette.crystalWhite,
      colorPalette.onyxBlack,
      colorPalette.sandDune,
      colorPalette.vapourGrey,
      colorPalette.cloudBlue,
    ],
    wheels: [{ name: 'Standard', size: '19"' }],
    interiors: [interiorOptions.indigo, interiorOptions.pine],
  },
  {
    model: 'EX30',
    version: 'Ultra',
    colors: [
      colorPalette.crystalWhite,
      colorPalette.onyxBlack,
      colorPalette.sandDune,
      colorPalette.vapourGrey,
      colorPalette.cloudBlue,
    ],
    wheels: [{ name: 'Premium', size: '20"' }],
    interiors: [interiorOptions.breeze, interiorOptions.indigo, interiorOptions.mist],
  },
  {
    model: 'EX30',
    version: 'Cross Country',
    colors: [
      colorPalette.crystalWhite,
      colorPalette.onyxBlack,
      colorPalette.sandDune,
      colorPalette.vapourGrey,
      colorPalette.cloudBlue,
    ],
    wheels: [{ name: 'Black', size: '19"' }],
    interiors: [interiorOptions.indigo, interiorOptions.pine],
  },
];

// EC40 Configurations
const ec40Configs: VehicleConfig[] = [
  {
    model: 'EC40',
    version: 'Plus',
    colors: [
      colorPalette.cloudBlue,
      colorPalette.vapourGrey,
      colorPalette.sandDune,
      colorPalette.onyxBlack,
      colorPalette.forestLake,
      colorPalette.denimBlue,
      colorPalette.crystalWhite,
      colorPalette.aurorasilver,
    ],
    wheels: [{ name: 'Standard', size: '19"' }],
    interiors: [
      interiorOptions.charcoalSuede,
      interiorOptions.charcoalMicrotech,
      interiorOptions.dawnFusion,
      interiorOptions.zinc,
    ],
  },
  {
    model: 'EC40',
    version: 'Ultra',
    colors: [
      colorPalette.cloudBlue,
      colorPalette.vapourGrey,
      colorPalette.sandDune,
      colorPalette.onyxBlack,
      colorPalette.forestLake,
      colorPalette.denimBlue,
      colorPalette.crystalWhite,
      colorPalette.aurorasilver,
    ],
    wheels: [{ name: 'Premium', size: '20"' }],
    interiors: [
      interiorOptions.charcoalSuede,
      interiorOptions.charcoalMicrotech,
      interiorOptions.dawnFusion,
      interiorOptions.zinc,
    ],
  },
  {
    model: 'EC40',
    version: 'Black Edition',
    colors: [
      colorPalette.onyxBlack,
      colorPalette.vapourGrey,
      colorPalette.crystalWhite,
    ],
    wheels: [{ name: 'Black', size: '20"' }],
    interiors: [interiorOptions.charcoalSuede, interiorOptions.charcoalMicrotech],
  },
];

// EX40 Configurations
const ex40Configs: VehicleConfig[] = [
  {
    model: 'EX40',
    version: 'Plus',
    colors: [
      colorPalette.cloudBlue,
      colorPalette.vapourGrey,
      colorPalette.sandDune,
      colorPalette.onyxBlack,
      colorPalette.forestLake,
      colorPalette.denimBlue,
      colorPalette.crystalWhite,
      colorPalette.aurorasilver,
    ],
    wheels: [{ name: 'Standard', size: '19"' }],
    interiors: [
      interiorOptions.charcoalSuede,
      interiorOptions.charcoalMicrotech,
      interiorOptions.dawnFusion,
      interiorOptions.zinc,
    ],
  },
  {
    model: 'EX40',
    version: 'Ultra',
    colors: [
      colorPalette.cloudBlue,
      colorPalette.vapourGrey,
      colorPalette.sandDune,
      colorPalette.onyxBlack,
      colorPalette.forestLake,
      colorPalette.denimBlue,
      colorPalette.crystalWhite,
      colorPalette.aurorasilver,
    ],
    wheels: [{ name: 'Premium', size: '20"' }],
    interiors: [
      interiorOptions.charcoalSuede,
      interiorOptions.charcoalMicrotech,
      interiorOptions.dawnFusion,
      interiorOptions.zinc,
    ],
  },
  {
    model: 'EX40',
    version: 'Black Edition',
    colors: [
      colorPalette.onyxBlack,
      colorPalette.vapourGrey,
      colorPalette.crystalWhite,
    ],
    wheels: [{ name: 'Black', size: '20"' }],
    interiors: [interiorOptions.charcoalSuede, interiorOptions.charcoalMicrotech],
  },
];

// XC60 Configurations
const xc60Configs: VehicleConfig[] = [
  {
    model: 'XC60',
    version: 'Plus',
    colors: [
      colorPalette.mulberryRed,
      colorPalette.onyxBlack,
      colorPalette.vapourGrey,
      colorPalette.forestLake,
      colorPalette.aurorasilver,
      colorPalette.brightDusk,
      colorPalette.crystalWhite,
      colorPalette.denimBlue,
    ],
    wheels: [{ name: 'Standard', size: '19"' }],
    interiors: [
      interiorOptions.nordicoCharcoal,
      interiorOptions.nordicoCardamon,
      interiorOptions.cityWave,
    ],
  },
  {
    model: 'XC60',
    version: 'Ultra',
    colors: [
      colorPalette.mulberryRed,
      colorPalette.onyxBlack,
      colorPalette.vapourGrey,
      colorPalette.forestLake,
      colorPalette.aurorasilver,
      colorPalette.brightDusk,
      colorPalette.crystalWhite,
      colorPalette.denimBlue,
    ],
    wheels: [{ name: 'Premium', size: '20"' }],
    interiors: [
      interiorOptions.couroCharcoal,
      interiorOptions.couroCardamon,
      interiorOptions.couroBlond,
      interiorOptions.navy,
    ],
  },
  {
    model: 'XC60',
    version: 'Ultra Dark',
    colors: [
      colorPalette.mulberryRed,
      colorPalette.onyxBlack,
      colorPalette.vapourGrey,
      colorPalette.forestLake,
      colorPalette.aurorasilver,
      colorPalette.brightDusk,
      colorPalette.crystalWhite,
      colorPalette.denimBlue,
    ],
    wheels: [{ name: 'Sport', size: '21"' }],
    interiors: [
      interiorOptions.couroCharcoal,
      interiorOptions.couroCardamon,
      interiorOptions.couroBlond,
      interiorOptions.navy,
    ],
  },
  {
    model: 'XC60',
    version: 'Polestar',
    colors: [
      colorPalette.onyxBlack,
      colorPalette.crystalWhite,
      colorPalette.vapourGrey,
    ],
    wheels: [{ name: 'Polestar', size: '22"' }],
    interiors: [interiorOptions.couroCharcoal],
  },
];

// XC90 Configurations
const xc90Configs: VehicleConfig[] = [
  {
    model: 'XC90',
    version: 'Plus',
    colors: [
      colorPalette.mulberryRed,
      colorPalette.onyxBlack,
      colorPalette.vapourGrey,
      colorPalette.forestLake,
      colorPalette.aurorasilver,
      colorPalette.brightDusk,
      colorPalette.crystalWhite,
      colorPalette.denimBlue,
    ],
    wheels: [{ name: 'Standard', size: '19"' }],
    interiors: [interiorOptions.nordicoCharcoal, interiorOptions.nordicoCardamon],
  },
  {
    model: 'XC90',
    version: 'Ultra',
    colors: [
      colorPalette.mulberryRed,
      colorPalette.onyxBlack,
      colorPalette.vapourGrey,
      colorPalette.forestLake,
      colorPalette.aurorasilver,
      colorPalette.brightDusk,
      colorPalette.crystalWhite,
      colorPalette.denimBlue,
    ],
    wheels: [{ name: 'Premium', size: '20"' }],
    interiors: [
      interiorOptions.couroCharcoal,
      interiorOptions.couroCardamon,
      interiorOptions.couroBlond,
      interiorOptions.navy,
    ],
  },
  {
    model: 'XC90',
    version: 'Ultra Dark',
    colors: [
      colorPalette.mulberryRed,
      colorPalette.onyxBlack,
      colorPalette.vapourGrey,
      colorPalette.forestLake,
      colorPalette.aurorasilver,
      colorPalette.brightDusk,
      colorPalette.crystalWhite,
      colorPalette.denimBlue,
    ],
    wheels: [{ name: 'Sport', size: '21"' }],
    interiors: [
      interiorOptions.couroCharcoal,
      interiorOptions.couroCardamon,
      interiorOptions.couroBlond,
      interiorOptions.navy,
    ],
  },
];

// EX90 Configurations
const ex90Configs: VehicleConfig[] = [
  {
    model: 'EX90',
    version: 'Ultra Twin Motor',
    colors: [
      colorPalette.mulberryRed,
      colorPalette.onyxBlack,
      colorPalette.vapourGrey,
      colorPalette.platinumGrey,
      colorPalette.aurorasilver,
      colorPalette.sandDune,
      colorPalette.crystalWhite,
      colorPalette.denimBlue,
    ],
    wheels: [{ name: 'Premium', size: '22"' }],
    interiors: [
      interiorOptions.couroCharcoal,
      interiorOptions.couroCardamon,
      interiorOptions.couroBlond,
    ],
  },
];

// All configurations
export const allConfigurations: VehicleConfig[] = [
  ...ex30Configs,
  ...ec40Configs,
  ...ex40Configs,
  ...xc60Configs,
  ...xc90Configs,
  ...ex90Configs,
];

// Get available models
export const availableModels = ['EX30', 'EC40', 'EX40', 'XC60', 'XC90', 'EX90'];

// Get versions for a model
export function getVersionsForModel(model: string): string[] {
  return allConfigurations
    .filter(c => c.model === model)
    .map(c => c.version);
}

// Get configuration for model and version
export function getConfiguration(model: string, version: string): VehicleConfig | undefined {
  return allConfigurations.find(c => c.model === model && c.version === version);
}
