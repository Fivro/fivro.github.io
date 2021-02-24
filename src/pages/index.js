import * as React from "react"

// styles
const pageStyles = {
  backgroundColor: 'black',
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headerStyles = {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 60,
  alignItems: 'center',
  jusifyContent: 'center',
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headerStyles}>
        fivro.github.io
        <br />
      </h1>
    </main>
  )
}

export default IndexPage
