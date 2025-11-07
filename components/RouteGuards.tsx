import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface GuardProps {
  children: React.ReactNode;
}

// Guest routes - redirect to /profile if authenticated
export function GuestGuard({ children }: GuardProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  return <>{children}</>;
}

// Protected routes - redirect to /login if not authenticated
export function ProtectedGuard({ children }: GuardProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// Creator routes - redirect to /login if not authenticated, /profile if not creator
export function CreatorGuard({ children }: GuardProps) {
  const { isAuthenticated, isCreator } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isCreator) {
    return <Navigate to="/profile" replace />;
  }

  return <>{children}</>;
}
