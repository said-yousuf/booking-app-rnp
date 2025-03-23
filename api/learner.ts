import { api } from '@/lib/http';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  address: string;
}

export function registerLearner(payload: SignUpFormData) {
  return api.patch('user/learner/sign-up', payload);
}
