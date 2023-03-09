import image from "../images/mainImage.avif"

const Home = () => {
	return (
		<main>
			<h2 align="center" class="white-text">Добро пожаловать</h2>
			<div class="container">
				<div class="row">
					<div class="col s8">
						<ul class="collection with-header red" style={{margin: 0}}>
							<li class="collection-header"><h4>Наши преимущества</h4></li>
							<li class="collection-item">Лень</li>
							<li class="collection-item">Бесполезность</li>
							<li class="collection-item">Долгое выполнение</li>
							<li class="collection-item">Костыли</li>
							<li class="collection-item">Непрофессиональные сотрудники</li>
							<li class="collection-item">Только старые технологии</li>
						</ul>
					</div>
					<div class="col s4">
						<img src={image} class="responsive-img" alt=""></img>
					</div>
				</div>
			</div>	
		</main>
	);
};
  
export default Home;