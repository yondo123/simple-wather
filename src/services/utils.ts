import { SUCCESS_STATUS } from '@shared/constants/api';
import { StatusCodes } from '@shared/constants/errorMessage';

const isErrorStatus = (status: number) => {
  if (status === SUCCESS_STATUS) {
    return false;
  }
  if (Object.hasOwnProperty.call(StatusCodes, status)) {
    return true;
  }
  return false;
};

export const getErrorMessage = (status: number): string | null => {
  if (isErrorStatus(status)) {
    const apiErrorMessage = StatusCodes[status];
    if (apiErrorMessage) {
      return apiErrorMessage;
    }
    return '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
  }
  return null;
};
