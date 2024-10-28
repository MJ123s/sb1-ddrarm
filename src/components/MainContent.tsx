import React, { Suspense } from 'react';
import { useTopic } from '../context/TopicContext';
import { LoadingSpinner } from './LoadingSpinner';

const GeometryTools = React.lazy(() => import('./tools/geometry/GeometryTools'));
const AlgebraTools = React.lazy(() => import('./tools/algebra/AlgebraTools'));
const CalculusTools = React.lazy(() => import('./tools/calculus/CalculusTools'));
const TrigonometryTools = React.lazy(() => import('./tools/trigonometry/TrigonometryTools'));

export function MainContent() {
  const { currentTopic } = useTopic();

  return (
    <div className="flex-1 bg-slate-800/20 rounded-lg p-6">
      <Suspense fallback={<LoadingSpinner />}>
        {currentTopic === 'geometry' && <GeometryTools />}
        {currentTopic === 'algebra' && <AlgebraTools />}
        {currentTopic === 'calculus' && <CalculusTools />}
        {currentTopic === 'trigonometry' && <TrigonometryTools />}
      </Suspense>
    </div>
  );
}