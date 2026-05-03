/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Role = 'CREATOR' | 'BUILDER' | 'COMPANY' | 'VISITOR';

export interface User {
  id: string;
  email: string;
  role: Role;
  name: string;
  avatarUrl?: string;
}

export type ConceptStatus = 'BRAINSTORMING' | 'DRAFT' | 'MARKETPLACE' | 'CAMPING' | 'BUILDING' | 'RECOUPING' | 'ACTIVE';

export interface AppConcept {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  niche: string;
  status: ConceptStatus;
  creatorId: string;
  isStarConcept: boolean;
  publicTeaser: string;
  companyTeaser?: string;
  revenueProof?: {
    totalRevenue: number;
    proofBadgeUrl: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Bid {
  id: string;
  conceptId: string;
  companyId: string;
  amount: number;
  message: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  bidQualityScore: number; // 0-100
  createdAt: string;
}

export interface BuildPack {
  id: string;
  conceptId: string;
  builderId?: string;
  sections: {
    title: string;
    content: string;
    id: string;
    isLocked: boolean;
  }[];
  implementationSequence: string[];
  acceptanceCriteria: string[];
}

export interface Milestone {
  id: string;
  conceptId: string;
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE';
  dueDate: string;
}

export interface RevenueRecoupment {
  id: string;
  conceptId: string;
  companyId: string;
  bidAmount: number;
  recoupedAmount: number;
  isFullyRecouped: boolean;
  splitActivationDate?: string;
}
