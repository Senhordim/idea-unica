import Link from 'next/link'

function Tempo(props) {
  const dynamicdate = new Date();
  const dynamicDateString = dynamicdate.toGMTString();

  return (
    <div>
      <p>{dynamicDateString} (dinâmico)</p>
      <p>{props.staticDateString} (estático)</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}

export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }
}

export default Tempo
