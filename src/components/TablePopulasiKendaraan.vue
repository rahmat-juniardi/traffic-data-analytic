<template>

  <table class="table text-end">
    <thead>
    <tr class="height-60">
      <th class="td-kendaraan text-start">Kendaraan</th>
      <th>Populasi</th>
      <template v-for="(item, key,idx) in tableColumn" :key="key">
        <th v-if="item.type === typeTable" >
          {{ item.head}}
        </th>
      </template>

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
      <td>{{formatedPopulasiKendaraan['MOBIL PRIBADI']}}</td>
        <slot name="privateCar" ></slot>
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
      <td>{{formatedPopulasiKendaraan['SEPEDA MOTOR']}}</td>
      <slot name="motorcycle"></slot>
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
      <td >{{formatedPopulasiKendaraan['BUS']}}</td>
      <slot name="bus"></slot>
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
      <td >{{formatedPopulasiKendaraan['MOBIL BARANG']}}</td>
      <slot name="transportCar"></slot>
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
      <td >{{formatedPopulasiKendaraan['RANSUS']}}</td>

      <slot name="ransus" :formatNumber="formatedPopulasiKendaraan"></slot>
    </tr>
    <tr class="fw-bold height-60">
      <td class="td-kendaraan text-start ">Total</td>
      <td >{{formatedPopulasiKendaraan['TOTAL']}}</td>
      <slot name="totalPAD"></slot>
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
        tableData?: any;

        @Prop({default: ()=> {}})
        tableColumn? :any;

      @Prop({default: ''})
      typeTable?: string;

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

<style lang="scss">
.height-60{
  height: 60px;
}
</style>