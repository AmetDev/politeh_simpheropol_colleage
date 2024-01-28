import style from './Panel.module.scss'

const LeftMenu = ({ setMainPanelType, mainPanelType }) => {
	const panelItems = [
		{ item: 'Создание страницы', name: 'create-page' },
		{ item: 'Редактирование страницы', name: 'edit-page' },
		{ item: 'Удаление страницы', name: 'delete-page' },
		{ item: 'Редактировать расписание', name: 'edit-schedule' },
		{ item: 'Создать новый аккаунт', name: 'create-account' },
		{ item: 'Редактирование navbar', name: 'editor-page-editor' },
	]
	return (
		<section className={style.left__menu}>
			<ul>
				{panelItems.map(({ item, name }) => (
					<li key={name} onClick={() => setMainPanelType(name)}>
						<button
							style={
								name === mainPanelType
									? { background: '#d73636' }
									: { opacity: 1 }
							}
						>
							{item}
						</button>
					</li>
				))}
			</ul>
		</section>
	)
}

export default LeftMenu
