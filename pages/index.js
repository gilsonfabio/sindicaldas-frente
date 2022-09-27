import Head from 'next/head';
import Beneficios from '../components/beneficios';
import Contato from '../components/contato';
import Convenios from '../components/convenios';
import Footer from '../components/footer';
import Menu from '../components/Menu';
import Servidores from '../components/servidores';

function Home() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="CaldasCard" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>CaldasCard</title>
            </Head>
            <Menu />
            <section className="top" data-aos="fade-up">
                <div className="max-width">
                    <div className="top-content">
                        <div className="text-1" data-aos="flip-left">
                            Nós da Associação
                        </div>
                        <div className="text-2" data-aos="flip-right">
                            acreditamos no poder da união.
                        </div>
                        <div className="text-3" data-aos="fade-up-right">
                            Só assim superamos as dificuldades! 
                        </div>
                        <a href="/login">Novo Lançamento</a>
                    </div>
                </div>
            </section>
            <Convenios />
            <Servidores />
            <Beneficios />
            <Contato />
            <Footer />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
        </div>
    )
}

export default Home;
