import Link from 'next/link'

function Layout({ children }) {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      {children}
    </div>
  )
}

export default Layout
