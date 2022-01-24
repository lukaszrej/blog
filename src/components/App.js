import { PropTypes } from 'prop-types';
import { Container } from '@mui/material';
import Link from 'next/link';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function App({ posts }) {
  return (
    <main>
      <Header />

      <Container maxWidth="lg">
        <div>
          <ul>
            {posts.map(({ id, date, title, slug }) => (
              <Link key={id} href={`/${slug}`} passHref>
                <li>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </Container>

      <Footer />
    </main>
  )
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
}
