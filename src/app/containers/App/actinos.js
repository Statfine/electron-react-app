import {
  REFRESH_TOKEM,
} from './constants';

export function refreshToken() {
  return {
    type: REFRESH_TOKEM,
  };
}