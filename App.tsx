import React, { useState, useEffect } from 'react';
import SampleForm from './components/SampleForm';
import HistoryList from './components/HistoryList';
import { getSamples } from './services/storageService';
import { WaterSample } from './types';
import { Waves } from 'lucide-react';

const App: React.FC = () => {
  const [samples, setSamples] = useState<WaterSample[]>([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    setSamples(getSamples());
  }, [refreshTrigger]);

  const handleSubmissionComplete = () => {
    // Trigger a refresh of the list
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-2 rounded-lg shadow-lg shadow-cyan-500/20">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">AquaGuard</h1>
              <span className="text-xs font-medium text-cyan-600 uppercase tracking-wider">Quality Control</span>
            </div>
          </div>
          <div className="hidden sm:block text-xs text-slate-400 font-medium">
             System Status: <span className="text-green-500">Online</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-5 space-y-6">
            <SampleForm onSubmissionComplete={handleSubmissionComplete} />
            
            {/* Info Card */}
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="text-sm font-bold text-blue-900 mb-2">Data Policy</h3>
              <p className="text-xs text-blue-700 leading-relaxed">
                All submissions are geotagged and timestamped automatically. 
                Data is stored locally in this demo version. In a production environment, 
                this would sync to a secure cloud database.
              </p>
            </div>
          </div>

          {/* Right Column: History */}
          <div className="lg:col-span-7">
            <HistoryList samples={samples} />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default App;