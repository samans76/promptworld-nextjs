import '@styles/globals.css'
import Nav from '@components/Nav'

export const metadata = {
    title:'PromptWorld',
    description: 'Create and share prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
<div className="main">
    <div className="gradient"></div>
</div>

<main className="app">
    <Nav></Nav>
    {children}
</main>
        </body>
    </html>
  )
}

export default RootLayout