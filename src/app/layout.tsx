// import { auth } from "@/auth"
// import { SessionProvider } from "next-auth/react"
// import ContextLayout from './ContextLayout'
// import WrapLayoutComponent from './_components/WrapLayout';

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const session = await auth()
//   return (
//     <SessionProvider session={session}>
//       <ContextLayout>
//         <WrapLayoutComponent>{children}</WrapLayoutComponent>
//       </ContextLayout>
//     </SessionProvider>
//   )
// }
