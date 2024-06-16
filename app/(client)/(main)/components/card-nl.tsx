import { Button, Card } from 'flowbite-react';

export default function CardNL() {
  return (
    <Card className="max-w-2xl text-justify">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Deelname aan onderzoek</h5>
      <p className="font-normal text-gray-700">Beste deelnemer,</p>
      <p className="font-normal text-gray-700">
        U wordt uitgenodigd om deel te nemen aan een onderzoek genaamd{' '}
        <strong className="font-semibold text-gray-900">Contemporary Creativity: The Many Faces of AI Art. </strong>
        Dit onderzoek wordt uitgevoerd door Jari de Keijzer, Bachelor student Computer Science & Engineering aan de TU
        Delft, onder begeleiding van Dr. Anna Lukina.
      </p>

      <p className="font-normal text-gray-700">
        Het doel van dit onderzoek is om te ontdekken of afbeeldingen die gegenereerd worden door een specifiek
        Kunstmatige Intelligentie (AI) model creatief kunnen lijken. Om deze vraag te beantwoorden, stemt u, de
        deelnemer, op de creativiteit van paren van afbeeldingen. Voor elk paar afbeeldingen stemt u op welke afbeelding
        u het meest <strong className="font-semibold text-gray-900"> nieuw, verrassend of waardevol</strong> vindt. Dit
        betekent dat u voor elk paar afbeeldingen drie stemmen moet uitbrengen. De paren afbeeldingen bevatten door AI
        gegenereerde afbeeldingen en niet-gegenereerde afbeeldingen uit de echte wereld. De AI afbeeldingen zullen zowel
        inlier (realistischer) als outlier (vreemdere) afbeeldingen bevatten. Tijdens het stemproces krijg je NIET te
        zien tot welke categorie de afbeelding behoort, dit is onderdeel van het experiment. Deelnemen aan dit onderzoek
        kost je ongeveer 15 minuten.
      </p>

      <p className="font-normal text-gray-700">
        Dit onderzoek is volledig anoniem, er worden dus GEEN persoonlijke gegevens verzameld. Deze stemwebsite wordt
        gehost op een server die eigendom is van de TU Delft, waarop geen andere gegevens dan uw anonieme stemmen worden
        verzameld. Deze stemmen worden gebruikt om de afbeeldingen te rangschikken op basis van een ELO-score (bekend
        van schaken). Met deze ranking wordt de creativiteit van het AI-model geëvalueerd. De verzamelde stemmen, de
        ELO-ranking en de geëvalueerde resultaten worden gepubliceerd en gepresenteerd in een paper die publiekelijk
        beschikbaar zal zijn op de TU Delft repository.
      </p>

      <p className="font-normal text-gray-700">
        Iedereen van <strong className="font-semibold text-gray-900">18 jaar of ouder</strong> mag meedoen aan dit
        onderzoek. Het is belangrijk voor dit onderzoek om een gevarieerde verzameling stemmen te krijgen. Meer
        deelnemers verhoogt de nauwkeurigheid van de ranglijst. Daarom is het u, de deelnemer, toegestaan om dit
        onderzoek met anderen te delen.
      </p>

      <p className="font-normal text-gray-700">
        Uw deelname aan dit onderzoek is geheel vrijwillig en u kunt zich op elk moment terugtrekken. Aangezien de
        stemmen volledig anoniem zijn, kunnen ze niet aan u worden gekoppeld, waardoor het onmogelijk is om
        &apos;uw&apos; stemmen te verwijderen na het indienen.
      </p>

      <p className="font-normal text-gray-700">
        Doorgaan naar het volgende scherm start het stemproces, waardoor u een anonieme deelnemer bent.
      </p>

      <p className="font-normal text-gray-700">
        Eventuele vragen of opmerkingen kunnen naar het volgende e-mailadres worden gestuurd:{''}
        <a
          href="mailto:j.n.dekeijzer@student.tudelft.nl?subject=Research Project"
          className="font-medium text-TUcyan underline hover:text-TUdarkblue hover:no-underline"
        >
          j.n.dekeijzer@student.tudelft.nl
        </a>
      </p>

      <p className="font-normal text-gray-700">Hartelijk dank voor uw tijd en deelname,</p>
      <p className="font-normal text-gray-700">Jari de Keijzer</p>

      <Button
        href="/explanation"
        className="bg-TUcyan hover:bg-TUdarkblue focus:outline-none focus:ring-4 focus:ring-TUblue active:outline-none active:ring-4 active:ring-TUblue"
      >
        Ik begrijp het en doe mee aan het onderzoek
        <svg
          className="size-[24px]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Button>
    </Card>
  );
}
