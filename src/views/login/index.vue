<template>
  <div class="login-outer">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="用户名"
        prop="username"
      >
        <svg-icon url="https://res.lgdsunday.club/user.svg" />
        <el-input
          v-model="loginForm.username"
          style="width: 400px;"
        />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="username"
      >
        <svg-icon url="password" />
        <el-input
          v-model="loginForm.password"
          style="width: 400px;"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { loginApi } from '@/api/login'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const loginFormRef = ref<FormInstance>()

interface LoginForm {
  username: string
  password: string
}

const loginForm = reactive<LoginForm>({
  username: '',
  password: ''
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})

const submitForm = () => {
  const loginFormRefValue = loginFormRef.value
  if (!loginFormRefValue) return

  loginFormRefValue.validate((valid) => {
    if (!valid) return

    const params = {
      ...loginForm
    }
    loginApi(params)
      .then((resp) => {
        const { token } = resp.data
        store.commit('user/setToken', token)
        router.push('/')
      })
  })
}

</script>

<style lang="scss" scoped>
.login-outer{
  width: 50%;
  margin: 0px auto;
}
</style>
