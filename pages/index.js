import Head from 'next/head';
import Link from 'next/link';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme';
import { getSortedPosts } from 'helpers/post';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Date from 'components/Date/Date';

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog Autora Sukcesu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Header />
          <Container maxWidth="lg">
            <div>
              <ul>
                {posts.map(({ id, date, title }) => (
                  <li key={id}>
                    <Link href={`/${id}`} passHref>
                      <a>{title}</a>
                    </Link>
                    <br />
                    <small>
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </Container>

          <Footer />
        </main>
      </ThemeProvider>
    </>
  )
}
