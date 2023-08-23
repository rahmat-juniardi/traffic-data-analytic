<template>
<table-populasi-kendaraan :tableData="tableData" :tableColumn="Columns" :typeTable="typeTable">
  <template v-slot:privateCar>
    <template v-for="kendaraan in dataColumn?.privateCar" v-if="typeTable === 'pajakPerTahun'">
      <td >
        {{kendaraan.count.toLocaleString('id-ID')}}
      </td>
    </template>
    <template  v-else>
      <td>
        {{dataColumn?.privateCar?.pajakMati.toLocaleString('id-ID') }}
      </td>
      <td>
        {{dataColumn?.privateCar?.potensiPAD.toLocaleString('id-ID') }}
      </td>
    </template>
  </template>
  <template v-slot:motorcycle>
    <template v-for="kendaraan in dataColumn?.motorcycle" v-if="typeTable === 'pajakPerTahun'">
      <td>
        {{kendaraan.count.toLocaleString('id-ID')}}
      </td>
    </template>
    <template v-else>
      <td>
        {{dataColumn?.motorcycle?.pajakMati.toLocaleString('id-ID') }}
      </td>
      <td>
        {{dataColumn?.motorcycle?.potensiPAD.toLocaleString('id-ID') }}
      </td>
    </template>
  </template>
  <template v-slot:bus>
    <template v-for="kendaraan in dataColumn?.bus" v-if="typeTable === 'pajakPerTahun'">
      <td>
        {{kendaraan.count.toLocaleString('id-ID')}}
      </td>
    </template>
    <template v-else>
      <td>
        {{dataColumn?.bus?.pajakMati.toLocaleString('id-ID') }}
      </td>
      <td>
        {{dataColumn?.bus?.potensiPAD.toLocaleString('id-ID') }}
      </td>
    </template>
  </template>
  <template v-slot:transportCar>
    <template v-for="kendaraan in dataColumn?.transportCar" v-if="typeTable === 'pajakPerTahun'">
      <td>
        {{kendaraan.count.toLocaleString('id-ID')}}
      </td>
    </template>
    <template v-else>
      <td>
        {{dataColumn?.transportCar?.pajakMati.toLocaleString('id-ID') }}
      </td>
      <td>
        {{dataColumn?.transportCar?.potensiPAD.toLocaleString('id-ID') }}
      </td>
    </template>
  </template>
  <template v-slot:ransus="{formatNumber}">
    <template v-for="kendaraan in dataColumn?.ransus" v-if="typeTable === 'pajakPerTahun'">
      <td>
        {{kendaraan.count.toLocaleString('id-ID')}}
      </td>
    </template>
    <template v-else>
      <td>
        {{dataColumn?.ransus?.pajakMati.toLocaleString('id-ID') }}
      </td>
      <td>
        {{dataColumn?.ransus?.potensiPAD.toLocaleString('id-ID') }}
      </td>
    </template>
  </template>
  <template v-slot:totalPAD>
    <template v-if="typeTable === 'pajakMati'">
      <td colspan="2">
        {{dataColumn?.totalPAD?.potensiPAD.toLocaleString('id-ID') }}
      </td>
    </template>
  </template>
</table-populasi-kendaraan>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-facing-decorator";

import {Dict, CountPopulasiKendaraan, CountPopulasiPerTahun, TableProps} from "../interfaces";
import TablePopulasiKendaraan from "./TablePopulasiKendaraan.vue";

@Component({
  components: {TablePopulasiKendaraan}
})
export default class TablePajak extends Vue{

  @Prop({default: ()=> {}})
  tableData: any;

  @Prop({default: ()=> {}})
  dataColumn?: Dict;

  @Prop({default: ' '})
  typeTable?: string


  // privateCarData() {
  //   const {dataColumn} = this
  //    return this.dataColumn[0].privateCar
  // }

  get Columns() {
    // console.log(this.dataColumn)
    const addColumns :TableProps = [
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
      };
      accu[key] = {
        body: key,
        head: mapColName[key],
        type: mapType[key]
      };
      return accu;
    }, {} as TableProps )

    return addColumns
  }



}
</script>