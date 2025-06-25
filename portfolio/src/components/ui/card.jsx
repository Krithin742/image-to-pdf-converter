// src/components/ui/card.jsx
import React from 'react';

export function Card({ children }) {
  return <div style={{ padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
