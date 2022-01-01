import { Container } from '@mui/material';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />

      <Container maxWidth="lg">
        Blog content will be here!
      </Container>

      <Footer />
    </main>
  )
}
