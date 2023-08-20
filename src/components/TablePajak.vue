<template>
<table-populasi-kendaraan :tableData="tableData" :tableColumn="Columns" :typeTable="typeTable">
  <template v-slot:cell="">

  </template>
</table-populasi-kendaraan>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-facing-decorator";

import {Dict, CountPopulasiKendaraan} from "../interfaces";
import TablePopulasiKendaraan from "./TablePopulasiKendaraan.vue";

@Component({
  components: {TablePopulasiKendaraan}
})
export default class TablePajak extends Vue{

  @Prop({default: ()=> {}})
  tableData!: CountPopulasiKendaraan;

  @Prop({default: 'pajakMati'})
  typeTable: string

  get Columns() {


    const addColumns = [
      "pajakMati",
      "potensiPAD",
        "satuTahun",
        "duaLimaTahun",
        "lebihLimaTahun",
    ].reduce((accu, key) => {
      const mapColName: Dict = {
        pajakMati: "Pajak Mati",
        potensiPAD: "Potensi PAD",
        satuTahun: "1 Tahun",
        duaLimaTahun: "2-5 Tahun",
        lebihLimaTahun: ">5 Tahun",
      };
      const mapType: Dict = {
        pajakMati: "pajakMati",
        potensiPAD: "pajakMati",
        satuTahun: "pajakPerTahun",
        duaLimaTahun: "pajakPerTahun",
        lebihLimaTahun: "pajakPerTahun",
      }
      accu[key] = {
        body: key,
        head: mapColName[key],
        type: mapType[key]
      };
      return accu;
    }, {})

    return addColumns
  }



}
</script>