const NoPage = () => {
    return (
        <main class="container">
            <h2 align="center" class="white-text">404 Not Found</h2>
            <div class="row">
                <iframe class="col s6 offset-s3"
                    height="400" 
                    src="https://www.youtube.com/embed/7OBx-YwPl8g"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </main>
    );
};
  
export default NoPage;