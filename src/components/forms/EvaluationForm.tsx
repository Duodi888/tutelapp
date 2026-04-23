'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, type LeadFormData } from '@/lib/validations'
import {
  User,
  Building2,
  Shield,
  FileText,
  Lock,
  Scale,
  TreePine,
  Users,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const STEPS = [
  'Tipo de persona',
  'Derecho vulnerado',
  'Entidad',
  'Urgencia',
  'Tus datos',
]

const RIGHTS = [
  {
    id: 'TUTELA',
    label: 'Acción de Tutela',
    description: 'Derechos fundamentales vulnerados',
    icon: Shield,
    color: 'amber',
  },
  {
    id: 'DERECHO_PETICION',
    label: 'Derecho de Petición',
    description: 'Entidad no responde tus solicitudes',
    icon: FileText,
    color: 'blue',
  },
  {
    id: 'HABEAS_CORPUS',
    label: 'Habeas Corpus',
    description: 'Libertad personal en riesgo',
    icon: Lock,
    color: 'red',
  },
  {
    id: 'ACCION_CUMPLIMIENTO',
    label: 'Acción de Cumplimiento',
    description: 'Autoridad incumple la ley',
    icon: Scale,
    color: 'purple',
  },
  {
    id: 'ACCION_POPULAR',
    label: 'Acción Popular',
    description: 'Daño al medio ambiente o colectivo',
    icon: TreePine,
    color: 'green',
  },
  {
    id: 'ACCION_GRUPO',
    label: 'Acción de Grupo',
    description: 'Daño masivo a grupo de personas',
    icon: Users,
    color: 'orange',
  },
]

const ENTITY_CATEGORIES = [
  'Ministerio',
  'Alcaldía o Gobernación',
  'Hospital o Clínica',
  'EPS o Seguridad Social',
  'Banco o Entidad Financiera',
  'Empresa de Servicios Públicos',
  'Establecimiento Educativo',
  'Otra entidad',
]

const URGENCY_OPTIONS = [
  {
    value: 'CRITICAL' as const,
    label: 'Crítica',
    description: 'Menos de 10 días para actuar',
    color: 'red',
  },
  {
    value: 'HIGH' as const,
    label: 'Alta',
    description: 'Entre 10 y 30 días',
    color: 'orange',
  },
  {
    value: 'MEDIUM' as const,
    label: 'Media',
    description: 'Entre 1 y 3 meses',
    color: 'amber',
  },
  {
    value: 'LOW' as const,
    label: 'Baja',
    description: 'Más de 3 meses',
    color: 'green',
  },
]

const urgencyColors: Record<string, string> = {
  red: 'border-red-300 bg-red-50 text-red-800',
  orange: 'border-orange-300 bg-orange-50 text-orange-800',
  amber: 'border-amber-300 bg-amber-50 text-amber-800',
  green: 'border-green-300 bg-green-50 text-green-800',
}

const rightColors: Record<string, string> = {
  amber: 'border-amber-300 bg-amber-50 text-amber-800',
  blue: 'border-blue-300 bg-blue-50 text-blue-800',
  red: 'border-red-300 bg-red-50 text-red-800',
  purple: 'border-purple-300 bg-purple-50 text-purple-800',
  green: 'border-green-300 bg-green-50 text-green-800',
  orange: 'border-orange-300 bg-orange-50 text-orange-800',
}

export default function EvaluationForm() {
  const [step, setStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      personType: undefined,
      rightViolated: '',
      entity: '',
      urgency: undefined,
      name: '',
      email: '',
      phone: '',
      description: '',
      acceptTerms: false,
      acceptDataTreatment: false,
    },
  })

  const watchedValues = watch()

  const goNext = async () => {
    let fieldsToValidate: (keyof LeadFormData)[] = []
    if (step === 0) fieldsToValidate = ['personType']
    if (step === 1) fieldsToValidate = ['rightViolated']
    if (step === 2) fieldsToValidate = ['entity']
    if (step === 3) fieldsToValidate = ['urgency']

    const valid = await trigger(fieldsToValidate)
    if (valid) setStep((s) => s + 1)
  }

  const onSubmit = async (_data: LeadFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    // Simulate network delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setSubmitSuccess(true)
  }

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 font-serif mb-3">
          ¡Solicitud enviada exitosamente!
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Hemos recibido tu caso. Un abogado especializado se comunicará contigo en las próximas{' '}
          <strong>24 horas hábiles</strong> para hacer una evaluación inicial gratuita.
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6">
          <p className="text-blue-800 text-sm font-medium">
            Revisa tu correo electrónico — te hemos enviado una confirmación con los próximos pasos.
          </p>
        </div>
        <p className="text-xs text-gray-400">
          Tus datos están protegidos bajo la Ley 1581 de 2012 (Habeas Data) y el secreto profesional del abogado.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6">
        <div className="flex items-center justify-between text-white mb-4">
          <span className="text-sm font-medium opacity-80">Paso {step + 1} de {STEPS.length}</span>
          <span className="text-sm font-medium opacity-80">{STEPS[step]}</span>
        </div>
        <div className="w-full bg-blue-800/50 rounded-full h-2">
          <div
            className="bg-amber-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {STEPS.map((s, i) => (
            <span
              key={s}
              className={cn(
                'text-xs transition-colors duration-200',
                i <= step ? 'text-amber-300' : 'text-blue-400'
              )}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 0: Person Type */}
          {step === 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                ¿Quién necesita ayuda?
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Selecciona el tipo de persona para adaptar la evaluación a tu situación.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    value: 'NATURAL' as const,
                    label: 'Persona Natural',
                    description: 'Ciudadano o individuo',
                    icon: User,
                  },
                  {
                    value: 'JURIDICA' as const,
                    label: 'Persona Jurídica',
                    description: 'Empresa u organización',
                    icon: Building2,
                  },
                ].map((option) => {
                  const Icon = option.icon
                  const selected = watchedValues.personType === option.value
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setValue('personType', option.value)}
                      className={cn(
                        'flex flex-col items-center p-8 rounded-xl border-2 transition-all duration-200 cursor-pointer',
                        selected
                          ? 'border-blue-700 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/30'
                      )}
                    >
                      <div
                        className={cn(
                          'p-4 rounded-xl mb-4',
                          selected ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600'
                        )}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <span className="font-semibold text-gray-900">{option.label}</span>
                      <span className="text-sm text-gray-500 mt-1">{option.description}</span>
                    </button>
                  )
                })}
              </div>
              {errors.personType && (
                <p className="mt-3 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.personType.message}
                </p>
              )}
            </div>
          )}

          {/* Step 1: Right Violated */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                ¿Cuál es tu situación?
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Selecciona el tipo de acción legal que mejor describe tu caso.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RIGHTS.map((right) => {
                  const Icon = right.icon
                  const selected = watchedValues.rightViolated === right.id
                  const colorClass = selected ? rightColors[right.color] : 'border-gray-200 bg-white'
                  return (
                    <button
                      key={right.id}
                      type="button"
                      onClick={() => setValue('rightViolated', right.id)}
                      className={cn(
                        'flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left',
                        selected
                          ? colorClass + ' shadow-md'
                          : 'hover:border-gray-300 hover:bg-gray-50 ' + colorClass
                      )}
                    >
                      <div
                        className={cn(
                          'p-2 rounded-lg flex-shrink-0 mt-0.5',
                          selected ? 'bg-white/60' : 'bg-gray-100'
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{right.label}</p>
                        <p className="text-xs opacity-75 mt-0.5">{right.description}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
              {errors.rightViolated && (
                <p className="mt-3 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.rightViolated.message}
                </p>
              )}
            </div>
          )}

          {/* Step 2: Entity */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                ¿Quién vulneró tu derecho?
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Indica la entidad o persona responsable de la situación.
              </p>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de la entidad *
                  </label>
                  <input
                    {...register('entity')}
                    type="text"
                    placeholder="Ej: EPS Sanitas, Alcaldía de Bogotá, Banco Davivienda..."
                    className="input-field"
                  />
                  {errors.entity && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.entity.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoría de la entidad
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ENTITY_CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          const currentEntity = watchedValues.entity
                          if (!currentEntity || ENTITY_CATEGORIES.includes(currentEntity)) {
                            setValue('entity', cat)
                          }
                        }}
                        className={cn(
                          'text-sm px-3 py-1.5 rounded-full border transition-colors duration-200',
                          watchedValues.entity === cat
                            ? 'bg-blue-800 text-white border-blue-800'
                            : 'border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Urgency */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                ¿Qué tan urgente es tu caso?
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                La urgencia determina los plazos procesales y la estrategia legal.
              </p>
              <div className="space-y-3">
                {URGENCY_OPTIONS.map((option) => {
                  const selected = watchedValues.urgency === option.value
                  const colorClass = selected ? urgencyColors[option.color] : 'border-gray-200 bg-white hover:border-gray-300'
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setValue('urgency', option.value)}
                      className={cn(
                        'w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 text-left',
                        colorClass,
                        selected && 'shadow-md'
                      )}
                    >
                      <div>
                        <p className="font-semibold">{option.label}</p>
                        <p className="text-sm opacity-75 mt-0.5">{option.description}</p>
                      </div>
                      {selected && <CheckCircle className="h-5 w-5 flex-shrink-0" />}
                    </button>
                  )
                })}
              </div>
              {errors.urgency && (
                <p className="mt-3 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.urgency.message}
                </p>
              )}
            </div>
          )}

          {/* Step 4: Personal Data */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                Tus datos de contacto
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Usamos tus datos únicamente para contactarte. Están protegidos por la Ley 1581/2012.
              </p>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Tu nombre completo"
                    className="input-field"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="tu@email.com"
                      className="input-field"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+57 300 123 4567"
                      className="input-field"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción del caso *
                  </label>
                  <textarea
                    {...register('description')}
                    rows={4}
                    placeholder="Describe brevemente qué ocurrió, cuándo y cómo afecta tus derechos..."
                    className="input-field resize-none"
                  />
                  {errors.description && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.description.message}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">
                    {watchedValues.description?.length ?? 0}/2000 caracteres
                  </p>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register('acceptTerms')}
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-500 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-600">
                      Acepto los{' '}
                      <Link href="/terminos" target="_blank" className="text-blue-700 underline hover:text-blue-900">
                        Términos y Condiciones
                      </Link>{' '}
                      y la{' '}
                      <Link href="/privacidad" target="_blank" className="text-blue-700 underline hover:text-blue-900">
                        Política de Privacidad
                      </Link>
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <p className="text-sm text-red-600 flex items-center gap-1 ml-7">
                      <AlertCircle className="h-4 w-4" />
                      {errors.acceptTerms.message}
                    </p>
                  )}

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register('acceptDataTreatment')}
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-500 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-600">
                      Autorizo el tratamiento de mis datos personales conforme a la{' '}
                      <strong>Ley 1581 de 2012</strong> (Habeas Data) para los fines descritos.
                    </span>
                  </label>
                  {errors.acceptDataTreatment && (
                    <p className="text-sm text-red-600 flex items-center gap-1 ml-7">
                      <AlertCircle className="h-4 w-4" />
                      {errors.acceptDataTreatment.message}
                    </p>
                  )}
                </div>
              </div>

              {submitError && (
                <div className="mt-5 flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">{submitError}</p>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 0}
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200',
                step === 0
                  ? 'opacity-0 pointer-events-none'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              )}
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={goNext}
                className="btn-primary"
              >
                Continuar
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar evaluación
                    <CheckCircle className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
