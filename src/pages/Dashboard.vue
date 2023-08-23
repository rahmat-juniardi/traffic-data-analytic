<template>
  <main class="content px-3 py-2">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="card border-0">
            <div class="card-header">
              <h4 class="card-title mb-0">
                Periode Data Traffic :
                <span v-text="periode.startDate"></span> - <span v-text="periode.endDate"></span>
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
        <div class="col-12 col-xxl-5 ">
          <div class="card  border-0">
            <div class="card-header ">
              <h4 class="card-title mb-0">
                Populasi Kendaraan
              </h4>
            </div>
            <div class="card-body">
              <div v-if="chartOptsPopulasiKendaraan">
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
              <h5 class="card-title">
                Keterangan Pajak Mati
              </h5>
            </div>
            <div class="card-body">
              <table-pajak :tableData="dataCountPopulasiKendaraan" :dataColumn="dataCountPajakMati" :typeTable="'pajakMati'"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xxl-6">
          <div class="card border-0">
            <div class="card-header">
              <h5 class="card-title">
                Keterangan Pajak Per Tahun
              </h5>
            </div>
            <div class="card-body">
              <table-pajak :tableData="dataTotalPopulasiPerTahun" :dataColumn="dataCountPopulasiPerTahun" :typeTable="'pajakPerTahun'"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-xxl-6">
          <div class="card border-0">
            <div class="card-header">
              <div class="row">
                <div class="col-6 d-flex align-items-center">
                  <h5 class="card-title ">
                    Rata-rata Pemantauan Tidak Bayar Pajak Harian
                  </h5>
                </div>
                <div class="col-6">
                  <h6 class="float-end" id="dataNowPajakHarian">Data Per {{ dateNow }}</h6>
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
import {Component, Vue, Watch} from "vue-facing-decorator";
import {Chart} from 'highcharts-vue'
import axios, {AxiosResponse} from "axios";
import dayjs from 'dayjs';
import 'dayjs/locale/id'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Constant from "../constant";
import {
  CountPajakHarian,
  CountPajakMati,
  CountPopulasiKendaraan,
  CountPopulasiPerTahun,
  Dict,
  ResponseDatasService
} from '../interfaces'
import TablePajak from "../components/TablePajak.vue";
import CommonDatepicker from "../components/CommonDatepicker.vue"

dayjs.extend(customParseFormat);


@Component({
  components: {
    Chart,
    TablePajak,
    CommonDatepicker
  }
})
export default class Layout extends Vue {

  filter: Dict = this.resetFilter()

  loading: boolean = false;

  updatePeriode: boolean = false

  periode = { "endDate": '', "startDate": '' }

  countPajakHarian: CountPajakHarian[] = []

  countPopulasiKendaraan: CountPopulasiKendaraan[] = []

  countPopulasiPerTahun: CountPopulasiPerTahun[] =[]

  countPajakMati: CountPajakMati[] = []

  dateNow: string = dayjs().locale('id').format(Constant.PREVIEW_FORMAT_DATE)


  routePath: string = "";


  @Watch('$route.query', { immediate: true })
  onHandleNavigationChange(value: Dict) {
    if (!this.routePath || this.routePath == this.$route.path) {
      this.routePath = this.$route.path;
      this.filter = this.resetFilter();
      this.periodeDate()
      // this.doFetchData();
    }
  }


  mounted(){
    this.$emit("filter", this.filter);
    this.$emit("updatePeriode", this.updatePeriode)
  }

  get chartOptsPopulasiKendaraan(){
    return this.getChartPopulasiKendaraan(this.dataCountPopulasiKendaraan);
  }

  get params() {
    const { filter: { startDate, endDate } } = this;
      return {startDate: this.setFormattedDate(startDate, Constant.PARSE_FORMAT_DATE), endDate: this.setFormattedDate(endDate, Constant.PARSE_FORMAT_DATE)}
  }

  periodeDate() {
    let dateTemp: { endDate: string; startDate: string }

      dateTemp = JSON.parse(JSON.stringify(this.filter))

    this.periode = { startDate: this.setFormattedDate(dateTemp.startDate), endDate: this.setFormattedDate(dateTemp.endDate)}

    this.doFetchData();

  }

  get dataCountPopulasiKendaraan(){
    const { countPopulasiKendaraan } = this
    const result :any = countPopulasiKendaraan.map((item) => {
      const temp :any = {}
      temp[item.name] = item.count;
      return temp
    })
    const dataObject :any= result.reduce((obj :any, item :any) => {
      const [key, value] = Object.entries(item)[0];
      obj[key] = value;
      return obj;
    }, {} as any);

    dataObject["TOTAL"] = Object.values(dataObject).reduce((acc :any, value: any) => acc + value, 0 as number);
    return dataObject
  }

  get dataCountPajakMati(){
    const { countPajakMati } = this
    return countPajakMati
  }

  get dataCountKendaraanPertahun(){
    const dataCount :any = this.countPopulasiPerTahun.map(item => ({
      "lateYear": item.lateYear,
      "vehicleTypes": item.vehicleTypes.reduce((acc:any, type:any) => {
        acc[type.name] = type.count;
        return acc;
      }, {} as any)
    }))
    return dataCount
  }

