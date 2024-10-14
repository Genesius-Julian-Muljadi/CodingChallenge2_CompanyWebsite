import NavBar from "@/components_desktop/navbar";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div>
        <NavBar />
        {children}
    </div>
      
    );
  }