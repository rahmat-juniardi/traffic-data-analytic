<template>
  <main class="content px-3 py-2">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="card border-0">
            <div class="card-header">
              <h4 class="card-title mb-0">
                Periode Data Traffic :
                <span class=""> 1 Januari 2023 - 30 Juni 2023</span>
              </h4>

            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex">
          <div class="card flex-fill border-0">
            <div class="card-header ">
              <h4 class="card-title ">
                Kegiatan Kolaboratif
              </h4>

            </div>
            <div class="card-body px-4 pb-2 ">
              <div class="row d-flex ">
                <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-4 order-sm-0">
                  <div class="d-flex align-items-center ">
                    <div class="icon-item me-2">

                      <img width="42" height="42" src="/images/icons/penindakan.png"
                           alt="penindakan" />
                    </div>
                    <div class="d-flex flex-column">
                      <span class="h5 fw-semibold  mb-1">18,000</span>
                      <span>Penindakan</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-4 order-sm-3 order-md-4">
                  <div class="d-flex align-items-center">
                    <div class="icon-item me-2">

                      <img width="42" height="42" src="/images/icons/peningkatan.png"
                           alt="penindakan" />
                    </div>
                    <div class="d-flex flex-column">
                      <span class="h5 fw-semibold mb-1 ">7,000</span>
                      <span>Peningkatan Ketertiban</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-4 order-sm-2">
                  <div class="d-flex align-items-center">
                    <div class="icon-item me-2">

                      <img width="42" height="42" src="/images/icons/dukungan_biaya.png"
                           alt="penindakan" />
                    </div>
                    <div class="d-flex flex-column">
                      <span class="h5 fw-semibold  mb-1">Rp 144,000,000</span>
                      <span>Dukungan Biaya</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4  mb-3 order-sm-4 order-md-5">
                  <div class="d-flex align-items-center">
                    <div class="icon-item me-2">

                      <img width="42" height="42" src="/images/icons/pendapatan.png"
                           alt="penindakan" />
                    </div>
                    <div class="d-flex flex-column">
                      <span class="h5 fw-semibold  mb-1">Rp 190,000,000</span>
                      <span>Pendapatan Masuk</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 mb-3 order-sm-5 order-md-3">
                  <div class="d-flex align-items-center">
                    <div class="icon-item me-2">

                      <img width="42" height="42" src="/images/icons/waktu_respon.png"
                           alt="penindakan" />
                    </div>
                    <div class="d-flex flex-column">
                      <span class="h5 fw-semibold  mb-1">207 Hari</span>
                      <span>Rata-rata Respon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-xxl-5">
          <div class="card border-0">
            <div class="card-header">
              <h5 class="card-title">
                Keterangan Pajak Mati
              </h5>
            </div>
            <div class="card-body">
              <table-pajak :tableData="countPopulasiKendaraan" />
