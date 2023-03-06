import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
<h1><strong>First Incendie</strong>&nbsp;</h1>
<h2>votre entreprise sp&eacute;cialis&eacute;e dans la fourniture<a href="https://firstincendie.com/categorie-produit/produits/protection-incendie/"> d'&eacute;quipements de s&eacute;curit&eacute; incendie</a> en France.</h2>
<p>Elle propose des <a href="https://firstincendie.com/categorie-produit/produits/protection-incendie/extincteur/">extincteurs</a> certifi&eacute;s NF pour diff&eacute;rents types de feux, ainsi que des <a href="https://firstincendie.com/categorie-produit/produits/signalisation/plan-de-securite/">plans d'intervention</a> et des <a href="https://firstincendie.com/kit-securite-incendie">kits sur mesure</a> pour r&eacute;pondre aux normes en mati&egrave;re de s&eacute;curit&eacute; incendie.</p>
<p>L'entreprise se targue d'&ecirc;tre rapide et efficace dans la livraison et l'installation de ses &eacute;quipements. Les clients peuvent demander un devis en ligne, et des techniciens aguerris peuvent v&eacute;rifier leurs &eacute;quipements de s&eacute;curit&eacute; incendie.</p>
<p>Les<a href="https://firstincendie.com/produit/extincteur-eau-6l-pp/"> extincteurs &agrave; eau</a> et <a href="https://firstincendie.com/produit/extincteur-co2-2kg-feux-electriques/">extincteur &agrave; CO2</a> sont parmi les types d'extincteurs disponibles.</p>
<p>First Incendie&nbsp;vous offre des &eacute;quipements de haute qualit&eacute; et des prix imbattables. Les clients peuvent personnaliser leurs plans d'intervention selon leur choix de mat&eacute;riaux et de taille. La soci&eacute;t&eacute; a de nombreux partenaires et des clients satisfaits.</p>

      </main>

      <Footer />
    </div>
  )
}
