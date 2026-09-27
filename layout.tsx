import './globals.css';
import {ReactNode} from 'react';
export const metadata={title:'AK Social — Short videos, real people',description:'A TikTok-style social video platform starter.'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
