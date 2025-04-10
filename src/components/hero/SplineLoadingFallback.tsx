import React from 'react';
import { UI_TEXT } from './hero.constants';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SplineLoadingFallback = () => (
  <div
    className={cn(
        "absolute inset-0 flex items-center justify-center",
        "bg-background/50 dark:bg-neutral-900/50 backdrop-blur-sm",
        "gap-2" 
    )}
    aria-label={UI_TEXT.splineLoadingAria} 
    role="status" 
    data-testid="spline-fallback"
  >
    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />

    <p className="text-muted-foreground text-sm font-medium">
        Loading Scene...
    </p>
  </div>
);