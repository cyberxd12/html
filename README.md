# html
projeto com o conhecimento de Html concentrado para fins de estudo
possui algumas paginas  como estudo.html que não são relevantes para o site.
<!DOCTYPE html>
<html lang="pt-BR">
<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UNIONG</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- HEADER -->
    <header class="header">
        <div class="logo">
            <img src="LogoColorful.png" alt="Logo UNIONG">
        </div>
        <nav>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Pesquisar</a></li>
                <li><a href="#">Cadastrar Ações</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
        <div class="user-icon">G</div>
    </header>
    
    <!-- Área de busca -->
    <section class="search-section">
        <div class="search-box">
            <input type="text" placeholder="O que procura?">
            <i class="fas fa-search search-icon"></i>
        </div>
    </section>
    
    <!-- Layout com imagens laterais e cards no centro -->
    <div class="content">
        <div class="side-image">
            <img src="pageImage.png" alt="Imagem lateral">
        </div>
        
        <!-- Cards -->
        <section class="cards-container">
            <div class="card">
                <img src="assets/img/img1.jpg" alt="Imagem">
                <div class="card-info">
                    <h3>Nome da Ação</h3>
                    <p>Cidade, Estado</p>
                    <button>Voluntários</button>
                </div>
            </div>
            
            <div class="card">
                <img src="assets/img/img2.jpg" alt="Imagem">
                <div class="card-info">
                    <h3>Nome da Ação</h3>
                    <p>Cidade, Estado</p>
                    <button>Voluntários</button>
                </div>
            </div>
            
            <div class="card">
                <img src="assets/img/img3.jpg" alt="Imagem">
                <div class="card-info">
                    <h3>Nome da Ação</h3>
                    <p>Cidade, Estado</p>
                    <button>Voluntários</button>
                </div>
            </div>
            
            <div class="card">
                <img src="assets/img/img4.jpg" alt="Imagem">
                <div class="card-info">
                    <h3>Nome da Ação</h3>
                    <p>Cidade, Estado</p>
                    <button>Voluntários</button>
                </div>
            </div>
            
            <div class="card">
                <img src="img1.jpg" alt="Imagem">
                <div class="card-info">
                    <h3>Nome da Ação</h3>
                    <p>Cidade, Estado</p>
                    <button>Voluntários</button>
                </div>
            </div>
            
            <div class="card">
                <img src="img1.jpg" alt="Imagem">
                <div class="card-info">
                    <h3>Nome da Ação</h3>
                    <p>Cidade, Estado</p>
                    <button>Voluntários</button>
                </div>
            </div>
        </section>
    </div>
    <!-- Rodapé -->
    <footer class="footer">
        <div class="footer-top"> 
            <p>Quer nos enviar uma mensagem?</p>
            <div class="mensage-box">
                <input type="email" placeholder="Qual o seu e-mail?">
                <input type="text" placeholder="Digite sua mensagem">
                <button>Enviar</button>
            </div>
        </div>
        
        <!-- Redes sociais -->
        <div class="social-icons">
            <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="icon"><i class="fab fa-facebook"></i></a>
            <a href="#" class="icon"><i class="fab fa-whatsapp"></i></a>
            <a href="#" class="icon"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </footer>
</body>
</html>


/* Reset básico */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f3f3f3;
    padding-top: 60px; /* Para compensar o header fixo */
}

/* ===== HEADER ===== */
.header {
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.header .logo img {
    height: 45px;
}

/* Menu */
.header nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

.header nav a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    transition: color 0.3s ease;
}

.header nav a:hover {
    color: #6a00f4;
}

/* Ícone de usuário */
.user-icon {
    width: 40px;
    height: 40px;
    background-color: #6a00f4;
    color: #fff;
    font-size: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;
}

.user-icon:hover {
    background-color: #4a00b4;
}

/* Área de Busca */
.search-section {
    max-width: 600px;
    margin: 80px auto 20px;
    text-align: center;
}

.search-box {
    position: relative;
}

.search-box input {
    width: 100%;
    padding: 10px 40px 10px 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
}

.search-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #6a00f4;
    cursor: pointer;
}


/* Container principal */
.content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    gap: 20px;
}

/* Imagem à Esquerda */
.side-image {
    width: 20px; /* Largura fixa */
    height: 40px; /* Altura fixa */
    overflow: hidden;
}

.side-image img {
    width: 100%; /* Ocupa 100% da largura do contêiner */
    height: 100%; /* Ocupa 100% da altura do contêiner */
    object-fit: cover; /* Cobre o espaço sem distorcer a imagem */
    object-position: center;
}

/* Cards */
.cards-container {
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    width: 65%;
}

.card {
    width: 100%;
    height: 250px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
}

.card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.card-info {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 15px;
    text-align: center;
    height: 100px;
}

.card-info h3 {
    margin: 5px 0;
}

.card-info p {
    font-size: 14px;
}

.card-info button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 14px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}

.card-info button:hover {
    background-color: #0056b3;
}

/* Rodapé */
.footer {
    background-color: black;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}

.footer-top {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mensage-box {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.mensage-box input {
    padding: 8px;
    border-radius: 5px;
    border: none;
}

.mensage-box button {
    background-color: blue;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.mensage-box button:hover {
    background-color: darkblue;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
}

.contact, .rights {
    margin-top: 10px;
    font-size: 14px;
}

/* Responsividade */
@media (max-width: 768px) {
    .cards-container {
        grid-template-columns: 1fr;
    }
    
    .content {
        flex-direction: column;
        align-items: center;
    }
    
    .side-image {
        width: 80%;
        margin-bottom: 20px;
    }
}