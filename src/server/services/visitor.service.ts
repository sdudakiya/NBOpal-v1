import type { Visitor, VisitorWithStatus } from '../../types/visitor';

export class VisitorService {
  private visitors: VisitorWithStatus[] = [];

  async checkIn(visitorData: Visitor): Promise<VisitorWithStatus> {
    const newVisitor: VisitorWithStatus = {
      ...visitorData,
      id: crypto.randomUUID(),
      checkInTime: new Date(),
      status: 'checked-in'
    };
    
    this.visitors.unshift(newVisitor);
    return newVisitor;
  }

  async checkOut(visitorId: string): Promise<VisitorWithStatus> {
    const visitorIndex = this.visitors.findIndex(v => v.id === visitorId);
    if (visitorIndex === -1) {
      throw new Error('Visitor not found');
    }

    const updatedVisitor = {
      ...this.visitors[visitorIndex],
      status: 'checked-out' as const,
      checkOutTime: new Date()
    };

    this.visitors[visitorIndex] = updatedVisitor;
    return updatedVisitor;
  }

  async getAll(): Promise<VisitorWithStatus[]> {
    // Return a copy of the array to prevent direct mutations
    return [...this.visitors];
  }
}