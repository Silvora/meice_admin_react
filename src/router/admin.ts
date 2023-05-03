/** @format */
import { lazy } from "react";

import Layout from "@/layout/Layout";
import Home from "@/view/home/Home";
import Err_404 from "@/view/error/404";

const Desc = lazy(() => import("@/view/desc/Desc"));

// const LazyComponent = (component: any) => {
// 	return lazy(component);
// };

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Main = {
	path: "/",
	element: Layout,
	children: [
		{
			path: "/",
			meta: {
				title: "首页",
				icon: DashboardIcon,
			},
			element: Home,
		},
		{
			path: "desc",
			meta: {
				title: "文档管理",
				icon: PeopleIcon,
			},
			element: Desc,
			children: [
				{
					path: "",
					meta: {
						title: "文档首页",
						icon: DashboardIcon,
					},
					element: Home,
				},
				{
					path: "desc",
					meta: {
						title: "文档文档",
						icon: DashboardIcon,
					},
					element: Desc,
				},
			],
		},
		{
			path: "*",
			meta: {
				title: "Error",
				icon: LayersIcon,
			},
			element: Err_404,
		},
	],
};

export default Main;
