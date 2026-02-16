<script setup>
  import { onMounted, ref } from 'vue';

  const { countryCommonName } = defineProps(
    {
      countryCommonName: String
    }
  )

  const countryData = ref()

  onMounted(async () => {
    countryData.value = await fetch(`https://restcountries.com/v3.1/name/${countryCommonName}`)
      .then((res) => res.json())
      .then((data) => {
        return data
      })
  })
</script>

<template>
  <div v-if="countryData">
    <div v-for="country in countryData" :key="country.cca3">
      
      <h1>{{ country.name.common }} {{ country.flag }}</h1>
      <h2>{{ country.name.official }}</h2>

      <section>
        <h3>Informations Générales</h3>
        <ul>
          <li><strong>Nom natif :</strong> 
            <span v-for="(val, key) in country.name.nativeName" :key="key">
              {{ val.official }} ({{ key }})
            </span>
          </li>
          <li><strong>Indépendant :</strong> {{ country.independent ? 'Oui' : 'Non' }}</li>
          <li><strong>Statut :</strong> {{ country.status }}</li>
          <li><strong>Membre ONU :</strong> {{ country.unMember ? 'Oui' : 'Non' }}</li>
          <li><strong>Région :</strong> {{ country.region }} ({{ country.subregion }})</li>
          <li><strong>Continent :</strong> {{ country.continents.join(', ') }}</li>
          <li><strong>Capitale :</strong> {{ country.capital.join(', ') }}</li>
          <li><strong>Population :</strong> {{ country.population.toLocaleString() }}</li>
          <li><strong>Superficie :</strong> {{ country.area }} km²</li>
          <li><strong>Début de semaine :</strong> {{ country.startOfWeek }}</li>
        </ul>
      </section>

      <section>
        <h3>Codes et Identifiants</h3>
        <ul>
          <li><strong>TLD :</strong> {{ country.tld.join(', ') }}</li>
          <li><strong>CCA2 :</strong> {{ country.cca2 }}</li>
          <li><strong>CCN3 :</strong> {{ country.ccn3 }}</li>
          <li><strong>CCA3 :</strong> {{ country.cca3 }}</li>
          <li><strong>CIOC :</strong> {{ country.cioc }}</li>
          <li><strong>FIFA :</strong> {{ country.fifa }}</li>
        </ul>
      </section>

      <section>
        <h3>Localisation et Transport</h3>
        <ul>
          <li>
            <strong>Coordonnées (Pays) :</strong>
            {{ country.latlng?.join(', ') || 'Non disponible' }}
          </li>

          <li>
            <strong>Coordonnées (Capitale) :</strong>
            {{ country.capitalInfo?.latlng?.join(', ') || 'Non disponible' }}
          </li>

          <li>
            <strong>Enclavé (Landlocked) :</strong>
            {{ country.landlocked ? 'Oui' : 'Non' }}
          </li>

          <li>
            <strong>Frontières :</strong>
            {{ country.borders?.join(', ') || 'Aucune' }}
          </li>

          <li>
            <strong>Fuseaux horaires :</strong>
            {{ country.timezones?.join(', ') || 'Non disponible' }}
          </li>

          <li>
            <strong>Conduite :</strong>
            Côté {{ country.car?.side || 'Non disponible' }}
            (Signe: {{ country.car?.signs?.join(', ') || 'Aucun' }})
          </li>
        </ul>
      </section>


      <section>
        <h3>Langues et Devises</h3>
        <ul>
          <li><strong>Langues :</strong>
            <span v-for="(lang, code) in country.languages" :key="code">{{ lang }} ({{ code }}) </span>
          </li>
          <li><strong>Devises :</strong>
            <span v-for="(currency, code) in country.currencies" :key="code">
              {{ currency.name }} - {{ currency.symbol }} ({{ code }})
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h3>Communication</h3>
        <ul>
          <li><strong>Indicatif téléphonique (IDD) :</strong> {{ country.idd.root }}{{ country.idd.suffixes.join(', ') }}</li>
          <li><strong>Code Postal :</strong> Format "{{ country.postalCode.format }}" (Regex: {{ country.postalCode.regex }})</li>
        </ul>
      </section>

      <section>
        <h3>Démonymes</h3>
        <div v-for="(lang, key) in country.demonyms" :key="key">
          <strong>{{ key.toUpperCase() }} :</strong> Féminin: {{ lang.f }}, Masculin: {{ lang.m }}
        </div>
      </section>

      <section>
        <h3>Symboles Visuels</h3>
        <div>
          <p><strong>Drapeau :</strong> {{ country.flag }}</p>
          <img :src="country.flags.svg" :alt="country.flags.alt" width="200" />
        </div>
        <div>
          <p><strong>Armoiries :</strong></p>
          <img :src="country.coatOfArms.svg" width="100" />
        </div>
      </section>

      <section>
        <h3>Traductions</h3>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Officiel</th>
              <th>Commun</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(trans, code) in country.translations" :key="code">
              <td>{{ code }}</td>
              <td>{{ trans.official }}</td>
              <td>{{ trans.common }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Liens Externes</h3>
        <ul>
          <li><a :href="country.maps.googleMaps" target="_blank">Google Maps</a></li>
          <li><a :href="country.maps.openStreetMaps" target="_blank">OpenStreetMaps</a></li>
        </ul>
      </section>

    </div>
  </div>
  <div v-else>
    Chargement des données...
  </div>
</template>