<template>
  <div class="tw-bg-main p-5" style="height: 100vh">
    <div class="tw-container text-center p-4">
      <p class="tw-text-size24 mb-3">後台登入</p>
      <form class="mb-3" @submit.prevent="systemLogin">
        <!-- 帳號 -->
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="Account"
            placeholder="帳號"
            v-model="login.account"
          />
          <label for="Account">帳號</label>
        </div>
        <!-- 密碼 -->
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="Password"
            placeholder="密碼"
            v-model="login.password"
            maxlength="40"
          />
          <label for="Password">密碼(最高40個英文加數字)</label>
        </div>
        <button class="form-btn" type="submit">登入</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            login: {
                account: '',
                password: ''
            }
        }
    },
    methods: { 
        systemLogin() {
            console.log('登入')
            const vm = this
            const systemLoginApi = `${process.env.VUE_APP_API}/user/login`
            const data = new FormData()
            data.append('account', this.login.account)
            data.append('password', this.login.password)
            data.append('userType', 2)
            this.$methods.switchLoading('show')
            $.ajax({
                type: 'POST',
                async: true,
                url: systemLoginApi,
                data: data,
                processData: false,
                contentType: false,
                success: function(res) {
                console.log(res)
                if (res.code === '200') {
                    const token = res.data
                    vm.$methods.setCookie('b_serverToken', token)
                    vm.$router.push({name: 'Analysis'})
                }
                vm.$methods.switchLoading('hide')
                },
                error: function(err) {
                console.log(err.responseJSON)
                alert(err.responseJSON.message)
                vm.$methods.switchLoading('hide')
                },
            })
        }
    }
}
</script>