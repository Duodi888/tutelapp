import { z } from 'zod'

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede superar 100 caracteres'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  phone: z
    .string()
    .min(7, 'El teléfono debe tener al menos 7 dígitos')
    .max(15, 'El teléfono no puede superar 15 dígitos')
    .regex(/^[\d\s\+\-\(\)]+$/, 'El teléfono solo puede contener números y símbolos'),
  personType: z.enum(['NATURAL', 'JURIDICA'], {
    required_error: 'Selecciona el tipo de persona',
  }),
  rightViolated: z
    .string()
    .min(1, 'Selecciona el derecho vulnerado'),
  entity: z
    .string()
    .min(2, 'Ingresa la entidad involucrada')
    .max(200, 'La entidad no puede superar 200 caracteres'),
  urgency: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'], {
    required_error: 'Selecciona el nivel de urgencia',
  }),
  description: z
    .string()
    .min(20, 'La descripción debe tener al menos 20 caracteres')
    .max(2000, 'La descripción no puede superar 2000 caracteres'),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
  acceptDataTreatment: z.boolean().refine((val) => val === true, {
    message: 'Debes autorizar el tratamiento de datos personales (Ley 1581/2012)',
  }),
})

export type LeadFormData = z.infer<typeof leadSchema>

export const loginSchema = z.object({
  email: z.string().email('Ingresa un correo electrónico válido'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
})

export type LoginFormData = z.infer<typeof loginSchema>

export const caseSchema = z.object({
  title: z
    .string()
    .min(5, 'El título debe tener al menos 5 caracteres')
    .max(200, 'El título no puede superar 200 caracteres'),
  description: z
    .string()
    .min(20, 'La descripción debe tener al menos 20 caracteres')
    .max(5000, 'La descripción no puede superar 5000 caracteres'),
  type: z.enum([
    'TUTELA',
    'DERECHO_PETICION',
    'HABEAS_CORPUS',
    'ACCION_CUMPLIMIENTO',
    'ACCION_POPULAR',
    'ACCION_GRUPO',
  ], {
    required_error: 'Selecciona el tipo de acción',
  }),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  clientId: z.string().min(1, 'Selecciona el cliente'),
  lawyerId: z.string().optional(),
})

export type CaseFormData = z.infer<typeof caseSchema>

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100),
  email: z.string().email('Ingresa un correo electrónico válido'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'La contraseña debe contener al menos una mayúscula, una minúscula y un número'
    ),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
})

export type RegisterFormData = z.infer<typeof registerSchema>
