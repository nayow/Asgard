<template>
  <a href="#" @click="$router.push('/')" id="arrow-left">
    <svg
      width="50"
      height="50"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="arrow-left"
      class="svg-inline--fa fa-arrow-left fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="#e6e6e6"
        d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
      ></path>
    </svg>
  </a>
  <div id="legal-mentions">
    <h2>CONDITIONS GENERALES D'UTILISATION -</h2>
    <h2 class="mb-4">MENTIONS LEGALES</h2>
    <p>
      Toute l’équipe de ASGARD vous souhaite la bienvenue sur le Site de ASGARD
      à l’adresse URL : https://www.asgard.cool/
    </p>
    <p>La marque ASGARD est en totalité la propriété de la société :</p>
    <p>La société VALKYR SAS</p>
    <p>Société par actions simplifiée</p>
    <p>Au capital de 1000 euros</p>
    <p>
      Dont le siège social se situe au 11 rue de l’Académie – 67000 Strasbourg
      Immatriculée au RCS Strasbourg n°881 859 276
    </p>
    <p>Représentée par Monsieur Joseph MONTANA, Président</p>
    <p>
      Toute tentative de représentation ou de reproduction en intégralité ou en
      partie sans l’accord préalable d’un représentant de la société VALKYR SAS
      s’expose à des poursuites judiciaires.
    </p>
    <p>N° SIRET : 88185927600019</p>
    <p>N° TVA : FR34881859276</p>
    <p>
      Pour toute réclamation, veuillez envoyer un mail à : hello@asgard.cool
      Directeur de publication et concepteur du site : Jonas AUDIA - Développeur
      Jr
    </p>
    <p>Hébergeur : OVH</p>
    <p>Conditions générales d’utilisation</p>
    <p>
      Toute utilisation de ce site web implique un accord des conditions éditées
      ici même, dans le cas contraire vous êtes prié de le quitter. Les mentions
      légales de ce site web sont susceptibles d’être modifiées sans
      avertissement. L’utilisation de ce site doit être effectuée par une
      personne majeure, dans le cas de l’utilisation du site par un mineur, il
      doit disposer au préalable de l’accord d’un tuteur légal.
    </p>

    <h3>Garantie</h3>
    <hr />
    <p>Ce site web est soumis à la loi française en vigueur.</p>
    <p>
      VALKYR SAS s’engage à ne pas communiquer, diffuser ou utiliser à des fins
      personnelles les données utilisateurs.
    </p>
    <p>
      VALKYR SAS s’engage à ne pas diffuser des contenus illicites ou à
      caractère violent, diffamatoire ou pornographique.
    </p>
    <p>
      VALKYR SAS s’engage à divulguer les informations tel qu’elles sont connues
      et vérifiées.
    </p>
    <p>
      Les informations peuvent toutefois contenir des erreurs, si vous en
      constatez une, vous êtes priés de la communiquer à l’adresse :
      hello@asgard.cool
    </p>

    <p>
      Les informations communiquées peuvent ne pas être à jour, dans ce cas
      l’équipe de VALKYR SAS fera son nécessaire pour actualiser le plus souvent
      possible le contenu du site.
    </p>

    <h3>Inscription</h3>
    <hr />
    <p>
      La navigation sur le site n’est pas soumise à une obligation
      d’inscription,
    </p>
    <p>
      Le site peut être amené à divulguer des informations personnelles
      lorsqu’elles sont nécessaires à l’identification, à l’interpellation ou à
      la poursuite en justice de tout individu susceptible de porter préjudice
      ou atteinte (intentionnellement ou non) aux droits ou à la propriété du
      site ou à toute autre personne pouvant être pénalisée par de telles
      activités.
    </p>

    <h3>Droit de la propriété intellectuelle</h3>
    <hr />
    <p>
      Tout élément composant le site (Logo, marques, textes, vidéos, etc.) ne
      peut être utilisé à des fins personnelles ou professionnelles qu’après
      avoir reçu l’accord de la société VALKYR SAS ou des créateurs de contenus.
    </p>
    <p>
      Le non-respect de cette règle engendrera l’exposition à des sanctions
      pénales.
    </p>
    <p>
      Les crédits photographiques, vidéos, images et conceptions graphiques sont
      détenus par : Atelier Ben&Jo et Jonas AUDIA
    </p>

    <h3>Sécurité</h3>
    <hr />
    <p>
      Des informations personnelles peuvent être collectées lorsque vous vous
      inscrivez, envoyez un mail ou achetez un produit.
    </p>
    <p>Vos données personnelles peuvent ainsi être collectées dans les cas :</p>
    <p>
      D’un suivi de la relation client, lorsqu’une demande particulière ou un
      problème récurrent de commande est survenu.
    </p>
    <p>
      VALKYR SAS s’engage a supprimer tout document dont il n’en a plus les
      usages précédents concernant les données personnelles d’utilisateur.
      VALKYR SAS n’est en aucun cas responsable du contenu des sites externes
      représentés par des liens hypertextes. Ces liens ont été créés dans
      l’unique but de faciliter votre navigation sur internet. Leur consultation
      relèvera de votre choix et résultera donc de votre unique responsabilité.
    </p>
  </div>
</template>

<script>
export default {
  name: "LegalMentions"
};
</script>

<style scoped>
#legal-mentions {
  padding: 15vh 20vw;
  color: #ffffffd0;
  overflow: scroll;
  height: 100vh;
}
/* Hide scrollbar for Chrome, Safari and Opera */
#legal-mentions::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
#legal-mentions {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
#arrow-left {
  position: absolute;
  top: 6vw;
  left: 6vw;
}
h3 {
  margin-top: 1em;
  margin-bottom: 0.5em;
}
p {
  font-size: 0.8rem;
}
hr {
  display: block;
  border: 0px;
  height: 4px;
  background-image: url("../assets/gradient.jpg");
  margin-bottom: 2rem;
}
</style>
