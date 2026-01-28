// Technical specifications data for all Volvo models

export interface TechnicalSpec {
  version: string;
  power: string;
  battery: string;
  acceleration: string;
  autonomy: string;
  wheels: string;
}

export interface ModelTechnicalData {
  model: string;
  specs: TechnicalSpec[];
  pdfUrl: string;
}

export const technicalData: ModelTechnicalData[] = [
  {
    model: 'EX30',
    specs: [
      {
        version: 'Core',
        power: '272 cv',
        battery: '51 kWh',
        acceleration: '5,7s',
        autonomy: '250 km',
        wheels: '18"',
      },
      {
        version: 'Plus',
        power: '272 cv',
        battery: '69 kWh',
        acceleration: '5,3s',
        autonomy: '338 km',
        wheels: '19"',
      },
      {
        version: 'Ultra',
        power: '428 cv',
        battery: '69 kWh',
        acceleration: '3,6s',
        autonomy: '310 km',
        wheels: '20"',
      },
      {
        version: 'Cross Country',
        power: '272 cv',
        battery: '69 kWh',
        acceleration: '5,3s',
        autonomy: '330 km',
        wheels: '19"',
      },
    ],
    pdfUrl: '/pdfs/ex30-ficha.pdf',
  },
  {
    model: 'EC40',
    specs: [
      {
        version: 'Plus',
        power: '238 cv',
        battery: '70 kWh',
        acceleration: '7,4s',
        autonomy: '393 km',
        wheels: '19"',
      },
      {
        version: 'Ultra',
        power: '442 cv',
        battery: '82 kWh',
        acceleration: '4,6s',
        autonomy: '404 km',
        wheels: '20"',
      },
      {
        version: 'Black Edition',
        power: '442 cv',
        battery: '82 kWh',
        acceleration: '4,6s',
        autonomy: '395 km',
        wheels: '20"',
      },
    ],
    pdfUrl: 'https://www.volvocars.com/br/v/car-configurator/c40-electric',
  },
  {
    model: 'EX40',
    specs: [
      {
        version: 'Plus',
        power: '238 cv',
        battery: '70 kWh',
        acceleration: '7,4s',
        autonomy: '393 km',
        wheels: '19"',
      },
      {
        version: 'Ultra',
        power: '442 cv',
        battery: '82 kWh',
        acceleration: '4,6s',
        autonomy: '404 km',
        wheels: '20"',
      },
      {
        version: 'Black Edition',
        power: '442 cv',
        battery: '82 kWh',
        acceleration: '4,6s',
        autonomy: '395 km',
        wheels: '20"',
      },
    ],
    pdfUrl: 'https://www.volvocars.com/br/v/car-configurator/xc40-electric',
  },
  {
    model: 'XC60',
    specs: [
      {
        version: 'Plus',
        power: '462 cv',
        battery: '19 kWh',
        acceleration: '4,8s',
        autonomy: '60 km*',
        wheels: '19"',
      },
      {
        version: 'Ultra',
        power: '462 cv',
        battery: '19 kWh',
        acceleration: '4,8s',
        autonomy: '60 km*',
        wheels: '20"',
      },
      {
        version: 'Ultra Dark',
        power: '462 cv',
        battery: '19 kWh',
        acceleration: '4,8s',
        autonomy: '60 km*',
        wheels: '21"',
      },
      {
        version: 'Polestar',
        power: '462 cv',
        battery: '19 kWh',
        acceleration: '4,8s',
        autonomy: '60 km*',
        wheels: '22"',
      },
    ],
    pdfUrl: 'https://www.volvocars.com/br/v/car-configurator/xc60',
  },
  {
    model: 'XC90',
    specs: [
      {
        version: 'Plus',
        power: '462 cv',
        battery: '18,8 kWh',
        acceleration: '4,8s',
        autonomy: '47 km*',
        wheels: '19"',
      },
      {
        version: 'Ultra',
        power: '462 cv',
        battery: '18,8 kWh',
        acceleration: '4,8s',
        autonomy: '47 km*',
        wheels: '20"',
      },
      {
        version: 'Ultra Dark',
        power: '462 cv',
        battery: '18,8 kWh',
        acceleration: '4,8s',
        autonomy: '47 km*',
        wheels: '21"',
      },
    ],
    pdfUrl: 'https://www.volvocars.com/br/v/car-configurator/xc90',
  },
  {
    model: 'EX90',
    specs: [
      {
        version: 'Core Twin Motor',
        power: '408 cv',
        battery: '111 kWh',
        acceleration: '5,8s',
        autonomy: '459 km',
        wheels: '21"',
      },
      {
        version: 'Ultra Twin Motor',
        power: '517 cv',
        battery: '111 kWh',
        acceleration: '4,9s',
        autonomy: '459 km',
        wheels: '22"',
      },
    ],
    pdfUrl: '/pdfs/ex90-ficha.pdf',
  },
];

export const availableTechnicalModels = technicalData.map(m => m.model);

export function getTechnicalDataForModel(model: string): ModelTechnicalData | undefined {
  return technicalData.find(m => m.model === model);
}
