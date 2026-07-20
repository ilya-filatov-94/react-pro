import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error !== null && 'status' in error;
}

function isSerializedError(error: unknown): error is SerializedError {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export function getErrorMessage(error: unknown): string {
  if (!error) return 'Неизвестная ошибка';

  if (typeof error === 'string') return error;

  if (isFetchBaseQueryError(error)) {
    if (typeof error.status === 'number') {
      switch (error.status) {
        case 404:
          return 'Запрашиваемые данные не найдены';
        case 500:
          return 'Ошибка сервера. Попробуйте позже';
        default:
          return `Ошибка ${error.status}`;
      }
    }
    return error.error || 'Ошибка соединения с сервером';
  }

  if (isSerializedError(error)) {
    return error.message || 'Неизвестная ошибка';
  }

  return 'Неизвестная ошибка';
}
