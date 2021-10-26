export default function Removed() {
  return <div>Removed</div>
}

export async function getStaticProps(context) {
  return {
    notFound: true,
  }
}