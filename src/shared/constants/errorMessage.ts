type ErrorType = 'UNKNOWN' | 'BAD_REQUEST' | 'UNAUTHORIZED' | 'EXCEEDED' | 'NOTFOUND' | 'SERVER';

export const ApplicationError: Record<ErrorType, string> = {
  UNKNOWN: '알 수 없는 오류 입니다.',
  BAD_REQUEST: '잘못된 요청 입니다.',
  UNAUTHORIZED: '인증되지 않은 사용자 입니다.',
  EXCEEDED: '요청 횟수를 초과했습니다. 관리자에게 문의해주세요.',
  NOTFOUND: '해당 데이터를 찾을 수 없습니다.',
  SERVER: '서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
};
