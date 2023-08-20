<template>
  <div class="wrapper">
    <!-- =========== Sidebar for admin dashboard =========== -->

    <aside id="sidebar" :class="extendSidebar ? 'collapsed' : ''">

      <!-- ======== Content For Sidebar ========-->
      <div class="h-100">
        <div class="sidebar-logo">
          <router-link to="/">
            <span >TRAFFIC DATA <br /> ANALYTIC</span>
          </router-link>
        </div>

        <ul class="sidebar-nav">
          <li class="sidebar-item">
            <a href="#" class="sidebar-link mb-1" data-bs-target="#dashboard"
               data-bs-toggle="collapse" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   aria-hidden="true" role="img" tag="i"
                   style="margin-left: -8px; position: relative; top: -3px;" class="me-2" width="22"
                   height="22">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                   stroke-width="1.5">
                  <path
                      d="m19 8.71l-5.333-4.148a2.666 2.666 0 0 0-3.274 0L5.059 8.71a2.665 2.665 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.2c0-.823-.38-1.6-1.03-2.105">
                  </path>
                  <path d="M16 15c-2.21 1.333-5.792 1.333-8 0"></path>
                </g>
              </svg>
              <span>Dashboards</span>
            </a>
            <ul id="dashboard" class="sidebar-dropdown list-unstyled collapse show" data-bs-parent="#sidebar">
              <li class="sidebar-item">

                <a href="#" class="sidebar-link active">
                  <i class="fa-regular fa-circle fa-2xs pe-3"></i>
                  Analytics</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>

    <!-- ========= Main section of dashboard ======= -->

    <div class="main" :class="extendSidebar ? 'collapsed' : ''">

      <!-- ========= Main navbar section of dashboard ======= -->

      <nav id="navbar" class="navbar fixed-top navbar-expand   px-3 py-1    my-3" :class="extendSidebar ? 'collapsed' : ''">

        <button class="btn me-3" id="sidebar-toggle" @click="sidebarToggle()" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="filter-data-traffic">

          <div class="btn-filter" @click="toggleModal" >
          <button class="trigger-modal-custom btn" >
          <svg xmlns="http://www.w3.org/2000/svg" class="" width="26" height="26" stroke-width="1.5"
               stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          </button>
          <span class="pe-auto fw-normal" id="">Cari Periode</span>
          </div>

          <div class="modal-custom " :class="showModal ? 'show-modal-custom' : ''" @click="windowOnClick($event)">
            <div class="modal-content-custom" >
              <div class="modal-header-custom">
                <div class="icon-header">
                  <svg xmlns="http://www.w3.org/2000/svg" class="d-inline" width="26" height="26"
                       stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                       stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                  <span>Pilih Periode Data Traffic</span>
                  <span class="close-button-custom float-end" @click="toggleModal">&times;</span>
                </div>
              </div>
              <div class="modal-body-custom">
                <p class="mb-3">Mulai dari :</p>
                <div class="d-flex justify-content-center mb-4">
                  <select class="form-select me-3" aria-label="Default select example"
                          style="width: 120px;">
                    <option selected>Januari</option>
                    <option value="1">Februari</option>
                    <option value="2">Maret</option>
                    <option value="3">April</option>
                    <option value="1">Mei</option>
                    <option value="2">Juni</option>
                    <option value="3">Juli</option>
                    <option value="3">Agustus</option>
                    <option value="1">September</option>
                    <option value="2">Oktober</option>
                    <option value="3">November</option>
                    <option value="3">Desember</option>
                  </select>

                  <select class="form-select" aria-label="Default select example"
                          style="width: 120px;">
                    <option selected>2023</option>
                    <option value="1">2022</option>
                    <option value="2">2021</option>
                    <option value="3">2020</option>
                  </select>
                </div>
                <p class="mb-3">Sampai :</p>
                <div class="d-flex justify-content-center">
                  <select class="form-select me-3" aria-label="Default select example"
                          style="width: 120px;">
                    <option selected>Januari</option>
                    <option value="1">Februari</option>
                    <option value="2">Maret</option>
                    <option value="3">April</option>
                  </select>

                  <select class="form-select" aria-label="Default select example"
                          style="width: 120px;">
                    <option selected>2023</option>
                    <option value="1">2022</option>
                    <option value="2">2021</option>
                    <option value="3">2020</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-collapse navbar">
          <ul class="navbar-nav">
            <li class="nav-item me-1">
              <button class=" navbar-btn btn ">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img" tag="i" class="" width="1em" height="1em"
                     viewBox="0 0 24 24" style="font-size: 26px; height: 26px; width: 26px;">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                     stroke-width="1.5">
                    <path d="M4 5h7M9 3v2c0 4.418-2.239 8-5 8"></path>
                    <path d="M5 9c0 2.144 2.952 3.908 6.7 4m.3 7l4-9l4 9m-.9-2h-6.2"></path>
                  </g>
                </svg>
              </button>
            </li>
            <li class="nav-item me-1">
              <button class=" navbar-btn btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img" tag="i" class="" width="1em" height="1em"
                     viewBox="0 0 24 24" style="font-size: 26px; height: 26px; width: 26px;">
                  <path fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="1.5"
                        d="M14.828 14.828a4 4 0 1 0-5.656-5.656a4 4 0 0 0 5.656 5.656zm-8.485 2.829l-1.414 1.414M6.343 6.343L4.929 4.929m12.728 1.414l1.414-1.414m-1.414 12.728l1.414 1.414M4 12H2m10-8V2m8 10h2m-10 8v2">
                  </path>
                </svg>
              </button>
            </li>
            <li class="nav-item me-1">
              <button class=" navbar-btn btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img" tag="i" class="" width="1em" height="1em"
                     viewBox="0 0 24 24" style="font-size: 26px; height: 26px; width: 26px;">
                  <path fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="1.5"
                        d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 2h6m-3-3v6">
                  </path>
                </svg>
              </button>
            </li>
            <li class="nav-item me-1">
              <button class=" navbar-btn btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img" tag="i" class="" width="1em" height="1em"
                     viewBox="0 0 24 24" style="font-size: 26px; height: 26px; width: 26px;">
                  <path fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="1.5"
                        d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6M9 17v1a3 3 0 0 0 6 0v-1">
                  </path>
                </svg>
              </button>
            </li>
            <li class="nav-item dropdown">
              <a href="#" data-bs-toggle="dropdown" class="nav-icon pe-md-0">
                <img src="/images/profile.jpg" class="avatar img-fluid rounded" alt="">
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a  class="dropdown-item" @click.prevent="doLogOut">Logout</a>
              </div>
            </li>
          </ul>
        </div>

      </nav>

      <!-- ========= Main content section of dashboard ======= -->
      <router-view/>


    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
@Component
export default class Layout extends Vue {

  extendSidebar:boolean = false
  showModal: boolean = false

  doLogOut() {
    this.$store.commit("setLoggedOut");
  }
  windowOnClick(event:any) {
    if (event.target.classList.contains('modal-custom')) {
      this.toggleModal();
    }
  }

  sidebarToggle(){
    this.extendSidebar = !this.extendSidebar;
    console.log(this.extendSidebar)
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}

</script>

<style>
.btn-filter{
  cursor: pointer;
}
</style>