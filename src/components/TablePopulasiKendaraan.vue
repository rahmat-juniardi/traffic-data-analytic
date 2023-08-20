<template>

  <table class="table">
    <thead>
    <tr>
      <th class="td-kendaraan">Kendaraan</th>
      <th>Populasi</th>
      <th v-for="(item, key,idx) in tableColumn" :key="key">
        <span v-if="item.type == this.typeTable">{{ item.head}}</span>
      </th>

<!--      <th>Pajak Mati</th>-->
<!--      <th>Potensi PAD</th>-->
    </tr>
    </thead>
    <tbody >
    <tr>
      <td class="fw-medium td-kendaraan">
        <div class="d-flex align-items-center py-2">
          <div class="icon-item me-2">
            <img width="38" height="38" src="/images/car-icons/car.png"
                 alt="penindakan" />
          </div>
          <div class="d-flex flex-column">
            Mobil Pribadi
          </div>
        </div>
      </td>
      <td> {{formatedPopulasiKendaraan.privateCar}}</td>
      <td>300,000</td>
      <td>Belum Tersedia</td>
    </tr>
    <tr>
      <td class="fw-medium td-kendaraan">
        <div class="d-flex align-items-center py-2">
          <div class="icon-item me-2">
            <img width="38" height="38"
                 src="/images/car-icons/motorcycle.png" alt="penindakan" />
          </div>
          <div class="d-flex flex-column">
            Sepeda Motor
          </div>
        </div>
      </td>
      <td>{{formatedPopulasiKendaraan.motorcycle}}</td>
      <td>2,000,000</td>
      <td>Belum Tersedia</td>
    </tr>
    <tr>
      <td class="fw-medium td-kendaraan">
        <div class="d-flex align-items-center py-2">
          <div class="icon-item me-2">
            <img width="38" height="38" src="/images/car-icons/bus.png"
                 alt="penindakan" />
          </div>
          <div class="d-flex flex-column">
            BUS
          </div>
        </div>
      </td>
      <td>{{ formatedPopulasiKendaraan.bus }}</td>
      <td>2,000,000</td>
      <td>Belum Tersedia</td>
    </tr>
    <tr>
      <td class="fw-medium td-kendaraan">
        <div class="d-flex align-items-center py-2">
          <div class="icon-item me-2">
            <img width="38" height="38" src="/images/car-icons/pickup.png"
                 alt="penindakan" />
          </div>
          <div class="d-flex flex-column">
            Mobil Barang
          </div>
        </div>
      </td>
      <td>{{formatedPopulasiKendaraan.transportCar}}</td>
      <td>2,000,000</td>
      <td>Belum Tersedia</td>
    </tr>
    <tr>
      <td class="fw-medium td-kendaraan">
        <div class="d-flex align-items-center py-2">
          <div class="icon-item me-2">
            <img width="38" height="38" src="/images/car-icons/van.png"
                 alt="penindakan" />
          </div>
          <div class="d-flex flex-column">
            Ransus
          </div>
        </div>
      </td>
      <td>{{formatedPopulasiKendaraan.ransus}}</td>
      <td>2,000,000</td>
      <td>Belum Tersedia</td>
    </tr>
    <tr>
      <td class="fw-bold td-kendaraan">Total</td>
      <td scope="row" colspan="2">{{formatedPopulasiKendaraan.total}}</td>
    </tr>
    </tbody>
  </table>

</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-facing-decorator";
    import {CountPopulasiKendaraan} from "../interfaces";
    import Constant from "../constant";

    @Component
    export default class TablePopulasiKendaraan extends Vue{

        @Prop({default: ()=> {}})
        tableData!: CountPopulasiKendaraan;

        @Prop({default: ()=> {}})
        tableColumn? :any;

      @Prop({default: ''})
      typeTable: string

        get formatedPopulasiKendaraan(){
          const {tableData} = this

          let formattedData :any = {};

          for (const key in tableData) {
            formattedData[key] = tableData[key].toLocaleString(Constant.NUMBER_FORMAT);
          }
          return formattedData
        }

    }
</script>