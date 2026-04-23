import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Plus,
  Calendar,
  MessageSquare,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mi Panel - Tutelapp',
}

const mockCases = [
  {
    id: '1',
    title: 'Tutela contra EPS - Medicamento negado',
    type: 'Acción de Tutela',
    status: 'IN_PROGRESS',
    date: '10 mar 2024',
  },
  {
    id: '2',
    title: 'Derecho de petición - Pensión de vejez',
    type: 'Derecho de Petición',
    status: 'PENDING',
    date: '5 mar 2024',
  },
]

const mockTimeline = [
  { id: '1', desc: 'Escrito de tutela presentado ante el Juzgado 15 Civil del Circuito', date: 'Hoy, 10:30am', type: 'success' },
  { id: '2', desc: 'Documentos recibidos y verificados por el equipo jurídico', date: 'Ayer, 3:15pm', type: 'info' },
  { id: '3', desc: 'Caso asignado al Dr. Rodríguez, especialista en tutelas de salud', date: '8 mar, 11:00am', type: 'info' },
  { id: '4', desc: 'Solicitud de evaluación recibida', date: '5 mar, 9:45am', type: 'default' },
]

const statusConfig: Record<string, { label: string; color: string }> = {
  PENDING: { label: 'Pendiente', color: 'bg-amber-100 text-amber-800' },
  IN_PROGRESS: { label: 'En progreso', color: 'bg-blue-100 text-blue-800' },
  COMPLETED: { label: 'Completado', color: 'bg-green-100 text-green-800' },
  CLOSED: { label: 'Cerrado', color: 'bg-gray-100 text-gray-700' },
}

const timelineColors: Record<string, string> = {
  success: 'bg-green-500',
  info: 'bg-blue-500',
  default: 'bg-gray-300',
}

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 font-serif">Bienvenido a tu panel</h1>
        <p className="text-gray-500 mt-1 text-sm">Aquí puedes hacer seguimiento a tus casos y comunicarte con tu abogado.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Casos activos', value: '2', icon: FileText, color: 'blue' },
          { label: 'En seguimiento', value: '1', icon: Clock, color: 'amber' },
          { label: 'Resueltos', value: '0', icon: CheckCircle, color: 'green' },
          { label: 'Urgentes', value: '1', icon: AlertTriangle, color: 'red' },
        ].map((stat) => {
          const Icon = stat.icon
          const colorMap: Record<string, string> = {
            blue: 'bg-blue-100 text-blue-700',
            amber: 'bg-amber-100 text-amber-700',
            green: 'bg-green-100 text-green-700',
            red: 'bg-red-100 text-red-700',
          }
          return (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <div className={`inline-flex p-2 rounded-lg ${colorMap[stat.color]} mb-3`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Cases */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Mis casos recientes</h2>
            <Link
              href="/casos"
              className="text-sm text-blue-700 hover:text-blue-900 font-medium flex items-center gap-1"
            >
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {mockCases.map((c) => {
              const config = statusConfig[c.status]
              return (
                <div key={c.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{c.title}</p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                        <span className="text-blue-700 font-medium">{c.type}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {c.date}
                        </span>
                      </p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${config.color}`}>
                      {config.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="p-6 pt-4">
            <Link
              href="/evaluacion"
              className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-200 hover:border-blue-300 text-gray-500 hover:text-blue-700 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <Plus className="h-4 w-4" />
              Solicitar nuevo caso
            </Link>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Actividad reciente</h2>
          </div>
          <div className="p-6">
            <div className="relative">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-100" />
              <div className="space-y-5">
                {mockTimeline.map((event) => (
                  <div key={event.id} className="flex gap-4 relative">
                    <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 z-10 ${timelineColors[event.type]}`} />
                    <div>
                      <p className="text-xs text-gray-600 leading-relaxed">{event.desc}</p>
                      <p className="text-xs text-gray-400 mt-1">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-bold text-gray-900 mb-4">Acciones rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/evaluacion"
            className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-xl transition-colors duration-200"
          >
            <Plus className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm font-semibold">Nuevo caso</span>
          </Link>
          <Link
            href="/mensajes"
            className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 text-green-800 rounded-xl transition-colors duration-200"
          >
            <MessageSquare className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm font-semibold">Enviar mensaje</span>
          </Link>
          <Link
            href="/casos"
            className="flex items-center gap-3 p-4 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-xl transition-colors duration-200"
          >
            <FileText className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm font-semibold">Ver documentos</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
