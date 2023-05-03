/** @format */

import { action, makeAutoObservable, observable } from "mobx";

class AppStore {
	constructor() {
		//makeAutoObservable(target, overrides?, options?)
		// target: 将目标对象中的属性和方法设置为 observable state 和 action
		// overrides: 覆盖默认设置, 将 target 对象中的某些属性或者方法设置为普通属性
		// options: 配置对象, autoBind, 使 action 方法始终拥有正确的 this 指向

		// 参数1：target，把谁变成响应式（可观察）
		// 参数2：指定哪些属性或者方法变成可观察,{}代表所有,
		// 参数3: {autoBind:true}绑定内部this
		makeAutoObservable(
			this,
			{
				// count: observable,
				// increment: action,
				// decrement: action,
				// reset: action,
			},
			{ autoBind: true }
		);
	}

	collapse = true;
	// get double() {
	// 	return this.count * 2;
	// }
	// increment() {
	// 	this.count++;
	// }
	// decrement() {
	// 	this.count--;
	// }
	// reset() {
	// 	this.count = 0;
	// }

	setCollapse() {
		console.log("object", this.collapse);
		this.collapse = !this.collapse;
	}
}

const appStore = new AppStore();
export default appStore;
