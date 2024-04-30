import { LightDarkToggle } from '@/components/ui/light-dark-toggle';

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed right-2 top-[calc(50%-12px)]" />
    </>
  );
}