<!--              <table class="table">-->
<!--                <thead>-->
<!--                <tr>-->
<!--                  <th class="td-kendaraan">Kendaraan</th>-->
<!--                  <th>Populasi</th>-->
<!--                  <th>Pajak Mati</th>-->
<!--                  <th>Potensi PAD</th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody >-->
<!--                <tr>-->
<!--                  <td class="fw-medium td-kendaraan">-->
<!--                    <div class="d-flex align-items-center py-2">-->
<!--                      <div class="icon-item me-2">-->
<!--                        <img width="38" height="38" src="/images/car-icons/car.png"-->
<!--                             alt="penindakan" />-->
<!--                      </div>-->
<!--                      <div class="d-flex flex-column">-->
<!--                        Mobil Pribadi-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td> {{countPopulasiKendaraan.privateCar.toLocaleString('id-ID')}}</td>-->
<!--                  <td>300,000</td>-->
<!--                  <td>Belum Tersedia</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="fw-medium td-kendaraan">-->
<!--                    <div class="d-flex align-items-center py-2">-->
<!--                      <div class="icon-item me-2">-->
<!--                        <img width="38" height="38"-->
<!--                             src="/images/car-icons/motorcycle.png" alt="penindakan" />-->
<!--                      </div>-->
<!--                      <div class="d-flex flex-column">-->
<!--                        Sepeda Motor-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td>{{countPopulasiKendaraan.motorcycle.toLocaleString('id-ID')}}</td>-->
<!--                  <td>2,000,000</td>-->
<!--                  <td>Belum Tersedia</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="fw-medium td-kendaraan">-->
<!--                    <div class="d-flex align-items-center py-2">-->
<!--                      <div class="icon-item me-2">-->
<!--                        <img width="38" height="38" src="/images/car-icons/bus.png"-->
<!--                             alt="penindakan" />-->
<!--                      </div>-->
<!--                      <div class="d-flex flex-column">-->
<!--                        BUS-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td>{{countPopulasiKendaraan.bus.toLocaleString('id-ID')}}</td>-->
<!--                  <td>2,000,000</td>-->
<!--                  <td>Belum Tersedia</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="fw-medium td-kendaraan">-->
<!--                    <div class="d-flex align-items-center py-2">-->
<!--                      <div class="icon-item me-2">-->
<!--                        <img width="38" height="38" src="/images/car-icons/pickup.png"-->
<!--                             alt="penindakan" />-->
<!--                      </div>-->
<!--                      <div class="d-flex flex-column">-->
<!--                        Mobil Barang-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td>{{countPopulasiKendaraan.transportCar.toLocaleString('id-ID')}}</td>-->
<!--                  <td>2,000,000</td>-->
<!--                  <td>Belum Tersedia</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="fw-medium td-kendaraan">-->
<!--                    <div class="d-flex align-items-center py-2">-->
<!--                      <div class="icon-item me-2">-->
<!--                        <img width="38" height="38" src="/images/car-icons/van.png"-->
<!--                             alt="penindakan" />-->
<!--                      </div>-->
<!--                      <div class="d-flex flex-column">-->
<!--                        Ransus-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td>{{countPopulasiKendaraan.ransus.toLocaleString('id-ID')}}</td>-->
<!--                  <td>2,000,000</td>-->
<!--                  <td>Belum Tersedia</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="fw-bold td-kendaraan">Total</td>-->
<!--                  <td scope="row" colspan="2">{{countPopulasiKendaraan.total.toLocaleString('id-ID')}}</td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--              </table>-->
            </div>
          </div>
        </div>
        <div class="col-12 col-xxl-7">
          <div class="card border-0">
            <div class="card-header">
              <h5 class="card-title">
                Keterangan Pajak Per Tahun
              </h5>
            </div>
            <div class="card-body">
              <table class="table">
                <thead class="">
                <tr>
                  <th class="td-kendaraan">Kendaraan</th>
                  <th>Populasi</th>
                  <th>1 Tahun</th>
                  <th>2-5 Tahun</th>
                  <th>>5 Tahun</th>
                </tr>
                </thead>
                <tbody>
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
                  <td>590,000</td>
                  <td>300,000</td>
                  <td>590,000</td>
                  <td>300,000</td>
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
                  <td>4,100,000</td>
                  <td>2,000,000</td>
                  <td>4,100,000</td>
                  <td>2,000,000</td>
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
                  <td>4,100,000</td>
                  <td>2,000,000</td>
                  <td>4,100,000</td>
                  <td>2,000,000</td>
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
                  <td>4,100,000</td>
                  <td>2,000,000</td>
                  <td>4,100,000</td>
                  <td>2,000,000</td>
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
                  <td>4,100,000</td>
                  <td>2,000,000</td>
                  <td>4,100,000</td>
                  <td>2,000,000</td>
                </tr>
                <tr>
                  <td class="td-kendaraan fw-bold">Total</td>
                  <td scope="row" class="" colspan="4  ">4,983,000</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-xxl-5 ">
          <div class="card  border-0">
            <div class="card-header ">
              <h4 class="card-title mb-0">
                Populasi Kendaraan
              </h4>
            </div>
            <div class="card-body pb-4">
              <div v-if="chartOptsPopulasiKendaraan" class="mb-3">
                <chart :options="chartOptsPopulasiKendaraan" />
              </div>
              <div class="d-flex flex-column align-items-center justify-center py-3" v-else>
                <v-icon name="md-areachart-twotone" :scale="12" />
                <h3>Chart Kosong</h3>
                <p class="text-muted">Coba untuk ganti filter</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xxl-7">
          <div class="card border-0">
            <div class="card-header">
              <div class="row">
                <div class="col-6 d-flex align-items-center">
                  <h5 class="card-title ">
                    Rata-rata Pemantauan Tidak Bayar Pajak Harian
                  </h5>
                </div>
                <div class="col-6">
                  <h6 class="float-end" id="dataNowPajakHarian">Data Per 18 Agustus 2023</h6>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="gridtable">
                <table class="table table-hover table-pajak-harian">
                  <thead>
                    <tr>
                      <th class="td-kendaraan">Titik Simpang</th>
                      <th class="text-center">Pajak Mati</th>
                      <th class="text-center">Perlintasan</th>
                      <th class="text-center">Index</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item,key) in countPajakHarian" :key="key">
                    <td class="fw-medium td-titik_simpang">{{item.location}}</td>
                    <td class="text-center">{{ item.totalMatch }}</td>
                    <td class="text-center">{{item.totalVehicle}}</td>
                    <td class="text-center fw-semibold" ><span style="color: #EA5455; background-color: #FBE3E4; border-radius: 5px; padding:4px;">{{(item.totalMatch/item.totalVehicle).toFixed(2)}}</span></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-facing-decorator";
