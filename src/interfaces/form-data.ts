export default interface IFormData {
	parent: {
		name: string
		age: string
	}
	childrens: IChildrens[]
}
;[]

type IChildrens = {
	key: string
	value: string
}