  get dataCountPopulasiPerTahun() {
    const { countPopulasiPerTahun } = this
    if (countPopulasiPerTahun.length === 0){
      return null
    }
    const dataCount :any = this.dataCountKendaraanPertahun
    const lateYearsToMerge = [2, 3, 4, 5];
    const mergedData :any = {
      "lateYear": 5,
      "vehicleTypes": {}
    };
    const newMergeData :any = this.mergeDataCountPopulation(lateYearsToMerge,mergedData, dataCount)
    const filteredData: any = dataCount?.filter((entry :any) => [1, 6].includes(entry.lateYear));
    filteredData.push(newMergeData)

    return {
      privateCar: this.dataPerTahunPerKendaraan(filteredData, "MOBIL PRIBADI"),
      motorcycle: this.dataPerTahunPerKendaraan(filteredData, "SEPEDA MOTOR"),
      bus: this.dataPerTahunPerKendaraan(filteredData, "BUS"),
      transportCar: this.dataPerTahunPerKendaraan(filteredData, "MOBIL BARANG"),
      ransus: this.dataPerTahunPerKendaraan(filteredData, "RANSUS")
    }
  }

  get dataTotalPopulasiPerTahun(){
    const inputData = this.dataCountKendaraanPertahun;
    const lateYearsToMerge = [1,2, 3, 4, 5, 6];
    const mergedData = {
      "lateYear": 6,
      "vehicleTypes": {}
    };
    const newMergedData :any = this.mergeDataCountPopulation(lateYearsToMerge,mergedData, inputData)
    newMergedData.vehicleTypes["TOTAL"] = Object.values(newMergedData.vehicleTypes).reduce(
        (acc :any, value: any) => acc + value, 0 as number);
    return newMergedData.vehicleTypes
  }

  mergeDataCountPopulation(lateYearsToMerge: any, mergedData :any, inputData?: any){
    for (const entry of inputData) {
      if (lateYearsToMerge.includes(entry.lateYear)) {
        const vehicleTypes = entry.vehicleTypes;
        for (const [typeName, count] of Object.entries(vehicleTypes)) {
          if (!mergedData.vehicleTypes[typeName]) {
            mergedData.vehicleTypes[typeName] = count;
          } else {
            mergedData.vehicleTypes[typeName] += count;
          }
        }
      }
    }
    return mergedData
  }

  dataPerTahunPerKendaraan(data :any = [], targetVehicleType =''){
    const relevantLateYears = [1, 5, 6];
    const countsArray = relevantLateYears.map(year => {
      const entry = data.find((item :any) => item.lateYear === year);
      const count = entry?.vehicleTypes[targetVehicleType] || 0;
      return {
        "lateYear": year,
        "count": count
      };
    });
    return countsArray
  }

  resetFilter(): Dict {
    return {
      startDate: dayjs().subtract(1, "month").toDate(),
      endDate: new Date(),
    }
  }

  setFormattedDate(date: string, formatDate: string = 'D MMMM YYYY' ) {
    dayjs.locale('id');
    const parsedDate = dayjs(date, { utc: true });
    return parsedDate.format(formatDate);
  }

  async doFetchData() {
    this.loading = true

    const [countPajakHarian, countPopulasiKendaraan, countPopulasiPerTahun, countPajakMati] = await Promise.all([
      this.fetchData(Constant.DASHBOARD_PAJAK_HARIAN_API, {"start-date": this.params.startDate,"end-date": this.params.endDate}),
      this.fetchData(Constant.DASHBOARD_POPULATIONS_API, {}),
        this.fetchData(Constant.DASHBOARD_POPULATIONS_BY_YEAR_API),
        this.fetchData(Constant.DASHBOARD_PAJAK_MATI_API)
    ]);

    this.countPajakHarian = countPajakHarian as CountPajakHarian[];
    this.countPopulasiKendaraan = countPopulasiKendaraan as CountPopulasiKendaraan[];
    this.countPopulasiPerTahun = countPopulasiPerTahun as CountPopulasiPerTahun[];
    this.countPajakMati = countPajakMati as CountPajakMati[];

    this.loading = false
  }

  async fetchData(url: string, addParams?: Dict): Promise<CountPajakHarian[] | CountPopulasiKendaraan[] | CountPopulasiPerTahun[] | CountPajakMati[]> {

    try {
      const response = await axios.get<
          any,
          AxiosResponse<ResponseDatasService<CountPajakHarian | CountPopulasiKendaraan | CountPopulasiPerTahun | CountPajakMati>>
      >(url, { params: { ...addParams } })

      return response.data.data as CountPajakHarian[] | CountPopulasiKendaraan[] | CountPopulasiPerTahun[] | CountPajakMati[];
    } catch (e) {
      console.log(e)
    }
    return []
  }

  getChartPopulasiKendaraan(data?:any){
    const newData = JSON.parse(JSON.stringify(data))
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
        title: {text: null},
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
        data: [newData['MOBIL PRIBADI']],
        color: '#f37272'
      }, {
        name: 'Sepeda Motor',
        data: [newData['SEPEDA MOTOR']],
        color: '#887dfa'
      }, {
        name: 'Bus',
        data: [newData['BUS']],
        color : '#7ce9f6'
      }, {
        name: 'Mobil Barang',
        data: [newData['MOBIL BARANG']],
        color: '#fcbb7d'
      }, {
        name: 'Ransus',
        data: [newData['RANSUS']],
        color: '#70dea1'
      }]
    }
  }

}
</script>