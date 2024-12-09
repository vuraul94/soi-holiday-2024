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
        <p>This Chaunacops, or “walking” fish captured imaginations and garnered lots of attention. “The sea toad has modified fins that allow it to walk on the seafloor — partly a hunting strategy and partly because it’s more energy efficient than swimming,” Co-Chief Scientist Javier Sellanes explained. “As the first scientific report of a sea toad in the southeastern Pacific, the sea toad is likely a new species.”</p>
        <a class="note" href="https://schmidtocean.org/cruise/seamounts-of-the-southeast-pacific/" target="_blank" rel=”noopener noreferrer”>More info</a>
        `);
  modal.open();
}

function openModal2() {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/unexplored-seamounts-of-the-salas-y-gomez-ridge/" target="_blank" rel=”noopener noreferrer”>
          Unexplored Seamounts of the Salas y Gómez Ridge
          </a>
        </h2>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/WVoQMePYq4A" title="Holiday Card - FKt240224 Strawberry Squid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>Finding light in the darkness is not impossible. In the deep Ocean, where the sun’s rays cannot reach, creatures like this strawberry squid seem to sparkle with their jewel-like luminescent photophores.</p>
        <a class="note" href="https://schmidtocean.org/cruise/unexplored-seamounts-of-the-salas-y-gomez-ridge/" target="_blank" rel=”noopener noreferrer”>More info</a>
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
        <p>This automated mini-laboratory collects and processes seawater samples&nbsp;<em>in situ</em>&nbsp;at specified depths to study biogeochemical processes while accurately measuring trace amounts of oxygen in the water. This instrument will allow scientists to create better regional models of oxygen minimum zones as climate change causes them to expand.</p>
        <a class="note" href="https://schmidtocean.org/cruise/microbes-in-oxygen-minimum-zones/" target="_blank" rel=”noopener noreferrer”>More info</a>
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
        <p>This deep-sea daddy longlegs, more accurately described as a Munnopsis isopod, was observed during the <a href="https://www.youtube.com/hashtag/atacamatrenchancients" target="_blank" rel=”noopener noreferrer”>#AtacamaTrenchAncients</a> expedition off the coast of Chile. An international team was working to characterize the microbial and macrofaunal communities in the surrounding areas of the Atacama Trench.</p>
        <a class="note" href="https://schmidtocean.org/cruise/living-fossils-of-the-atacama-trench/" target="_blank" rel=”noopener noreferrer”>More info</a>
        `);
  modal.open();
}

function openModal5(content) {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/high-seas-and-seamounts/" target="_blank" rel=”noopener noreferrer”>
          High Seas and Seamounts of the Nazca Ridge
          </a>
        </h2>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/SVO4j5ubq2o" title="Holiday Card - FKt240708 Corals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>Erin Easton, an expert in seafloor ecology, describes the area as, “The most extensive marine animal forest seen on any of the expeditions to these ridges this year.” During dive 698, scientists observed this incredibly dense grouping of corals and sponges, and Easton suspects that the coral colonies are hundreds, or perhaps, thousands of years old. The sponges are ancient as well.</p>
        <a class="note"  href="https://schmidtocean.org/cruise/high-seas-and-seamounts/" target="_blank" rel=”noopener noreferrer”>More info</a>
        `);
  modal.open();
}

function openModal6(content) {
  modal.setContent(/*html*/ `
        <h2>
          <a href="https://schmidtocean.org/cruise/fire-and-ice-volcanic-and-glacial-interactions/" target="_blank" rel=”noopener noreferrer”>
            Fire and Ice: Volcanic and Glacial Interactions 
          </a>
        </h2>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/p0bNJV2WSlo" title="Holiday Card - FKt240802 Fire &amp; Ice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>The #EruptionArchive scientists collected multiple types of core samples and painstakingly sifted through sediment and mud to document and study the impact of the 2008 Chaitén Volcano’s eruption on the marine environment. Their research could unlock deeper-time records of major volcanic eruptions in the region, allowing scientists to reconstruct volcanic behavior in Southern Chile over geologic time.</p>
        <a class="note" href="https://schmidtocean.org/cruise/fire-and-ice-volcanic-and-glacial-interactions/" target="_blank" rel=”noopener noreferrer”>More info</a>
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
        <iframe src="https://www.youtube.com/embed/mEaW4aWr-bk?list=PLJGVqQI3okzY7kHQOr6yQk4L82M6QdgQ4" title="FKt241011 - Glitter Polychaete" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>Some deep-sea worms are bioluminescent, but this sassy sparkler has protein structures in the bristles that make them iridescent. Polychaetes play a vital role throughout our global Ocean, and seeing this unusual animal make headlines brought smiles to the Schmidt Ocean Institute team.</p>
        <a class="note"  href="https://schmidtocean.org/cruise/canyons-vents-and-seeps-of-the-chile-margin/" target="_blank" rel=”noopener noreferrer”>More info</a>
      `);
  modal.open();
}
