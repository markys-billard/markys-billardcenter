export default function Impressum() {
  return (
    <main id="main-content" className="pt-24">
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-ink mb-8">Impressum</h1>

            <div className="prose prose-lg max-w-none text-ink space-y-6">
              <div>
                <h2 className="text-2xl font-serif text-ink mb-4">Angaben</h2>
                <p className="mb-4">
                  <strong>Markys Billardcenter</strong><br />
                  Kantonsstrasse 51<br />
                  CH-3902 Brig-Glis<br />
                  Schweiz
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-ink mb-4">Kontakt</h2>
                <p>
                  Telefon: +41 79 436 81 34<br />
                  E-Mail: markys@bluewin.ch
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-ink mb-4">Verantwortlich für den Inhalt</h2>
                <p>
                  Marco Mark<br />
                  Geschäftsführer<br />
                  Markys Billardcenter<br />
                  Kantonsstrasse 51<br />
                  CH-3902 Brig-Glis
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-ink mb-4">Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
