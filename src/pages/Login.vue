
<template>
  <div class="login">
    <div class="vh-100 d-flex justify-content-center align-items-center">
      <div class="container">
        <div class="row ">
          <div class="col-12 ">
            <div class="card card-login bg-white">
              <div class="shape-image shape-image-top d-none d-md-block">
                <img src="/images/login/Login-bg-image-1.png" width="239" height="234" alt="">
              </div>
              <div class="shape-image shape-image-bottom d-none d-md-block">
                <img src="/images/login/Login-bg-image-2.png" width="239" height="234" alt="">
              </div>
              <div class="card-body">
                <form @submit.prevent="doLogin" >
                  <div class="card-header">
                    <h5 class="fw-bold mb-4 text-center">Traffic Data Analytic</h5>

                    <p class="mb-0"> Please sign-in to your account</p>
                  </div>
                  <div class="card-body p-4 pt-0">

                    <div class="mb-3">
                      <label for="input-username" class="form-label mb-1">Email</label>
                      <input v-model="user.email" class="form-control" id="input-username" />
                    </div>
                    <div class="mb-4">
                      <label for="input-password" class="form-label mb-1">Password</label>
                      <input type="password" class="form-control" id="input-password" v-model="user.password" />
                    </div>

                      <button type="submit" class="btn-login">
                          <v-icon name="fa-circle-notch" :scale="1.2" v-if="loading" animation="spin" />
                        <template v-else>
                          <span>Submit</span>
                        </template>
                      </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-facing-decorator";
import Constant from "../constant";

@Component
export default class LoginPage extends Vue {
  user = {
    email: "",
    password: "",
  };

  loading: boolean = false;

  async doLogin() {
    if (this.loading) return;

    if (!this.user.email || !this.user.password) {
      this.$notify({
        type: "warning",
        title: "Field Kosong",
        text: "Email & Password tidak boleh kosong"
      })
      return
    }

    try {
      this.loading = true;
      const response = await axios.post(Constant.LOGIN_API, this.user);
      console.log(response)
      if (response.data.data) {
        this.$store.commit("setLoginSucceed", response.data.data);
        return
      }

      // const response = await axios.get(Constant.LOGIN_API);
      // if (response.data.data) {
      //   this.$store.commit("setLoginSucceed", response.data.data);
      //   return
      // }

    } catch (e) {
      console.log(e);
    }

    this.loading = false;
  }
}
</script>

<style lang="scss">
@import "../styles/variables";
$color_1: rgba(47, 43, 61, 0.78);
$color_2: rgba(47, 43, 61, 0.58);
$color_3: #FFF;
$background-color_1: rgb(248, 247, 250);
$background-color_2: #fff;
$background-color_3: rgb(115, 103, 240);
$background-color_4: rgb(104, 91, 241);

.login {
  background-color: $background-color_1;
  .container {
    z-index: 2;
  }
  .form-control {
    color: $color_1 !important;
    background-color: $background-color_2;
    border: 1px solid rgb(168, 168, 168);
    &:focus {
      outline: none !important;
      border: 1px solid rgba(104, 91, 241, 0);
      background-color: $background-color_2;
      box-shadow: rgba(104, 91, 241, 0.3) 0 0 0 3px;
    }
  }
  .card-login {
    box-shadow: 0 4px 18px rgba(47, 43, 61, .1), 0 0 transparent, 0 0 transparent;
    border: 0;
    max-width: 448px;
    margin: 0 auto 0 auto;
  }
  .card-body {
    padding: 16px;
  }
  .card-header {
    p {
      font-size: 15px;
      font-weight: 500;
      color: $color_2;
    }
  }
  .form-label {
    font-size: 13px;
    color: $color_2;
  }
  .btn-login {
    background-color: $background-color_3;
    color: $color_3;
    font-weight: 600;
    letter-spacing: .0269rem;
    box-shadow: 0 3px 8px rgba(47, 43, 61, .14), 0 0 transparent, 0 0 transparent;
    align-items: center;
    border: 0;
    border-radius: 6px;
    width: 100%;
    height: 38px;
    &:hover {
      background-color: $background-color_4;
    }
  }
}

.shape-image{
  z-index: -2;
  position: absolute;
  block-size: 233px;
  inline-size: 238px;

  &.shape-image-top {
    inset-block-start: -77px;
    inset-inline-start: -40px;
  }
  &.shape-image-bottom {
    inset-block-end: -55px;
    inset-inline-end: -55px;
  }
}


/*
@import "../styles/variables";

.login{
  background-color: rgb(248, 247, 250);
}

.login .container{
  z-index: 2;
}

.login .form-control {
  color: rgba(47, 43, 61, 0.78) !important;
  background-color: #fff;
  border: 1px solid rgb(168, 168, 168);
}

.login .form-control:focus {
  outline: none !important;
  border: 1px solid rgba(104, 91, 241, 0);
  background-color: #fff;
  box-shadow: rgba(104, 91, 241, 0.3) 0px 0px 0px 3px;
}

.login .card-login {
  box-shadow: 0 4px 18px rgba(47, 43, 61, .1), 0 0 transparent, 0 0 transparent;
  border: 0px;
  max-width: 448px;
  margin: 0 auto 0 auto;
}

.login .card-body {
  padding: 16px;
}

.login .card-header p {
  font-size: 15px;
  font-weight: 500;
  color: rgba(47, 43, 61, 0.58);
}

.login .form-label {
  font-size: 13px;
  color: rgba(47, 43, 61, 0.58);
}

.login .btn-login {
  background-color: rgb(115, 103, 240);
  color: #FFF;
  font-weight: 600;
  letter-spacing: .0269rem;
  box-shadow: 0 3px 8px rgba(47, 43, 61, .14), 0 0 transparent, 0 0 transparent;
  align-items: center;
  border: 0px;
  border-radius: 6px;
  width: 100%;
  height: 38px;
}

.login .btn-login:hover {
  background-color: rgb(104, 91, 241);
}

.shape-image-top {
  inset-block-start: -77px;
  inset-inline-start: -40px;
}

.shape-image-bottom {
  inset-block-end: -55px;
  inset-inline-end: -55px;
}

.shape-image-top,
.shape-image-bottom {
  z-index: -2;
  position: absolute;
  block-size: 233px;
  inline-size: 238px;
}
*/


</style>
