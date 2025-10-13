import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DiagramChange {
  coordinates: any;
  entityId: string;
  entityType: string;
  actionName: string;
  actionGroupId: string;
  actionDetails: string;
  sequenceNumber: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root',
})
export class DiagramStorageService {
  private readonly STORAGE_KEY = 'bpmn_diagram_changes';
  private readonly WORKFLOW_PREFIX = 'workflow_';

  private hasUnsavedChangesSubject = new BehaviorSubject<boolean>(false);
  public hasUnsavedChanges$ = this.hasUnsavedChangesSubject.asObservable();

  constructor() {}

  /**
   * Store diagram changes temporarily in localStorage
   */
  storeChanges(workflowId: string, change: DiagramChange): void {
    const key = this.getStorageKey(workflowId);
    const existingChanges = this.getStoredChanges(workflowId);

    // Add new change to existing changes
    existingChanges.push(change);

    // Store in localStorage
    localStorage.setItem(key, JSON.stringify(existingChanges));

    // Update the has unsaved changes flag
    this.hasUnsavedChangesSubject.next(true);
  }

  /**
   * Get all stored changes for a workflow
   */
  getStoredChanges(workflowId: string): DiagramChange[] {
    const key = this.getStorageKey(workflowId);
    const stored = localStorage.getItem(key);

    if (!stored) {
      return [];
    }

    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error('Error parsing stored diagram changes:', error);
      return [];
    }
  }

  /**
   * Clear all stored changes for a workflow
   */
  clearChanges(workflowId: string): void {
    const key = this.getStorageKey(workflowId);
    localStorage.removeItem(key);
    this.hasUnsavedChangesSubject.next(false);
  }

  /**
   * Get the latest change for a workflow
   */
  getLatestChange(workflowId: string): DiagramChange | null {
    const changes = this.getStoredChanges(workflowId);
    return changes.length > 0 ? changes[changes.length - 1] : null;
  }

  /**
   * Check if there are unsaved changes for a workflow
   */
  hasUnsavedChanges(workflowId: string): boolean {
    const changes = this.getStoredChanges(workflowId);
    return changes.length > 0;
  }

  /**
   * Get storage key for a specific workflow
   */
  private getStorageKey(workflowId: string): string {
    return `${this.STORAGE_KEY}_${this.WORKFLOW_PREFIX}${workflowId}`;
  }

  /**
   * Clear all diagram changes from localStorage (cleanup)
   */
  clearAllChanges(): void {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith(this.STORAGE_KEY)) {
        localStorage.removeItem(key);
      }
    });
    this.hasUnsavedChangesSubject.next(false);
  }

  /**
   * Get storage size for debugging
   */
  getStorageSize(workflowId: string): number {
    const key = this.getStorageKey(workflowId);
    const stored = localStorage.getItem(key);
    return stored ? stored.length : 0;
  }
}
