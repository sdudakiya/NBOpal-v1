import React from 'react';
import VisitorCard from './VisitorCard';
import type { VisitorWithStatus } from '../../types/visitor';

interface VisitorListProps {
  visitors: VisitorWithStatus[];
  onCheckOut: (visitorId: string) => void;
}

export default function VisitorList({ visitors, onCheckOut }: VisitorListProps) {
  return (
    <div className="space-y-4">
      {visitors.map((visitor) => (
        <VisitorCard
          key={visitor.id}
          visitor={visitor}
          onCheckOut={onCheckOut}
        />
      ))}
      {visitors.length === 0 && (
        <p className="text-center text-gray-500 py-8">No visitors yet</p>
      )}
    </div>
  );
}