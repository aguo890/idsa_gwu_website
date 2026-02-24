import { useQuery } from '@tanstack/react-query';
import { MOCK_LAB_RESOURCES } from '../data/mockResources';
import type { LabResource } from '../types/resource';

/**
 * fetchMockLabData
 * Simulates an API call with latency.
 */
async function fetchMockLabData(): Promise<LabResource[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_LAB_RESOURCES;
}

/**
 * useLabStatus Hook
 * Implements performant, real-time-simulated status tracking.
 * Features:
 * - 15s polling for "real-time" feel.
 * - 10s staleTime to prevent excessive re-renders.
 * - TanStack Query for caching and sync.
 */
export function useLabStatus() {
    return useQuery({
        queryKey: ['labEquipmentStatus'],
        queryFn: fetchMockLabData,
        refetchInterval: 15000,
        staleTime: 10000,
    });
}
