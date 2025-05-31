interface GroupedLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function GroupedLayout({ title, children }: GroupedLayoutProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-[500] text-primary md:text-2xl mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}
