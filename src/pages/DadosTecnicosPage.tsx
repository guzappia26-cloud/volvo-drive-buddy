import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ExternalLink, ChevronDown, Zap, Gauge, Battery, Timer, CircleDot } from 'lucide-react';
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
  availableTechnicalModels,
  getTechnicalDataForModel,
} from '@/data/technicalData';

export default function DadosTecnicosPage() {
  const [selectedModel, setSelectedModel] = useState<string>('');

  const modelData = useMemo(
    () => (selectedModel ? getTechnicalDataForModel(selectedModel) : null),
    [selectedModel]
  );

  const specIcons: Record<string, React.ReactNode> = {
    power: <Zap className="w-4 h-4" />,
    battery: <Battery className="w-4 h-4" />,
    acceleration: <Gauge className="w-4 h-4" />,
    autonomy: <Timer className="w-4 h-4" />,
    wheels: <CircleDot className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title="Dados Técnicos" showBack />

      <div className="container px-4 py-6">
        {/* Model Selection */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-full h-14 text-lg">
              <SelectValue placeholder="Selecione o modelo Volvo" />
            </SelectTrigger>
            <SelectContent>
              {availableTechnicalModels.map(model => (
                <SelectItem key={model} value={model}>
                  Volvo {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        <AnimatePresence mode="wait">
          {modelData && (
            <motion.div
              key="data"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Technical Specs Table */}
              <div className="volvo-card overflow-hidden">
                <div className="bg-gradient-volvo text-primary-foreground p-4">
                  <h2 className="text-xl font-bold">Volvo {selectedModel}</h2>
                  <p className="text-sm opacity-80">Especificações por versão</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-medium text-muted-foreground">
                          Especificação
                        </th>
                        {modelData.specs.map(spec => (
                          <th key={spec.version} className="text-center p-4 font-semibold">
                            {spec.version}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">
                          <div className="flex items-center gap-2">
                            {specIcons.power}
                            Potência
                          </div>
                        </td>
                        {modelData.specs.map(spec => (
                          <td key={spec.version} className="p-4 text-center font-semibold text-primary">
                            {spec.power}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">
                          <div className="flex items-center gap-2">
                            {specIcons.battery}
                            Bateria
                          </div>
                        </td>
                        {modelData.specs.map(spec => (
                          <td key={spec.version} className="p-4 text-center">
                            {spec.battery}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">
                          <div className="flex items-center gap-2">
                            {specIcons.acceleration}
                            0-100 km/h
                          </div>
                        </td>
                        {modelData.specs.map(spec => (
                          <td key={spec.version} className="p-4 text-center">
                            {spec.acceleration}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">
                          <div className="flex items-center gap-2">
                            {specIcons.autonomy}
                            Autonomia
                          </div>
                        </td>
                        {modelData.specs.map(spec => (
                          <td key={spec.version} className="p-4 text-center font-semibold text-success">
                            {spec.autonomy}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">
                          <div className="flex items-center gap-2">
                            {specIcons.wheels}
                            Rodas
                          </div>
                        </td>
                        {modelData.specs.map(spec => (
                          <td key={spec.version} className="p-4 text-center">
                            {spec.wheels}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* PHEV note */}
                {(selectedModel === 'XC60' || selectedModel === 'XC90') && (
                  <div className="p-4 bg-muted/30 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      * Autonomia elétrica em modo puramente elétrico (PHEV)
                    </p>
                  </div>
                )}
              </div>

              {/* PDF Link */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full h-14"
                  onClick={() => window.open(modelData.pdfUrl, '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Ver Ficha Técnica Completa
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!modelData && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <ChevronDown className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-muted-foreground">
              Consulte os dados técnicos
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Selecione um modelo para ver as especificações
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