import { Chart } from 'highcharts-vue'
import axios, { AxiosResponse } from "axios";
import dayjs from 'dayjs';

import Constant from "../constant";
import {Dict,ResponseDatasService, CountPajakHarian, CountPopulasiKendaraan} from '../interfaces'
import TablePajak from "../components/TablePajak.vue";
@Component({
  components: {
    Chart,
    TablePajak
  }
})
export default class Layout extends Vue {

  filter: Dict = this.resetFilter()

  loading: boolean = false;

  countPajakHarian: CountPajakHarian[] = []

  countPopulasiKendaraan: CountPopulasiKendaraan[] = []


  routePath: string = "";

  @Watch('$route.query', { immediate: true })
  onHandleNavigationChange(value: Dict) {
    if (!this.routePath || this.routePath == this.$route.path) {
      this.routePath = this.$route.path;

      this.filter = this.resetFilter();
      this.doFetchData();
    }
  }

  get countPopulasiKendaraanTotal(){
    const { countPopulasiKendaraan } = this

    let formattedData :any[]= [];

    for (const key in countPopulasiKendaraan) {
      formattedData[key] = countPopulasiKendaraan[key].toLocaleString('id-ID');
    }

    return formattedData
  }

  get chartOptsPopulasiKendaraan(){
    const { countPopulasiKendaraan } = this




    return this.getChartPopulasiKendaraan(countPopulasiKendaraan);
  }

  get params() {
    const { filter: { startTime, endTime } } = this;
    return { startTime: startTime.getTime(), endTime: endTime.getTime() }
  }

  resetFilter(): Dict {
    return {
      startTime: dayjs().subtract(1, "month").startOf("month").toDate(),
      endTime: new Date(),
    }
  }


  async doFetchData() {
    this.loading = true

    const [countPajakHarian, countPopulasiKendaraan] = await Promise.all([
      this.fetchData(Constant.DASHBOARD_PAJAK_HARIAN_API, {}),
      this.fetchData(Constant.DASHBOARD_POPULATIONS_API, {})
    ]);

    this.countPajakHarian = countPajakHarian as CountPajakHarian[];
    this.countPopulasiKendaraan = countPopulasiKendaraan as CountPopulasiKendaraan[];

    this.loading = false
  }


  async fetchData(url: string, addParams?: Dict): Promise<CountPajakHarian[] | CountPopulasiKendaraan[]> {
    const { params } = this

    try {
      const response = await axios.get<
          any,
          AxiosResponse<ResponseDatasService<CountPajakHarian | CountPopulasiKendaraan>>
      >(url, { params: { ...params, ...addParams } })


      // return response.data.data as CountPajakHarian[]
      return response.data.data as CountPajakHarian[] | CountPopulasiKendaraan[];
    } catch (e) {
      console.log(e)
    }

    return []
  }

  getChartPopulasiKendaraan(data: CountPopulasiKendaraan){
    return {
      chart: {type: 'column'},
      title: {text: null},
      xAxis: {
        categories: [''],
        title: {text: null},
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
        title: {text: 'Populasi'},
        labels: {overflow: 'justify'},
        gridLineWidth: 1
      },
      tooltip: {valueSuffix: ' kendaraan'},
      plotOptions: {
        column: {
          borderRadius: '10%',
          dataLabels: { enabled: true},
          groupPadding: 0.2
        }
      },
      credits: {enabled: false},
      series: [{
        name: 'Mobil Pribadi',
        data: [data?.privateCar],
        color: '#f37272'
      }, {
        name: 'Sepeda Motor',
        data: [data?.motorcycle],
        color: '#887dfa'
      }, {
        name: 'Bus',
        data: [data?.bus],
        color : '#7ce9f6'
      }, {
        name: 'Mobil Barang',
        data: [data?.transportCar],
        color: '#fcbb7d'
      }, {
        name: 'Ransus',
        data: [data?.ransus],
        color: '#70dea1'
      }]
    }
  }

}
</script>