import './homeUser.css';


const stats = [
	{ label: 'Pedidos activos', value: '12' },
	{ label: 'Mensajes nuevos', value: '5' },
	{ label: 'Favoritos', value: '28' },
	{ label: 'Puntos', value: '1.240' },
];

const quickActions = [
	{
		title: 'Ver perfil',
		description: 'Actualiza tus datos personales y configuración de cuenta.',
	},
	{
		title: 'Mis pedidos',
		description: 'Consulta el estado de tus compras y entregas recientes.',
	},
	{
		title: 'Soporte',
		description: 'Habla con el equipo de ayuda si necesitas asistencia.',
	},
];

const recentActivity = [
	{ title: 'Pedido confirmado', time: 'Hace 2 horas' },
	{ title: 'Nuevo mensaje del soporte', time: 'Ayer' },
	{ title: 'Producto agregado a favoritos', time: 'Hace 2 días' },
];

function HomeUser() {
	return (
		<main className="home-user">
			<section className="hero-card">
				<div className="hero-copy">
					<span className="hero-badge">Panel de usuario</span>
					<h1>Hola, Diego</h1>
					<p>
						Bienvenido a tu espacio personal. Desde aquí puedes revisar tus pedidos,
						administrar tu perfil y ver tus actividades más recientes.
					</p>
					<div className="hero-actions">
						<button type="button" className="primary-button">
							Ver mis pedidos
						</button>
						<button type="button" className="secondary-button">
							Editar perfil
						</button>
					</div>
				</div>

				<aside className="hero-summary">
					<h2>Resumen rápido</h2>
					<div className="summary-list">
						<div>
							<strong>4.8</strong>
							<span>Calificación</span>
						</div>
						<div>
							<strong>24</strong>
							<span>Compras</span>
						</div>
						<div>
							<strong>98%</strong>
							<span>Satisfacción</span>
						</div>
					</div>
				</aside>
			</section>

			<section className="stats-grid" aria-label="Resumen de métricas">
				{stats.map((stat) => (
					<article className="stat-card" key={stat.label}>
						<span>{stat.label}</span>
						<strong>{stat.value}</strong>
					</article>
				))}
			</section>

			<section className="content-grid">
				<article className="panel-card">
					<h2>Accesos rápidos</h2>
					<div className="action-list">
						{quickActions.map((action) => (
							<button type="button" className="action-card" key={action.title}>
								<span>{action.title}</span>
								<p>{action.description}</p>
							</button>
						))}
					</div>
				</article>

				<article className="panel-card">
					<h2>Actividad reciente</h2>
					<ul className="activity-list">
						{recentActivity.map((item) => (
							<li key={item.title}>
								<div>
									<strong>{item.title}</strong>
									<span>{item.time}</span>
								</div>
							</li>
						))}
					</ul>
				</article>
			</section>
		</main>
	);
}

export default HomeUser;
