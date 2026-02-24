import type { StudentChapterEvent, ProfessionalDesigner } from '../types/event';

export const MOCK_PROFESSIONALS: ProfessionalDesigner[] = [
    { id: 'pro1', name: 'Elena Vance', company: 'IDEO', title: 'Senior Industrial Designer', idsaMember: true },
    { id: 'pro2', name: 'Marcus Thorne', company: 'Anduril', title: 'Hardware Engineer', idsaMember: false },
    { id: 'pro3', name: 'Sia Kothari', company: 'Frog Design', title: 'UX Strategist', idsaMember: true },
];

export const MOCK_EVENTS: StudentChapterEvent[] = [
    {
        id: 'e1',
        eventType: 'Portfolio Review',
        title: 'Spring Portfolio Sprint',
        description: 'Get direct feedback from industry veterans at IDEO and Frog Design. Required for SMA applicants.',
        dateTimestamp: '2025-04-15T18:00:00Z',
        location: 'Virtual',
        guestProfessionals: [MOCK_PROFESSIONALS[0], MOCK_PROFESSIONALS[2]],
        requiresCodeOfConduct: true,
        registrationURL: 'https://luma.lu/gw-idsa-portfolio',
    },
    {
        id: 'e2',
        eventType: 'Workshop',
        title: 'Advanced PRUSA Fabrication',
        description: 'Master multi-material printing and post-processing techniques in the makerspace.',
        dateTimestamp: '2025-03-20T14:00:00Z',
        location: 'Tompkins Hall M06',
        guestProfessionals: [],
        requiresCodeOfConduct: true,
        registrationURL: 'https://luma.lu/gw-idsa-prusa',
    },
];
