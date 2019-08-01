import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
//把页面切换作为layout的子路由，页面结构参考panjiachen管理后台
import Layout from "../views/layout/layout";

export default new Router({
  routes: [
    //登录
    {
      path: "/login",
      name:'login',
      component: r =>
        // r=>require.ensure([],()=>r(require('...'),xxx))
        //切割路由懒加载，能够有效提升首页加载速度
        require.ensure([], () => r(require("@/views/login/index"), "login")),
      hidden: true
    },
    //404
    {
      path: "/404",
      //设置404页面
      component: r =>
        require.ensure([], () => r(require("@/views/404"), "404")),
      hidden: true
    },
    { path: "*", redirect: "/404", hidden: true },
    //首页
    {
      path: "/",
      component: Layout,
      redirect: "/platformInfo/platformInfoManage",
      name: "platformInfoManage",
      hidden: true,
    },
    //platformInfo
    {
      path: "/platformInfo",
      component: Layout,
      redirect: "/platformInfo/platformInfoManage",
      name: "platformInfo",
      meta: { title: "平台信息" },
      children: [
        {
          path: "platformInfoManage",
          name: "platformInfoManage",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/platformInfo/platformInfoManage/platformInfoManage"), "platformInfo")
            ),
          meta: { title: "平台信息管理", needLogin: true }
        }
      ]
    },
    //systemManage
    {
      path: "/systemManage",
      component: Layout,
      redirect: "/systemManage/terminalAccount",
      name: "systemManage",
      meta: { title: "系统管理" },
      children: [
        {
          path: "terminalAccount",
          name: "terminalAccount",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/systemManage/terminalAccount/terminalAccount"), "systemManage")
            ),
          meta: { title: "终端账户", needLogin: true }
        },
        {
          path: "terminalEquipment",
          name: "terminalEquipment",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/systemManage/terminalEquipment/terminalEquipment"), "systemManage")
            ),
          meta: { title: "终端设备", needLogin: true }
        },
        {
          path: "department",
          name: "department",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/systemManage/department"), "systemManage")
            ),
          meta: { title: "部门", needLogin: true }
        },
        {
          path: "permissionSet",
          name: "permissionSet",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/systemManage/permissionSet/permissionSet"), "systemManage")
            ),
          meta: { title: "权限集", needLogin: true }
        },
        {
          path: "broadbandGroup",
          name: "broadbandGroup",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/systemManage/broadbandGroup"), "systemManage")
            ),
          meta: { title: "宽带组", needLogin: true }
        },
        {
          path: "externalSystemGroup",
          name: "externalSystemGroup",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/systemManage/externalSystemGroup"), "systemManage")
            ),
          meta: { title: "外部系统组", needLogin: true }
        },
        {
          path: "externalSystemTerminal",
          name: "externalSystemTerminal",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/systemManage/externalSystemTerminal/externalSystemTerminal"), "systemManage")
            ),
          meta: { title: "外部系统终端", needLogin: true }
        }
      ]
    },
    //proDataManage
    {
      path: "/proDataManage",
      component: Layout,
      redirect: "/proDataManage/newsRecord",
      children: [
        {
          path: "newsRecord",
          name: "newsRecord",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/proDataManage/newsRecord/newsRecord"), "proDataManage")
            ),
          meta: { title: "newsRecord", needLogin: true }
        },
      ]
    }
  ]
});
