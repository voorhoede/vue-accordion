<template>
  <div>
    <h1>Accordion Vue</h1>

    <section class="example">
      <h2>Default accordion</h2>
      <accordion-list :items="accordionData" />
    </section>

    <section class="example">
      <h2>Accordion with styling</h2>
      <accordion-list :items="accordionData" class="accordion-list" />
    </section>
  </div>
</template>

<script>
import AccordionList from "./components/accordion-list";

export default {
  components: { AccordionList },
  data() {
    return {
      accordionData: [
        {
          slug: "platonis-illi-et-deinceps",
          title: "Platonis illi et deinceps?",
          body:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae autem degendae ratio maxime quidem illis placuit quieta. Suam denique cuique naturam esse ad vivendum ducem. <a href="http://loripsum.net/" target="_blank">Mihi enim satis est, ipsis non satis.</a> Quid, si reviviscant Platonis illi et deinceps qui eorum auditores fuerunt, et tecum ita loquantur? <p><p><b>Cave putes quicquam esse verius.</b> <i>Non laboro, inquit, de nomine.</i> Negat enim summo bono afferre incrementum diem. Vide igitur ne non debeas verbis nostris uti, sententiis tuis. <i>Scrupulum, inquam, abeunti;</i> <a href="http://loripsum.net/" target="_blank">Ratio quidem vestra sic cogit.</a> </p><p><b>Tu vero, inquam, ducas licet, si sequetur;</b> Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. <i>Tum Triarius: Posthac quidem, inquit, audacius.</i> Duo Reges: constructio interrete. <b>Non igitur bene.</b> <a href="http://loripsum.net/" target="_blank">Faceres tu quidem, Torquate, haec omnia;</a> </p>'
        },
        {
          slug: "fortitudinis-quaedam",
          title: "Fortitudinis quaedam?",
          body:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Quid, de quo nulla dissensio est? Ergo in gubernando nihil, in officio plurimum interest, quo in genere peccetur. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. <mark>Istic sum, inquit.</mark> Ergo instituto veterum, quo etiam Stoici utuntur, hinc capiamus exordium. Duo Reges: constructio interrete. Sed quid attinet de rebus tam apertis plura requirere? Sed mehercule pergrata mihi oratio tua. Expressa vero in iis aetatibus, quae iam confirmatae sunt. </p><p>Fortitudinis quaedam praecepta sunt ac paene leges, quae effeminari virum vetant in dolore. Primum in nostrane potestate est, quid meminerimus? Quid censes in Latino fore? Causa autem fuit huc veniendi ut quosdam hinc libros promerem. Propter nos enim illam, non propter eam nosmet ipsos diligimus. </p>"
        },
        {
          slug: "voluptas-percipitur-ex",
          title: "Voluptas percipitur ex?",
          body:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Tu vero, inquam, ducas licet, si sequetur; Tum Triarius: Posthac quidem, inquit, audacius. Unum nescio, quo modo possit, si luxuriosus sit, finitas cupiditates habere. </p><p>Me igitur ipsum ames oportet, non mea, si veri amici futuri sumus. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis.</p>"
        },
        {
          slug: "theophrastum-tamen-adhibeamus",
          title: "Theophrastum tamen adhibeamus?",
          body:
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non modo carum sibi quemque, verum etiam vehementer carum esse? Duo Reges: constructio interrete. <b>Proclivi currit oratio.</b> Theophrastum tamen adhibeamus ad pleraque, dum modo plus in virtute teneamus, quam ille tenuit, firmitatis et roboris. Non autem hoc: igitur ne illud quidem. Tuo vero id quidem, inquam, arbitratu. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. <b>Easdemne res?</b> </p>"
        }
      ]
    }
  }
}
</script>

<style>
  body {
    background-color: #EFF1F0
  }
  
  .example {
    margin-bottom: 64px;
  }

  .accordion-list {
    font-family: Helvetica, Arial, sans-serif;
    box-shadow: 
      0 1px 10px rgba(0, 0, 0, 0.2), 
      0 1px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .accordion-list h3  {
    border-bottom: 1px solid #EFF1F0;
  }

  .accordion-list article:last-child h3 {
    border-bottom: 0;
  }

  .accordion-list h3,
  .accordion-list p:last-child {
    margin: 0;
  }

  .accordion-list p {
    line-height: 1.4;
    margin-top: 0;
  }

  .accordion-list button {
    position: relative;
    display: block;
    width: 100%;
    padding: 16px 48px 16px 16px;
    background-color: #fff;
    border: 0;
    font-size: 1.1rem;
    line-height: 1.4;
    text-align: left;
    color: #555;
    cursor: pointer;
    outline: none;
  }

  .accordion-list button::after {
    content: '';
    position: absolute;
    top: 27px;
    right: 16px;
    transform-origin: 8px 4px;
    width: 16px;
    height: 9px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 286 165'%3E%3Cpath d='M286 26L260 0 143 117 26 0 0 25l143 140L286 26z' fill='%23333333'/%3E%3C/svg%3E");
  }

  .accordion-list button:hover,
  .accordion-list button:focus {
    background-color: hsl(170, 50%, 45%);
    color: #fff;
  }

  .accordion-list button:hover::after,
  .accordion-list button:focus::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 286 165'%3E%3Cpath d='M286 26L260 0 143 117 26 0 0 25l143 140L286 26z' fill='%23ffffff'/%3E%3C/svg%3E");
  }

  .accordion-list h3 + * {
    padding: 32px 16px;
    background-color: #f3f3f3;
  }
</style>
