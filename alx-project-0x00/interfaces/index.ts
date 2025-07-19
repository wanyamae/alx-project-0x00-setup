import * as React from 'react';

export interface PillProps {
    title: string;
}

export interface ButtonProps {
    title: string;
    style: React.CSSProperties;
    className?: string;
}