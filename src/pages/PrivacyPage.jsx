const PrivacyPage = () => {
    return (
        <section 
            className="p-10 relative section-spacing"
            id="privacy"
        >
            <div className="privacy-heading mb-8">
                <h1 className="text-4xl font-bold mb-4">Mentions légales</h1>
                <h2 >1. Éditeur du site</h2>
                <p>
                    Julien Cauquis <br />
                    31 rue Roger Glotin <br />
                    44000 Nantes <br />
                    France <br />
                    Téléphone : +33 (0) 7 82 51 92 82 <br />
                    Email : <a href="mailto:julien.cauquis@gmail.com">julien[dot]cauquis[at]gmail[dot]com</a>
                </p>
                <h2>2. Directeur de la publication</h2>
                <p>Julien Cauquis</p>
                <h2>3. Hébergeur du site</h2>
                <p>
                    GitHub, Inc. <br />
                    88 Colin P Kelly Jr St <br />
                    San Francisco, CA 94107 <br />
                    États-Unis <br />
                    Site web : <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">https://www.github.com</a>
                </p>
                <h2>4. Propriété intellectuelle</h2>
                <p>
                    L’ensemble des contenus présents sur ce site (textes, images, logos, vidéos, etc.) est protégé par les lois françaises et internationales sur la propriété intellectuelle.
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est autorisée, avec ou sans autorisation écrite préalable.
                </p>
                <h2>5. Données personnelles et cookies</h2>
                <p>
                    Ce site ne collecte aucune donnée personnelle ni n’utilise de cookies.
                </p>
                <h2>6. Limitation de responsabilité</h2>
                <p>
                    Les informations contenues sur ce site sont fournies à titre indicatif et ne sauraient engager la responsabilité de l’éditeur du site.
                    L’éditeur ne pourra être tenu responsable des dommages directs ou indirects résultant de l’utilisation du site ou de l’impossibilité d’y accéder.
                </p>

                <h2>7. Loi applicable et juridiction compétente</h2>
                <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
            </div>
            <div className="absolute bottom-0">
                <p>Dernière mise à jour du site : 29 Novembre 2025</p>
            </div>
        </section>
  );
}

export default PrivacyPage;