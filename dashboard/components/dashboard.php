<?php

$user = $_SESSION["user"];

?>

<section class="dash-left">
    <h2> <?php echo ("Olá, " . $user["nome"]) ?></h2>

    <a href="#principais-filmes">
        <button>Principais Filmes</button>
    </a>
    <a href="#slider">
        <button>Slider de Filmes</button>
    </a>
    <a href="#filmes">
        <button>Filmes</button>
    </a>
    <a href="#anuncios">
        <button>Anúncios</button>
    </a>
    <a href="../api/POST/logout.php">
        <button>Sair</button>
    </a>
</section>

<section class="dash-right">
    <main class="right-area principais-filmes" id="principais-filmes">
        <form action="../api/POST/addFilme.php" method="POST" enctype="multipart/form-data">
            <h2>Nome do Filme</h2>
            <input name="nome" type="text" placeholder="Nome do Filme" autocomplete="off" required />

            <h2>Video Background para PC</h2>
            <div class="input-file-container">
                <input name="trailer" class="input-file" id="banner-file" type="file" accept="video/*" required />
                <label tabindex="0" for="banner-file" class="input-file-trigger">Selecione um vídeo....</label>
                <p class="file-return"></p>
            </div>


            <h2>Titulo do filme</h2>
            <div class="input-file-container">
                <input name="titulo" class="input-file" id="titulo-file" type="file" accept="image/*" required />
                <label tabindex="0" for="titulo-file" class="input-file-trigger">Selecione uma imagem...</label>
                <p class="file-return"></p>
            </div>

            <h2>Sinopse do Filme</h2>
            <textarea name="sinopse" id="" placeholder="Sinopse" autocomplete="off" required></textarea>

            <h2>Link de Compra</h2>
            <input name="link" type="text" placeholder="https://ingressoplus.net.br/" autocomplete="off" required />

            <h2>Foto Background para Mobile</h2>
            <div class="input-file-container">
                <input name="retrato" class="input-file" id="retrato-file" type="file" accept="image/*" required />
                <label tabindex="0" for="retrato-file" class="input-file-trigger">Selecione uma imagem...</label>
                <p class="file-return"></p>
            </div>

            <h3>Defina Datas do Filme</h3>
            <div class="data-box">
                <input name="dataDeInicio" type="date" required />
                <h4>até</h4>
                <input name="dataDeTermino" type="date" required />
            </div>

            <button type="submit" class="adicionar-filme">Adicionar Filme</button>
        </form>
    </main>

    <main class="right-area slider-filmes" id="slider">
        <main id="slider-container" class="slider-area">
            <h2 class="slider-tittle">Slider De Filmes</h2>
            <div class="film-box">
                <h2 id="filme-nome">Nome Do Filme</h2>
                <h3><span id="filme-data">##/## à ##/##</span></h3>
                <button id="filme-apagar" class="apagar-filme">Apagar</button>
            </div>
        </main>
    </main>

    <main class="right-area filmes" id="filmes">
        <h2>Filmes Em Exibição</h2>
        <main id="movies-container" class="movies-flex">
            <div class="movie-box">
                <img id="filme-banner" src="../src/assets/cartas-mobile.jpg" alt="" />
                <h2 id="filme-nome">Nome do Filme</h2>
                <h3 id="filme-data">##/## - ##/##</h3>
                <button id="filme-apagar">Apagar Filme</button>
            </div>
        </main>

        <form id="formFilme" method="POST" enctype="multipart/form-data">
            <h2>Adicionar Filme à Programação</h2>
            <input name="nome" type="text" placeholder="Nome do Filme" autocomplete="off" required />

            <h2>Sinopse do Filme</h2>
            <textarea name="sinopse" placeholder="Sinopse" autocomplete="off" required></textarea>

            <h2>Elenco do Filme</h2>
            <textarea name="elenco" placeholder="Elenco" autocomplete="off" required></textarea>

            <h2>Link de Compra</h2>
            <input name="link" type="text" placeholder="https://ingressoplus.net.br/" autocomplete="off" required />

            <h3>Capa Do Filme</h3>
            <div class="input-file-container">
                <input name="banner" class="input-file" id="capa" type="file" accept="image/*" required />
                <label tabindex="0" for="capa" class="input-file-trigger">Selecione um arquivo...</label>
                <p class="file-return"></p>
            </div>

            <h3>Definir Datas do Filme</h3>
            <div class="data-box">
                <input name="dataDeInicio" id="dataDeInicio" type="date" required />
                <h4>até</h4>
                <input name="dataDeTermino" id="dataDeTermino" type="date" required />
            </div>

            <h3>Classificação Indicativa</h3>
            <select name="classificacao">
                <option value="0">Livre</option>
                <option value="10">10 anos</option>
                <option value="12">12 anos</option>
                <option value="14">14 anos</option>
                <option value="16">16 anos</option>
                <option value="18">18 anos</option>
            </select>

            <h3>Adicionar Horarios</h3>
            <select id="sala">
                <option value="1">Sala 1</option>
                <option value="2">Sala 2</option>
            </select>
            <div class="horarios-area" id="horarios">
                <div class="input-data">
                    <input type="checkbox" id="data-1" />
                    <label id="data-box-1" for="data-1">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        13:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-2" />
                    <label id="data-box-2" for="data-2">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        13:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-3" />
                    <label id="data-box-3" for="data-3">
                        <i class="fa fa-check" aria-hid den="true"></i>
                        13:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-4" />
                    <label id="data-box-4" for="data-4">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        13:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-5" />
                    <label id="data-box-5" for="data-5">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        14:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-6" />
                    <label id="data-box-6" for="data-6">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        14:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-7" />
                    <label id="data-box-7" for="data-7">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        14:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-8" />
                    <label id="data-box-8" for="data-8">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        14:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-9" />
                    <label id="data-box-9" for="data-9">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        15:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-10" />
                    <label id="data-box-10" for="data-10">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        15:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-11" />
                    <label id="data-box-11" for="data-11">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        15:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-12" />
                    <label id="data-box-12" for="data-12">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        15:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-13" />
                    <label id="data-box-13" for="data-13">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        16:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-14" />
                    <label id="data-box-14" for="data-14">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        16:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-15" />
                    <label id="data-box-15" for="data-15">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        16:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-16" />
                    <label id="data-box-16" for="data-16">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        16:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-18" />
                    <label id="data-box-17" for="data-18">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        17:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-19" />
                    <label id="data-box-19" for="data-19">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        17:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-20" />
                    <label id="data-box-20" for="data-20">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        17:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-21" />
                    <label id="data-box-21" for="data-21">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        17:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-22" />
                    <label id="data-box-22" for="data-22">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        18:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-23" />
                    <label id="data-box-23" for="data-23">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        18:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-34" />
                    <label id="data-box-24" for="data-24">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        18:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-25" />
                    <label id="data-box-25" for="data-25">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        18:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-26" />
                    <label id="data-box-26" for="data-26">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        19:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-27" />
                    <label id="data-box-27" for="data-27">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        19:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-28" />
                    <label id="data-box-28" for="data-28">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        19:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-29" />
                    <label id="data-box-29" for="data-29">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        19:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-30" />
                    <label id="data-box-30" for="data-30">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        20:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-295" />
                    <label id="data-box-295" for="data-295">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        20:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-305" />
                    <label id="data-box-305" for="data-305">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        20:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-31" />
                    <label id="data-box-31" for="data-31">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        20:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-32" />
                    <label id="data-box-32" for="data-32">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        21:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-33" />
                    <label id="data-box-33" for="data-33">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        21:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-34" />
                    <label id="data-box-34" for="data-34">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        21:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-35" />
                    <label id="data-box-35" for="data-35">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        21:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-36" />
                    <label id="data-box-36" for="data-36">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        22:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-37" />
                    <label id="data-box-37" for="data-37">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        22:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-38" />
                    <label id="data-box-38" for="data-38">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        22:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-39" />
                    <label id="data-box-39" for="data-39">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        22:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-40" />
                    <label id="data-box-40" for="data-40">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        23:00
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-41" />
                    <label id="data-box-41" for="data-41">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        23:15
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-42" />
                    <label id="data-box-42" for="data-42">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        23:30
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-43" />
                    <label id="data-box-43" for="data-43">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        23:45
                    </label>
                </div>
                <div class="input-data">
                    <input type="checkbox" id="data-44" />
                    <label id="data-box-44" for="data-44">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        00:00
                    </label>
                </div>
            </div>

            <button type="submit" class="send">Salvar</button>
        </form>
    </main>

    <main class="right-area anuncios" id="anuncios">
        <h2>Adicionar um Anuncio</h2>
        <form action="../api/POST/setOutdoor.php?id=1" method="POST" enctype="multipart/form-data">
            <div class="input-file-container">
                <div class="input-file-flex">
                    <input name="banner" class="input-file" id="adicionar-ad" type="file" accept="image/*, video/*" required />
                    <label tabindex="0" for="adicionar-ad" class="input-file-trigger">Selecione um arquivo...</label>
                    <button type="submit">Salvar</button>
                </div>
                <p class="file-return"></p>
            </div>
        </form>
        <h2>Adicione uma Novidade</h2>
        <form action="../api/POST/setOutdoor.php?id=2" method="POST" enctype="multipart/form-data">
            <div class="input-file-container">
                <div class="input-file-flex">
                    <input name="banner" class="input-file" id="adicionar-novidade" type="file" accept="image/*, video/*" required />
                    <label tabindex="0" for="adicionar-novidade" class="input-file-trigger">Selecione um arquivo...</label>
                    <button type="submit">Salvar</button>
                </div>
                <p class="file-return"></p>
            </div>
        </form>
    </main>
</section>

<script src="./scripts/getFilmes.js"></script>
<script src="./scripts/return.js"></script>
<script src="./scripts/submit.js" type="module"></script>