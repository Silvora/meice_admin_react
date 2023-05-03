/** @format */

import Login from "@/view/login/Login";
import Err_404 from "@/view/error/404";
import LayersIcon from "@mui/icons-material/Layers";
const Other = [
	{
		path: "login",
		element: Login,
	},
	{
		path: "*",
		meta: {
			title: "Error",
			icon: LayersIcon,
		},
		element: Err_404,
	},
];

export default Other;
