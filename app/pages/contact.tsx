import Head from 'next/head';
import { GU } from 'components/theme'

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contact | GaDova</title>
      </Head>

      <main style={{ marginTop: `${GU * 25}px`}}>
        <h1>
          Contact
        </h1>
      </main>
    </div>
  )
}

export default Contact;
