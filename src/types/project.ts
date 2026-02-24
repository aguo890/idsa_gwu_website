export type SocialImpactPillar =
    | 'Healthcare'
    | 'Sustainability'
    | 'Accessibility'
    | 'Social Justice'
    | 'Education'
    | 'Community';

export type AwardLevel =
    | 'Undergraduate Finalist'
    | 'Undergraduate Winner'
    | 'Graduate Finalist'
    | 'Graduate Winner'
    | 'District Representative';

export interface StudentMember {
    id: string;
    name: string;
    major: string;
    graduationYear: number;
    portfolioURL?: string;
    linkedinURL?: string;
}

export interface IndustrialDesignProject {
    id: string;
    title: string;
    abstract: string;
    socialImpactPillar: SocialImpactPillar;
    primaryImageURL: string;
    galleryURLs: string[];
    processVideoURL?: string;
    authors: StudentMember[];
    collaboratingDisciplines: string[];
    toolsUtilized: string[];
    metadataTags: string[];
    isSMASubmission: boolean;
    awardLevel?: AwardLevel;
}
