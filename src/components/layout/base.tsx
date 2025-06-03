import { Header } from "@/components/features/header";
import { Footer } from "@/components/features/footer";
import { Breadcrumbs } from "@/components/features/breadcrumbs";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex mx-auto flex-col min-h-screen">
      <Header />
      <Breadcrumbs />
      {children}
      <Footer />
    </div>
  );
}
