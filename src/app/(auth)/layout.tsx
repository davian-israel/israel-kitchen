import Header from "@/components/shared/header";
import Footer from "@/components/footer";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex-center min-h-screen w-full'>
      {children}
    </div>
  );
}
