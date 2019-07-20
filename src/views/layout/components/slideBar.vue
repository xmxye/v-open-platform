<template>
  <div class="slide-bar-container">
    <el-menu :open="$route.matched[0].path" :unique-opened="navEvent.opened" :router="navEvent.router" :default-active="$route.path" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="(items,ind) in navList">
                      <el-submenu :index="items.path" :key="ind" v-if="items.hasChildren">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>{{items.title}}</span>
</template>
          <el-menu-item-group>
            <el-menu-item :index="item.path" v-for="(item,inds) in items.children" :key="inds">{{item.name}}</el-menu-item>
          </el-menu-item-group>
          <!-- <el-submenu index="1-4">
<template slot="title">
   选项4
</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
        </el-submenu>
        <el-menu-item :index="items.path" :key="ind" v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{items.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navEvent: {
          //是否只保持一个子菜单的展开
          opened: false,
          //是否使用 vue-router 的模式
          router: true
          //当前激活菜单的 index（导航属性）
          //default-active:可以直接设置为当前路由当path
        },
        navList: [{
            hasChildren: true,
            title: "平台信息",
            path: "/platformInfo",
            icon: "el-icon-news",
            children: [{
                name: "平台信息管理",
                path: "/platformInfo/platformInfoManage"
              }
            ]
          },
          {
            hasChildren: true,
            title: "系统管理",
            path: "/systemManage",
            icon: "el-icon-tickets",
            children: [{
                name: "终端账号",
                path: "/systemManage/terminalAccount"
              },
              {
                name: "终端设备",
                path: "/systemManage/terminalEquipment"
              },
              {
                name: "部门",
                path: "/systemManage/department"
              },
              {
                name: "权限集",
                path: "/systemManage/permissionSet"
              },
              {
                name: "宽带组",
                path: "/systemManage/broadbandGroup"
              },
              {
                name: "外部系统组",
                path: "/systemManage/externalSystemGroup"
              },{
                name: "外部系统终端",
                path: "/systemManage/externalSystemTerminal"
              }
            ]
          },
          {
            hasChildren: true,
            title: "生产数据管理",
            path: "/proDataManage",
            icon: "el-icon-edit-outline",
            children: [{
                name: "消息记录",
                path: "/proDataManage/newsRecord",
              }
            ]
          }
        ]
      };
    }
  };
</script>

<style scoped lang="scss">
  .slide-bar-container {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1001;
    height: 100%;
    width: 200px;
    background: #545c64;
  }
</style>