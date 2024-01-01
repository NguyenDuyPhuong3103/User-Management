import { object, string, TypeOf, z } from 'zod';
import { RoleEnumType } from '../models/user';

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: 'firstName is required',
    }),
    lastName: string({
        required_error: 'lastName is required',
      }),
    email: string({
      required_error: 'Email address is required',
    }).email('Invalid email address'),
    password: string({
      required_error: 'Password is required',
    })
      .min(6, 'Password must be more than 6 characters')
      .max(32, 'Password must be less than 32 characters'),
    passwordConfirm: string({
      required_error: 'Please confirm your password',
    }),
    role: z.optional(z.nativeEnum(RoleEnumType)),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match',
  }),
});

export const loginUserSchema = object({
  body: object({
    email: string({
      required_error: 'Email address is required',
    }).email('Invalid email address'),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Invalid email or password'),
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>['body'],
  'passwordConfirm'
>;

export type LoginUserSchema = Omit<
  TypeOf<typeof loginUserSchema>['body'],
  'firstName, lastName, passwordConfirm'
>;

export type LoginUserInput = TypeOf<typeof loginUserSchema>['body'];
