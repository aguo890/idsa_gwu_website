/**
 * Strict Brand Governance via TypeScript Literal Types
 * These definitions ensure that naming conventions and color palettes
 * are enforced at compile-time across the entire application.
 */

export type ApprovedGWUColors =
    | 'gw-blue'
    | 'gw-light-blue'
    | 'gw-buff'
    | 'gw-red'
    | 'white';

export type ApprovedChapterNames =
    | 'GWU IDSA'
    | 'IDSA GWU Student Chapter'
    | 'IDSA George Washington University';

export interface BrandConstrainedProps {
    color?: ApprovedGWUColors;
    chapterText?: ApprovedChapterNames;
}
