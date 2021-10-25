export default function About() {
  return <div>redirect</div>
}

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/',
      permanent: true
    }
  }
}