import { Header } from "@features/header";
import { Footer } from "@features/footer";
import { Breadcrumbs } from "@features/breadcrumbs";

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
