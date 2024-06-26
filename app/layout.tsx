
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Logo from './logo.png'
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWagmiConnector,
  ZeroDevSmartWalletConnectors,
  SolanaWalletConnectors
} from "../lib/dynamic";

import { Providers } from "./providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <>
     
      
      <DynamicContextProvider
        settings={{
          environmentId: "392bdadc-429a-42c8-8db0-f1193c84f1fb",
          walletConnectors: [SolanaWalletConnectors,ZeroDevSmartWalletConnectors, EthereumWalletConnectors],
        }}
      >
        <Providers>
          <DynamicWagmiConnector>
            
            <body className={inter.className} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
              <div className={"w-96"}>
              <Link href="/">
               
                <Image src={Logo} alt="Logo" />
                
              </Link>
              </div>
              <main>
              {children}
              </main>
              </body>
          </DynamicWagmiConnector>
        </Providers>
      </DynamicContextProvider>

      </>
    </html>
  );
}
