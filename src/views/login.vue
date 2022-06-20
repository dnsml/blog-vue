<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xl="6" :lg="7">
      <h2>欢迎来到TimeBlog</h2>

      <el-image
        :src="require('@/assets/pic.jpg')"
        style="width=200"
        class="backImg"
      ></el-image>
      <p>作者:一个菜鸡</p>
      <p>版本:1.0</p>
    </el-col>
    <el-col :span="1">
      <el-divider direction="vertical"></el-divider>
    </el-col>
    <el-col :xl="6" :lg="7">
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username" style="width: 380px">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password" style="width: 380px">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="code" style="width: 380px">
          <el-input
            v-model="loginForm.code"
            type="text"
            placeholder="请输入验证码"
            style="width: 172px; float: left"
          ></el-input>
          <el-image :src="captchaImg" class="capachaImg"></el-image>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>


</template>





<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        token: "",
        code: "",
      },

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },

      captchaImg: null,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("/login", this.loginForm).then((res) => {
            // const jwt = res.headers[authorization];


          console.log(res);
          let jwt=132456;
            this.$store.commit("SET_TOKEN", jwt);
            this.$router.push("/index");
            // this.$router.push("/main");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    getCaptcha() {
      this.$axios.get("/captcha").then((res) => {
        console.log(res);

        this.loginForm.token = res.data.data.token;
        this.captchaImg = res.data.data.captchaImg;
      });
    },
  },

  created() {
    this.getCaptcha();
  },
};
</script>

<style scoped>
.el-row {
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
}

.backImg {
  width: 200px;
  height: 200px;
}

.capachaImg {
  float: left;
  margin-left: 10px;
  border-radius: 3px;
}
.el-divider {
  height: 200px;
}
</style>