import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, CircleDot, Armchair, Download, ChevronDown, Car } from 'lucide-react';
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  availableModels,
  getVersionsForModel,
  getConfiguration,
  type ColorOption,
  type WheelOption,
  type InteriorOption,
} from '@/data/configuratorData';

export default function ConfiguradorPage() {
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedVersion, setSelectedVersion] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [selectedWheel, setSelectedWheel] = useState<WheelOption | null>(null);
  const [selectedInterior, setSelectedInterior] = useState<InteriorOption | null>(null);

  const versions = useMemo(
    () => (selectedModel ? getVersionsForModel(selectedModel) : []),
    [selectedModel]
  );

  const config = useMemo(
    () => (selectedModel && selectedVersion ? getConfiguration(selectedModel, selectedVersion) : null),
    [selectedModel, selectedVersion]
  );

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    setSelectedVersion('');
    setSelectedColor(null);
    setSelectedWheel(null);
    setSelectedInterior(null);
  };

  const handleVersionChange = (version: string) => {
    setSelectedVersion(version);
    const newConfig = getConfiguration(selectedModel, version);
    if (newConfig) {
      setSelectedColor(newConfig.colors[0] || null);
      setSelectedWheel(newConfig.wheels[0] || null);
      setSelectedInterior(newConfig.interiors[0] || null);
    }
  };

  const isConfigComplete = selectedModel && selectedVersion && selectedColor && selectedWheel && selectedInterior;

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Configurador" showBack />

      <div className="container px-4 py-6">
        {/* Model Selection */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Select value={selectedModel} onValueChange={handleModelChange}>
            <SelectTrigger className="w-full h-14">
              <SelectValue placeholder="Selecione o modelo" />
            </SelectTrigger>
            <SelectContent>
              {availableModels.map(model => (
                <SelectItem key={model} value={model}>
                  Volvo {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedVersion}
            onValueChange={handleVersionChange}
            disabled={!selectedModel}
          >
            <SelectTrigger className="w-full h-14">
              <SelectValue placeholder="Selecione a versão" />
            </SelectTrigger>
            <SelectContent>
              {versions.map(version => (
                <SelectItem key={version} value={version}>
                  {version}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        <AnimatePresence mode="wait">
          {config && (
            <motion.div
              key="config"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Car Preview */}
              <div className="volvo-card p-8 flex flex-col items-center justify-center min-h-[200px]">
                <motion.div
                  className="w-32 h-32 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: selectedColor?.hex || '#1A1A1A' }}
                  animate={{ backgroundColor: selectedColor?.hex || '#1A1A1A' }}
                  transition={{ duration: 0.3 }}
                >
                  <Car className="w-16 h-16 text-primary-foreground/80" />
                </motion.div>
                <h2 className="text-xl font-semibold">
                  Volvo {selectedModel} {selectedVersion}
                </h2>
                {selectedColor && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedColor.name} • {selectedWheel?.size} • {selectedInterior?.name}
                  </p>
                )}
              </div>

              {/* Color Selection */}
              <div className="volvo-card p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Cor Exterior</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {config.colors.map((color, index) => (
                    <motion.button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor?.name === color.name
                          ? 'border-primary ring-2 ring-primary/30'
                          : 'border-border hover:border-primary/50'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selectedColor?.name === color.name && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-primary"
                          layoutId="color-selected"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
                {selectedColor && (
                  <p className="text-sm text-muted-foreground mt-3">
                    {selectedColor.name} {selectedColor.metallic && '(Metálico)'}
                  </p>
                )}
              </div>

              {/* Wheel Selection */}
              <div className="volvo-card p-5">
                <div className="flex items-center gap-2 mb-4">
                  <CircleDot className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Rodas</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {config.wheels.map((wheel, index) => (
                    <motion.button
                      key={wheel.name}
                      onClick={() => setSelectedWheel(wheel)}
                      className={`px-5 py-3 rounded-xl border-2 transition-all ${
                        selectedWheel?.name === wheel.name
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-semibold">{wheel.size}</span>
                      <span className="text-sm opacity-80 ml-2">{wheel.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Interior Selection */}
              <div className="volvo-card p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Armchair className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Interior</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {config.interiors.map((interior, index) => (
                    <motion.button
                      key={interior.name}
                      onClick={() => setSelectedInterior(interior)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
                        selectedInterior?.name === interior.name
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className="w-8 h-8 rounded-full border border-border"
                        style={{ backgroundColor: interior.color }}
                      />
                      <span className="font-medium text-sm">{interior.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              {isConfigComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-gradient-volvo hover:opacity-90 transition-opacity"
                    onClick={() => {
                      window.open(
                        `https://www.volvocars.com/br/v/car-configurator/${selectedModel.toLowerCase()}`,
                        '_blank'
                      );
                    }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Abrir Configurador Volvo
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Abre o configurador oficial para baixar imagens em alta resolução
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!config && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <ChevronDown className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-muted-foreground">
              Configure seu Volvo
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Selecione modelo e versão para começar
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
