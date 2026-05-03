/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppConcept, User, Bid } from './types';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    email: 'creator@example.com',
    name: 'Alex Creator',
    role: 'CREATOR',
  },
  {
    id: 'u2',
    email: 'builder@example.com',
    name: 'Sam Builder',
    role: 'BUILDER',
  },
  {
    id: 'u3',
    email: 'company@niche.com',
    name: 'Niche Corp Tech',
    role: 'COMPANY',
  },
];

export const MOCK_CONCEPTS: AppConcept[] = [
  {
    id: 'c1',
    title: 'NichePro SaaS Architect',
    oneLiner: 'Turn manual legal workflows into automated AI engines for boutique firms.',
    description: 'A deep dive into 50+ manual legal tasks and how AI can automate them safely.',
    niche: 'Legal Tech',
    status: 'MARKETPLACE',
    creatorId: 'u1',
    isStarConcept: true,
    publicTeaser: 'Automating the unautomatable legal micro-tasks.',
    createdAt: '2026-04-01T10:00:00Z',
    updatedAt: '2026-04-15T10:00:00Z',
    revenueProof: {
      totalRevenue: 5000,
      proofBadgeUrl: 'https://placehold.co/100x100?text=Verified',
    }
  },
  {
    id: 'c2',
    title: 'EcoLogistics Optimizer',
    oneLiner: 'AI-driven route planning for zero-emission delivery fleets.',
    description: 'Specific algorithms for electric vehicle range constraints in urban delivery.',
    niche: 'Logistics',
    status: 'CAMPING',
    creatorId: 'u1',
    isStarConcept: false,
    publicTeaser: 'Green logistics, optimized for speed.',
    createdAt: '2026-04-10T10:00:00Z',
    updatedAt: '2026-04-20T10:00:00Z',
  },
  {
    id: 'c3',
    title: 'MedRecord AI Scribe',
    oneLiner: 'Voice-to-structured-data for emergency room documentation.',
    description: 'Highly sensitive, HIPAA-ready documentation engine for high-pressure medical environments.',
    niche: 'Health Tech',
    status: 'BRAINSTORMING',
    creatorId: 'u1',
    isStarConcept: false,
    publicTeaser: 'Focus on the patient, not the paperwork.',
    createdAt: '2026-05-01T10:00:00Z',
    updatedAt: '2026-05-03T10:00:00Z',
  }
];

export const MOCK_BIDS: Bid[] = [
  {
    id: 'b1',
    conceptId: 'c2',
    companyId: 'u3',
    amount: 15000,
    message: 'We have 200 EV vans and need this yesterday. Ready to deploy as launch partner.',
    status: 'PENDING',
    bidQualityScore: 92,
    createdAt: '2026-05-02T14:00:00Z',
  }
];
