import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL = 'Tutelapp <no-reply@tutelapp.co>'

export async function welcomeEmail(name: string, email: string): Promise<void> {
  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido a Tutelapp</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="color: #f59e0b; margin: 0; font-size: 28px;">⚖️ Tutelapp</h1>
    <p style="color: #e2e8f0; margin: 5px 0 0;">Defensa de Derechos Constitucionales</p>
  </div>

  <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <h2 style="color: #1e3a5f;">Hola, ${name}!</h2>

    <p>Hemos recibido tu solicitud de evaluación gratuita. Nuestro equipo de abogados especializados en derechos constitucionales revisará tu caso y se pondrá en contacto contigo en las próximas <strong>24 horas hábiles</strong>.</p>

    <div style="background: #eff6ff; border-left: 4px solid #1d4ed8; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h3 style="color: #1e3a5f; margin: 0 0 10px;">¿Qué sigue?</h3>
      <ol style="margin: 0; padding-left: 20px;">
        <li>Nuestros abogados analizarán tu caso</li>
        <li>Te contactaremos al número y email proporcionado</li>
        <li>Realizaremos una consulta inicial sin costo</li>
        <li>Te presentaremos la estrategia legal más adecuada</li>
      </ol>
    </div>

    <p style="color: #6b7280; font-size: 14px; border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 20px;">
      <strong>Importante:</strong> La información proporcionada es confidencial y está protegida bajo el secreto profesional del abogado y la Ley 1581 de 2012.
    </p>

    <div style="text-align: center; margin: 25px 0;">
      <a href="${process.env.NEXTAUTH_URL}/evaluacion" style="background: #f59e0b; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Ver más información</a>
    </div>
  </div>

  <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; text-align: center;">
    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
      © ${new Date().getFullYear()} Tutelapp. Todos los derechos reservados.<br>
      Bogotá, Colombia | Ley 1581 de 2012 - Habeas Data<br>
      <a href="${process.env.NEXTAUTH_URL}/privacidad" style="color: #6b7280;">Política de Privacidad</a> |
      <a href="${process.env.NEXTAUTH_URL}/terminos" style="color: #6b7280;">Términos y Condiciones</a>
    </p>
  </div>
</body>
</html>
  `

  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: '✅ Recibimos tu solicitud - Tutelapp',
    html,
  })
}

export async function caseUpdateEmail(
  name: string,
  caseTitle: string,
  status: string
): Promise<void> {
  const statusLabels: Record<string, string> = {
    PENDING: 'Pendiente de asignación',
    IN_PROGRESS: 'En progreso',
    COMPLETED: 'Completado',
    CLOSED: 'Cerrado',
  }

  const statusColors: Record<string, string> = {
    PENDING: '#f59e0b',
    IN_PROGRESS: '#3b82f6',
    COMPLETED: '#10b981',
    CLOSED: '#6b7280',
  }

  const statusLabel = statusLabels[status] ?? status
  const statusColor = statusColors[status] ?? '#6b7280'

  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Actualización de tu caso - Tutelapp</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="color: #f59e0b; margin: 0; font-size: 28px;">⚖️ Tutelapp</h1>
    <p style="color: #e2e8f0; margin: 5px 0 0;">Actualización de tu caso</p>
  </div>

  <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <h2 style="color: #1e3a5f;">Hola, ${name}!</h2>

    <p>Te informamos que ha habido una actualización en tu caso:</p>

    <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
      <h3 style="color: #1e3a5f; margin: 0 0 10px;">${caseTitle}</h3>
      <div style="display: inline-block; background: ${statusColor}20; color: ${statusColor}; padding: 4px 12px; border-radius: 20px; font-weight: bold; font-size: 14px; border: 1px solid ${statusColor}40;">
        ${statusLabel}
      </div>
    </div>

    <p>Para ver todos los detalles y el seguimiento completo de tu caso, ingresa a tu panel de usuario.</p>

    <div style="text-align: center; margin: 25px 0;">
      <a href="${process.env.NEXTAUTH_URL}/dashboard" style="background: #1e3a5f; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Ver mi caso</a>
    </div>
  </div>

  <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; text-align: center;">
    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
      © ${new Date().getFullYear()} Tutelapp | Ley 1581 de 2012<br>
      <a href="${process.env.NEXTAUTH_URL}/privacidad" style="color: #6b7280;">Política de Privacidad</a>
    </p>
  </div>
</body>
</html>
  `

  await resend.emails.send({
    from: FROM_EMAIL,
    to: name,
    subject: `📋 Actualización de tu caso: ${caseTitle}`,
    html,
  })
}

export async function leadConfirmationEmail(
  name: string,
  rightViolated: string,
  toEmail: string
): Promise<void> {
  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Confirmación de solicitud - Tutelapp</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="color: #f59e0b; margin: 0; font-size: 28px;">⚖️ Tutelapp</h1>
    <p style="color: #e2e8f0; margin: 5px 0 0;">Confirmación de solicitud</p>
  </div>

  <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
    <h2 style="color: #1e3a5f;">Hola, ${name}!</h2>

    <p>Hemos recibido tu solicitud de evaluación sobre: <strong>${rightViolated}</strong>.</p>

    <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <p style="margin: 0; color: #065f46; font-weight: bold;">✅ Tu solicitud fue registrada exitosamente</p>
      <p style="margin: 5px 0 0; color: #047857;">Un abogado especializado se comunicará contigo en máximo 24 horas hábiles.</p>
    </div>

    <p>Recuerda que nuestra evaluación inicial es completamente <strong>gratuita y sin compromiso</strong>.</p>

    <p style="color: #6b7280; font-size: 14px; border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 20px;">
      Toda la información compartida es confidencial y está protegida por el secreto profesional y la Ley 1581 de 2012 (Habeas Data).
    </p>
  </div>

  <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; text-align: center;">
    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
      © ${new Date().getFullYear()} Tutelapp | Bogotá, Colombia<br>
      Ley 1581 de 2012 - Protección de Datos Personales
    </p>
  </div>
</body>
</html>
  `

  await resend.emails.send({
    from: FROM_EMAIL,
    to: toEmail,
    subject: '📩 Confirmación: Recibimos tu solicitud de evaluación - Tutelapp',
    html,
  })
}
