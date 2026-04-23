import Link from 'next/link'
import { Scale, LayoutDashboard, FileText, MessageSquare, User, LogOut, Bell } from 'lucide-react'

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Mi Panel' },
  { href: '/casos', icon: FileText, label: 'Mis Casos' },
  { href: '/mensajes', icon: MessageSquare, label: 'Mensajes' },
  { href: '/perfil', icon: User, label: 'Mi Perfil' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-100">
          <div className="p-2 bg-blue-800 rounded-lg">
            <Scale className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-blue-900 font-serif">Tutelapp</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 group text-sm font-medium"
              >
                <Icon className="h-5 w-5 flex-shrink-0 group-hover:text-blue-700" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* User Info */}
        <div className="px-4 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              U
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">Usuario</p>
              <p className="text-xs text-gray-500 truncate">cliente@email.com</p>
            </div>
          </div>
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 text-sm font-medium w-full"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            {/* Mobile logo */}
            <div className="md:hidden flex items-center gap-2">
              <div className="p-1.5 bg-blue-800 rounded-lg">
                <Scale className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-blue-900 font-serif">Tutelapp</span>
            </div>
            <h1 className="hidden md:block text-gray-500 text-sm">Panel de usuario</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
              U
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
