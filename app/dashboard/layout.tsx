import MainMenu from '@/dashboard/components/main-menu';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-[250px_1fr]">
      <MainMenu />
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Welcome back, Tom!</h1>
        {children}
      </div>
    </div>
  );
}
