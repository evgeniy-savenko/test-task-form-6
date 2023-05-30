<script setup lang="ts">
	import { ref } from 'vue'
	import {
		NInput,
		NH2,
		NDynamicInput,
		NButton,
		NSpace,
		NTabs,
		NTabPane,
		NTag,
		NH3,
		NAvatar,
		NAlert,
	} from 'naive-ui'

	import type IFormData from '../interfaces/form-data'

	const formData = ref<IFormData>({
		parent: {
			name: '',
			age: '',
		},
		childrens: [],
	})
	const tabsNames = {
		form: 'Форма',
		result: 'Превью',
	}
	const currentTab = ref(tabsNames.form)
	const isFormDataEmpty = ref(true)
	const emitationUpload = ref(false)

	function transformOfNum(number: number): string {
		let words = ['год', 'года', 'лет']
		return words[
			number % 100 > 4 && number % 100 < 20
				? 2
				: [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
		]
	}
	function onClickSaveFormData(): void {
		emitationUpload.value = true
		setTimeout(() => {
			isFormDataEmpty.value = false
			currentTab.value = tabsNames.result
			emitationUpload.value = false
		}, 5000)
	}
	function onClickBackToForm(): void {
		currentTab.value = tabsNames.form
	}
</script>

<template>
	<NTabs
		:value="currentTab"
		:default-value="tabsNames.form"
		type="line"
		animated
	>
		<NTabPane :name="tabsNames.form">
			<NAlert
				v-show="emitationUpload === true"
				title="Эмитируем отправку запроса :О"
				type="warning"
				>Этот тайм-аут отнимет 5 секунд вашего драгоценного времени
			</NAlert>
			<NH2>Введите персональные данные</NH2>
			<NSpace vertical>
				<NInput
					:disabled="emitationUpload"
					v-model:value="formData.parent.name"
					placeholder="Имя"
				/>
				<NInput
					:disabled="emitationUpload"
					v-model:value="formData.parent.age"
					placeholder="Возраст"
				/>
			</NSpace>

			<NH2>Дети (макс. 5)</NH2>
			<NSpace vertical>
				<NDynamicInput
					:disabled="emitationUpload"
					v-model:value="formData.childrens"
					preset="pair"
					key-placeholder="Имя"
					value-placeholder="Возраст"
					:min="1"
					:max="5"
					:createButtonProps="{
						dashed: false,
						type: 'primary',
						size: 'large',
					}"
				>
					<template #create-button-default> Добавить ребенка </template>
				</NDynamicInput>
				<NButton
					:loading="emitationUpload"
					:disabled="emitationUpload"
					@click="onClickSaveFormData"
					type="success"
					>Сохранить</NButton
				>
			</NSpace>
		</NTabPane>
		<NTabPane :name="tabsNames.result" :disabled="isFormDataEmpty">
			<NH2>Персональные данные</NH2>
			<NH3>
				{{ formData.parent.name }}, {{ formData.parent.age }}
				{{ transformOfNum(+formData.parent.age) }}
			</NH3>
			<NH2>Дети</NH2>
			<NSpace vertical>
				<NTag
					v-for="(child, index) of formData.childrens"
					:key="index"
					:bordered="false"
					type="success"
				>
					{{ child.key }}, {{ child.value }} {{ transformOfNum(+child.value) }}
					<template #avatar>
						<NAvatar
							src="https://cdn-icons-png.flaticon.com/512/3508/3508234.png"
						/>
					</template>
				</NTag>
				<NButton @click="onClickBackToForm" type="warning"
					>Вернуться к форме</NButton
				>
			</NSpace>
		</NTabPane>
	</NTabs>
</template>

<style scoped></style>
