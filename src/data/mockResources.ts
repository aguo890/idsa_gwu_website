import type { LabResource } from '../types/resource';

export const MOCK_LAB_RESOURCES: LabResource[] = [
    // Fabrication
    { id: 'f1', name: 'PRUSA i3 MK3S+ (A)', category: 'Fabrication', status: 'In Use', location: 'Fabrication Zone', trainingRequired: true },
    { id: 'f2', name: 'PRUSA i3 MK3S+ (B)', category: 'Fabrication', status: 'Available', location: 'Fabrication Zone', trainingRequired: true },
    { id: 'f3', name: 'Makerbot MethodX', category: 'Fabrication', status: 'Maintenance', location: 'Fabrication Zone', trainingRequired: true },
    { id: 'f4', name: 'Vinyl Cutter (Roland)', category: 'Fabrication', status: 'Available', location: 'Post-Process Area', trainingRequired: false },

    // Electronics
    { id: 'e1', name: 'Soldering Station A', category: 'Electronics', status: 'Available', location: 'Workbench B', trainingRequired: true },
    { id: 'e2', name: 'Soldering Station B', category: 'Electronics', status: 'In Use', location: 'Workbench B', trainingRequired: true },
    { id: 'e3', name: 'Rigol Oscilloscope', category: 'Electronics', status: 'Available', location: 'Workbench B', trainingRequired: true },

    // Textiles/Community
    { id: 'c1', name: 'Brother Embroidery Machine', category: 'Textiles', status: 'Available', location: 'Textile Corner', trainingRequired: true },
    { id: 'c2', name: 'Standard Sewing Machine', category: 'Textiles', status: 'Available', location: 'Textile Corner', trainingRequired: false },
    { id: 'c3', name: 'Product Photo Booth', category: 'General', status: 'Available', location: 'M06 Main Space', trainingRequired: false },
    { id: 'w1', name: 'Waste Lab DIY Shredder', category: 'Waste Lab', status: 'Offline', location: 'Waste Lab Area', trainingRequired: true },
];
