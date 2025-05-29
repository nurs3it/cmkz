import { Header } from "@features/header";
import { Footer } from "@features/footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex mx-auto flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
