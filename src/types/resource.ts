export type EquipmentCategory =
    | 'Fabrication'
    | 'Electronics'
    | 'Textiles'
    | 'General'
    | 'Waste Lab';

export type EquipmentStatus =
    | 'Available'
    | 'In Use'
    | 'Maintenance'
    | 'Offline';

export interface LabResource {
    id: string;
    name: string;
    category: EquipmentCategory;
    status: EquipmentStatus;
    location: string;
    trainingRequired: boolean;
    documentationURL?: string;
    lastMaintained?: string;
}
