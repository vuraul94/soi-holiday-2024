// Inicializamos el modal globalmente
const modal = new tingle.modal({
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Cerrar",
  cssClass: ["modal"],
  onClose: function () {
    const iframes = document.querySelectorAll('.tingle-modal iframe');
    iframes.forEach((iframe) => {
      const src = iframe.src; 
      iframe.src = ''; 
      iframe.src = src;
    });
  },
});

function openModal1(content) {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/seamounts-of-the-southeast-pacific/" target="_blank" rel=”noopener noreferrer”>
            Seamounts of the Southeast Pacific
          </a>
        </h2>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/zsLKnqm8GYA" title="Holiday Card - FKt240108" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>This Chaunacops, or “walking fish,” captured imaginations and drew lots of attention. This was the first scientific report of a sea toad in the southeastern Pacific, so likely a new species, according to co-chief scientist Javier Sellanes.</p>
        <p class="note">Click expedition title for more info</p>
        `);
  modal.open();
}

function openModal2() {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/unexplored-seamounts-of-the-salas-y-gomez-ridge/" target="_blank" rel=”noopener noreferrer”>
          Unexplored Seamounts of the Salas y Gomez Ridge
          </a>
        </h2>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/WVoQMePYq4A" title="Holiday Card - FKt240224 Strawberry Squid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>Finding light in the darkness is not impossible. In the deep Ocean, where the sun’s rays cannot reach, creatures like this strawberry squid seem to sparkle with their jewel-like luminescent photophores.</p>
        <p class="note">Click expedition title for more info</p>
        `);
  modal.open();
}

function openModal3(content) {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/microbes-in-oxygen-minimum-zones/" target="_blank" rel=”noopener noreferrer”>
            Microbes in Oxygen Minimum Zones
          </a>
        </h2>
        <div class="video">
        <iframe src="https://www.youtube.com/embed/tYUSW1MCOZQ" title="Holiday Card - FKt240224 Instrument plunge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>This automated mini-laboratory collects and processes seawater samples in situ at specified depths to study biogeochemical processes while accurately measuring trace amounts of oxygen in the water. This instrument will allow scientists to better to create better regional models of oxygen minimum zones as climate change causes them to expand.</p>
        <p class="note">Click expedition title for more info</p>
        `);
  modal.open();
}

function openModal4(content) {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/living-fossils-of-the-atacama-trench/" target="_blank" rel=”noopener noreferrer”>
            Living Fossils of the Atacama Trench
          </a>
        </h2>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/v4yuy-1iu5A" title="Holiday Card - FKt240524 Munnopsid isopod" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>This deep-sea daddy long-legs, more accurately described as a munnopsid isopod, was observed during the <a href="https://www.youtube.com/hashtag/atacamatrenchancients" target="_blank" rel=”noopener noreferrer”>#AtacamaTrenchAncients</a> expedition off the coast of Chile. An international team was working to characterize the microbial and macrofaunal communities in the surrounding areas of the Atacama Trench.</p>
        <p class="note">Click expedition title for more info</p>
        `);
  modal.open();
}

function openModal5(content) {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/high-seas-and-seamounts/" target="_blank" rel=”noopener noreferrer”>
          High Seas and Seamounts
          </a>
        </h2>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/SVO4j5ubq2o" title="Holiday Card - FKt240708 Corals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>Erin Easton, an expert in seafloor ecology, describes the area as, “The most extensive marine animal forest seen on any of the expeditions to these ridges this year.” During dive 698, scientists observed this incredibly dense grouping of corals and sponges, and Easton suspects that the coral colonies are hundreds, or perhaps, thousands of years old. The sponges are ancient as well.</p>
        <p class="note">Click expedition title for more info</p>
        `);
  modal.open();
}

function openModal6(content) {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/fire-and-ice-volcanic-and-glacial-interactions/" target="_blank" rel=”noopener noreferrer”>
            Fire and Ice Volcanic and Glacial Interactions
          </a>
        </h2>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/p0bNJV2WSlo" title="Holiday Card - FKt240802 Fire &amp; Ice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>The #EruptionArchive scientists collected multiple types of core samples and painstakingly sifted through sediment and mud to document and study the impact of the 2008 Chaitén Volcano’s eruption on the marine environment. Their research could unlock deeper-time records of major volcanic eruptions in the region, allowing scientists to reconstruct volcanic behavior in Southern Chile over geologic time.</p>
        <p class="note">Click expedition title for more info</p>
        `);
  modal.open();
}

function openModal7(content) {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/canyons-vents-and-seeps-of-the-chile-margin/" target="_blank" rel=”noopener noreferrer”>
            Canyons, Vents, and Seeps of the Chile Margin
          </a>
        </h2>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/PPFOBrfia7E" title="Holiday Card - FKt241011 Onyx squid hatching" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>This&nbsp;<em>Gonatus onyx</em>&nbsp;squid is not only carrying her egg sack, but she is also helping free the hatchlings! The black-eyed squid is one of the few that brood their eggs &mdash; most abandon them after laying them anchored to the seafloor. A female&nbsp;<em>Gonatus onyx</em>&nbsp;will carry her large egg mass for months, keeping it suspended from hooks on her arms. After laying the eggs she will go without feeding. By the time they hatch, she will be close to death. Researchers suspect the incubation time is 6 to 9 months, during which the female will pump water around the cluster (up to 3,000 eggs) as she swims, keeping them supplied with oxygen.</p>
        <p class="note">Click expedition title for more info</p>
      `);
  modal.open();
}
