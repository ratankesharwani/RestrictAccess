import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  authService :AuthService;
  const role = AuthService.getRole();
  return true;
};
