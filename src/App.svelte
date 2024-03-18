<script lang="ts">
  import FileDownload from "./components/FileDownload.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<main>
  <div class="hero">
    <span class="circle" />
    <span class="circle" />
    <span class="circle" />
    <span class="circle" />
    <span class="circle" />

    <img src="/Zamma.svg" alt="Zamma" />
    <h2>2024 in Holzkirchen</h2>
    <p>
      Bei ZAMMA erwartet die Bürgerinnen und Bürger von Holzkirchen ein
      mehrtägiges Programm aus den Bereichen Kultur, Jugend, Gesellschaft &
      Soziales, Religion, Sport & Bewegung, Tradition & Heimat, Umwelt & Natur
      sowie Wirtschaft & Wissenschaft. Das Festival ist seit 1980 fester
      Bestandteil der Kulturarbeit des Bezirks Oberbayern und leistet einen
      wichtigen Beitrag zur Förderung des kulturellen und sozialen Miteinanders
      in den Regionen. Der Bezirk Oberbayern veranstaltet das Festival alle zwei
      Jahre mit einer ausgewählten Bewerberkommune – zuletzt mit Bad Aibling und
      Garmisch-Partenkirchen.
    </p>
  </div>

  <div class="downloads">
    <img src="/icons/Arrow.svg" alt="Arrow" />
    <h2>Downloads</h2>
    <div>
      <FileDownload
        title="Anmeldeformular Seifenkistenrennen"
        url="/downloads/Anmeldeformular-Seifenkistenrennen.pdf"
      />
      <FileDownload
        title="Regelwerk Seifenkistenrennen"
        url="/downloads/Regelwerk-Seifenkistenrennen.pdf"
      />
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
      }

      &:nth-child(3) {
        top: 28%;
        left: 20%;
        width: 100px;
        height: 100px;
        background-color: rgba(166, 125, 184, 0.5);

        animation-delay: 2s;
      }

      &:nth-child(4) {
        top: 33%;
        left: 80%;
        width: 100px;
        height: 100px;
        background-color: rgba(125, 140, 163, 0.5);

        animation-delay: 3s;
      }

      &:nth-child(5) {
        top: 50%;
        left: 10%;
        width: 150px;
        height: 150px;
        background-color: rgba(125, 140, 163, 0.5);

        animation-delay: 4s;
      }
    }
    .hero {
      display: flex;
      flex-direction: column;
      place-items: center;
      margin-top: 20vh;

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
    }

    .downloads {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #d9d9d9;
      padding: 1rem 0 5rem 0;
      margin-top: 15rem;
      margin-bottom: 5rem;
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
    }
  }
</style>
