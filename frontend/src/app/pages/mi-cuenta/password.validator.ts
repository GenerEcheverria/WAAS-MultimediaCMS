import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl): {[key: string]: boolean} | null {
  const password = control.get('npass');
  const confirmPassword = control.get('cpass');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { 'passwordsDoNotMatch': true };
  }

  return null;
}