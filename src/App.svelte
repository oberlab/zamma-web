<script lang="ts">
  import { onMount } from "svelte";
  import FileDownload from "./components/FileDownload.svelte";
  import Footer from "./components/Footer.svelte";
  import { getDownloadFiles, type DownloadFile } from "./lib/StrapiData";

  let DownloadFiles: DownloadFile[] = [];

  onMount(async () => {
    DownloadFiles = await getDownloadFiles();
  });
</script>

<main>
  <div class="circles">
    <span class="circle" />
    <span class="circle" />
    <span class="circle" />
    <span class="circle" />
    <span class="circle" />
  </div>

  <div class="hero">
    <img src="/Zamma.svg" alt="Zamma" />
    <h2>Zamma obe (und wieda auffe)</h2>
	<p>
	1. Holzkirchener Seifenkistenrennen im Rahmen des Zamma - Das Festival in Oberbayern
	</p>
	<p><b>Links zu den Platzierungen weiter unten</b></p>
	<p>
	Wann? Samstag 20. Juli 2024, Rennstart ab 14:00 Uhr; ab 12:00 Uhr Technische Abnahme in den Fahrer*innen Lager; ab 13:30 Uhr Start der LIVE-Moderation; Siegerehrung abends am Marktplatz
	</p>
	<p>
	Wo? Auf der Münchner Straße zwischen Oskar-von-Miller-Platz und Bahnhofsplatz (Straßensperrung am Renntag zwischen 12:00 Uhr und 18:00 Uhr)
	</p>
	<p>
	Wer? Über 20 Teams in verschiedenen Rennklasssen
	</p>
	<p>
	Verschiedene Rennklassen<br>
	1) Klassisches Seifenkistenrennen bergab<br>
	2) Gaudi-Rennen mit Wertungspunkten<br>
	3) Seifenkistenrennen bergauf mit Nachhaltigen Antrieben
	</p>
<!--	<p>
	
      Bei ZAMMA erwartet die Bürgerinnen und Bürger von Holzkirchen ein
      mehrtägiges Programm aus den Bereichen Kultur, Jugend, Gesellschaft &
      Soziales, Religion, Sport & Bewegung, Tradition & Heimat, Umwelt & Natur
      sowie Wirtschaft & Wissenschaft. Das Festival ist seit 1980 fester
      Bestandteil der Kulturarbeit des Bezirks Oberbayern und leistet einen
      wichtigen Beitrag zur Förderung des kulturellen und sozialen Miteinanders
      in den Regionen. Der Bezirk Oberbayern veranstaltet das Festival alle zwei
      Jahre mit einer ausgewählten Bewerberkommune – zuletzt mit Bad Aibling und
      Garmisch-Partenkirchen.
    </p> -->
  </div>

	<div class="ergebnisse">
	<h2>Platzierungen in Rennklassen</h2>
	<div>
	<ul>
	<li><a href="https://airtable.com/appe8lx1oMBvyBYsy/shrgjUuAqRtqmJsky">Rennklasse 1 - Bergab</a></li>
	<li><a href="https://airtable.com/appe8lx1oMBvyBYsy/shrHR3QRxJ2Ow3T3r">Rennklasse 2 - Gaudirennen</a></li>
	<li><a href="https://airtable.com/appe8lx1oMBvyBYsy/shrk48iweWRtsFYU1">Rennklasse 3 - Bergauf</a></li>
	</ul>
	</div>
	</div>

  <div class="downloads">
    <img src="/icons/Arrow.svg" alt="Arrow" />
    <h2>Downloads</h2>
    <div>
      {#each DownloadFiles as file}
        <FileDownload title={file.name} url={file.url} />
      {/each}
    </div>
  </div>

  <Footer />
</main>

<style lang="scss">
  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(10px, 15px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  main {
    .circles {
      position: absolute;
      top: -2rem;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;

      .circle {
        display: block;
        width: 200px;
        height: 200px;
        border-radius: 100%;
        background-color: rgba(37, 178, 62, 0.5);
        position: absolute;
        top: 50%;
        left: 70%;

        animation: move 10s infinite;

        &:nth-child(2) {
          top: 5%;
          left: 55%;
          width: 150px;
          height: 150px;
          background-color: rgba(1, 49, 87, 0.5);

          animation-delay: 1s;

          @media (max-width: 768px) {
            top: 10%;
            left: 15%;
            width: 100px;
            height: 100px;
          }
        }

        &:nth-child(3) {
          top: 28%;
          left: 20%;
          width: 100px;
          height: 100px;
          background-color: rgba(166, 125, 184, 0.5);

          animation-delay: 2s;

          @media (max-width: 768px) {
            left: 0;
          }
        }

        &:nth-child(4) {
          top: 33%;
          left: 80%;
          width: 100px;
          height: 100px;
          background-color: rgba(125, 140, 163, 0.5);

          animation-delay: 3s;

          @media (max-width: 768px) {
            top: 80%;
            left: 0;
          }
        }

        &:nth-child(5) {
          top: 50%;
          left: 10%;
          width: 150px;
          height: 150px;
          background-color: rgba(125, 140, 163, 0.5);

          animation-delay: 4s;

          @media (max-width: 768px) {
            top: 20%;
            left: 80%;
          }
        }
      }
    }
    .hero {
      display: flex;
      flex-direction: column;
      place-items: center;
      margin-top: 20vh;
      margin-inline: 2rem;

      img {
        width: 30rem;
        z-index: 1;
      }

      h2 {
        font-size: 1.3rem;
        margin-top: 0.7rem;
        z-index: 1;
      }

      p {
        font-size: 1.2rem;
        margin-top: 2rem;
        max-width: 900px;
        z-index: 1;
      }

      @media (max-width: 768px) {
        margin-top: 10vh;

        img {
          width: 20rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }

    .ergebnisse {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #d9d9d9;
      padding: 1rem 0 5rem 0;
      margin-top: 15rem;
      margin-bottom: 5rem;
      margin-inline: 2rem;
      border-radius: 30px;

      img {
        width: 4rem;
        position: relative;
        top: -2rem;
      }

      h2 {
        font-size: 2rem;
        padding-bottom: 1rem;
      }

      ul {
        font-size: 1.5rem;
        padding-bottom: 1rem;
      }

      @media (max-width: 768px) {
        margin-top: 10rem;
        margin-inline: 1rem;
        padding-inline: 1rem;
      }
    }

    .downloads {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #d9d9d9;
      padding: 1rem 0 5rem 0;
      margin-top: 15rem;
      margin-bottom: 5rem;
      margin-inline: 2rem;
      border-radius: 30px;

      img {
        width: 4rem;
        position: relative;
        top: -2rem;
      }

      h2 {
        font-size: 2rem;
        padding-bottom: 1rem;
      }

      @media (max-width: 768px) {
        margin-top: 10rem;
        margin-inline: 1rem;
        padding-inline: 1rem;
      }
    }
  }
</style>
