import React from 'react';
import { useTranslation } from 'react-i18next';

interface AlertMessageProps {
  type: 'error' | 'info' | 'warning';
  message: string;
}

export function AlertMessage({ type, message }: AlertMessageProps) {
  const { t } = useTranslation();
  const getAlertStyles = () => {
    switch (type) {
      case 'error':
        return {
          borderColor: 'border-primary',
          iconColor: 'text-primary',
          icon: (
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          )
        };
      case 'info':
        return {
          borderColor: 'border-primary',
          iconColor: 'text-primary',
          icon: (
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
          )
        };
      default:
        return {
          borderColor: 'border-yellow-500',
          iconColor: 'text-yellow-500',
          icon: (
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          )
        };
    }
  };

  const styles = getAlertStyles();

  return (
    <div className={`bg-blue50 border-l-4 ${styles.borderColor} p-4 rounded shadow-md my-6`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg className={`h-5 w-5 ${styles.iconColor}`} viewBox="0 0 20 20" fill="currentColor">
            {styles.icon}
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-darkGray">
            {type === 'error' && <span className="font-medium">{t('common.error')}: </span>}
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}