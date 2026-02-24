export type EventType =
    | 'Workshop'
    | 'Panel'
    | 'Social'
    | 'Portfolio Review'
    | 'Job Fair'
    | 'Lab Induction';

export type EventLocation =
    | 'Virtual'
    | 'Tompkins Hall M06'
    | 'Corcoran Hall'
    | 'Other';

export interface ProfessionalDesigner {
    id: string;
    name: string;
    company: string;
    title: string;
    idsaMember: boolean;
}

export interface StudentChapterEvent {
    id: string;
    eventType: EventType;
    title: string;
    description: string;
    dateTimestamp: string; // ISO 8601
    location: EventLocation;
    guestProfessionals: ProfessionalDesigner[];
    requiresCodeOfConduct: boolean;
    registrationURL: string;
}
