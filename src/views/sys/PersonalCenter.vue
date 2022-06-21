<template>
  <div>
    <h1>你好 ,{{userInfo.username}}</h1>
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="旧密码" prop="oldpass">
        <el-input
          type="password"
          v-model="ruleForm.oldpass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="新密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="updatePassword('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  name: "PersonalCenter",
  data() {
    return {
      ruleForm: {
        oldpass: "",
        pass: "",
        checkPass: "",
      },
      userInfo: {
        username: "",
        avatar: "",
      },
    };
  },

  created() {
    this.getUserInfo();
  },

  methods: {
    getUserInfo() {
      this.$axios.get("/sys/UserInfo").then((res) => {
        this.userInfo = res.data.data;
      });
    },
    updatePassword(formName) {
      if (this.ruleForm.checkPass != this.ruleForm.pass) {
        alert("第二次密码输入错误");
      } else
        this.$axios.post("/sys/updatePassword", this.ruleForm).then((res) => {
          this.$router.push("/login");
        });
    },

    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>



<style scoped>

</style>