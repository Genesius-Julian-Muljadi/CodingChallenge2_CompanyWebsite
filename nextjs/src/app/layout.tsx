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
      <head>
        <meta name="description" content="For those who dare to shine bright: Idolla trades quality gold and diamond jewelry at competitive prices. Whether you're buying or selling in-store or at-home, you'll be sure to get the best deal on the market!" />
      </head>
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
