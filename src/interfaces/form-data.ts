export default interface IFormData {
	parent: {
		name: string
		age: string
	}
	childrens: IChildrens[]
}
;[]

type IChildrens = {
	name: string
	age: string | number
}
