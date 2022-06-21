<template>
  <el-container>
    <el-aside width="200px">
      <side-menu></side-menu>
    </el-aside>
    <el-container>
      <el-header>
        <strong style="height: 5px">宇航员管理系统</strong>

        <div class="header-avatar">
          <el-avatar size="medium" :src="userInfo.avatar"></el-avatar>

          <el-dropdown click="click">
            <span class="el-dropdown-link">
              {{ userInfo.username }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/sys/PersonalCentor">
                <el-dropdown-item>个人中心</el-dropdown-item>
              </router-link>

              <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-link></el-link>
          <el-link href="https://github.com/dnsml" target="_blank"
            >网站A</el-link
          >
        </div>
      </el-header>

      <el-main>
        <routerView />
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import sideMenu from "./include/sideMenu";

export default {
  name: "home",
  components: {
    sideMenu,
  },
  data() {
    return {
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

    logout() {
      this.$axios.post("/logout").then((res) => {
       
        localStorage.clear();
        sessionStorage.clear();

         this.$store.commit("resetState");
        this.$router.push("/login");
      });
    },
  },
};
</script>
<style scoped>
.header-avatar {
  float: right;
  width: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.el-dropdown-link {
  cursor: pointer;
}
.el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}

.el-header {
  background-color: #80c4ff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;

  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

a {
  text-decoration: none;
}
</style>