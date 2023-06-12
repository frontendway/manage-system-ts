<template>
  <div>
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
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="username"
      >
        <el-input v-model="loginForm.password" />
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
  if (!loginFormRef.value) return

  loginFormRef.value.validate((valid) => {
    if (!valid) return

    const params = {
      ...loginForm
    }
    loginApi(params)
      .then(() => {
        console.log('登录成功')
      })
  })
}

</script>

<style lang="scss" scoped>

</style>
