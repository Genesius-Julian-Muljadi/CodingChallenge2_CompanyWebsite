// "use client";

import Footer from "@/components_desktop/footer";
// import { Provider } from "react-redux";
// import { store } from "@/redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Provider store={store}> */}
          {/* <NavBar /> */}
          {children}
          <Footer />
        {/* </Provider> */}
      </body>
    </html>
    
  );
}
