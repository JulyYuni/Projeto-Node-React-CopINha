import News from "../../assets/TEST/News.jpg";

export type Noticia = {
  id: string; // uuid
  grupo: string;
  titulo: string;
  subTitulo: string;
  corpoDaNoticia: string;
  autor: string;
  imagemCapa: string;
  tempoDeLeitura: string;
  data: string;
};

export const noticias: Noticia[] = [
  {
    id: "news-001",
    titulo: "Brasil vence Croácia e abre vantagem no Grupo A",
    subTitulo: "Em partida eletrizante no Maracanã, a Seleção Brasileira derrotou a Croácia por 3×1, com dois gols de Vinicius Jr. e um de Rodrygo.",
    corpoDaNoticia: "Com seis mudanças em relação à equipe que foi batida pela França na semana passada, a Seleção Brasileira derrotou a Croácia por 3 a 1 na noite desta terça-feira (31), em Orlando (EUA), no último amistoso antes da convocação para a Copa do Mundo. Danilo Santos, Igor Thiago e Gabriel Martinelli fizeram os gols da Amarelinha, que deixou o campo sob aplausos. \nApesar da falta de entrosamento, em razão de uma formação que jamais havia jogado junto, a Seleção Brasileira dominou o adversário, terceiro colocado no Mundial de 2022. Prova disso é que um dos destaques do jogo foi o goleiro Livakovic. Ele evitou pelo menos outros dois gols brasileiros com defesas arrojadas. \nEssa superioridade da Seleção Brasileira foi mais acentuada no primeiro tempo, quando criou várias chances. A primeira, aos 20 minutos, quando Vini Jr aproveitou erro de passe dos croatas e passou a bola para Danilo Santos, que quase fez o gol. Aos 23, Matheus Cunha finalizou sem marcação após cobrança de falta ensaiada, de Danilo Santos. A bola bateu num adversário e saiu rente à trave. \nDepois, aos 35, após boa jogada de Matheus Cunha, João Pedro entrou na área e concluiu com confiança. Mas Livakovic salvou a meta da Croácia",
    autor: "Camila Souza",
    data: "21 de junho de 2026",
    grupo: "B",
    tempoDeLeitura: "1 min",
    imagemCapa: News,
  },
  {
    id: "news-002",
    titulo: "Vozinha é a surpresa em seleção ideal da Copa do Mundo 2026",
    subTitulo: "A Fifa anunciou nesta quarta-feira a seleção ideal da Copa do Mundo 2026, montada por meio de votação popular.",
    corpoDaNoticia: "A seleção ideal do torneio contou com votação popular através do aplicativo oficial da Fifa...",
    autor: "Cauê Lopes",
    data: "19 de julho de 2026",
    grupo: "C",
    tempoDeLeitura: "2 min",
    imagemCapa: News,
  },
  {
    id: "news-003",
    titulo: "Após perderem as semifinais, França e Inglaterra disputam o terceiro lugar da Copa do Mundo 2026",
    subTitulo: "Seleções foram superadas por Espanha e Argentina nas semifinais e agora disputam um lugar no pódio do Mundial.",
    corpoDaNoticia: "A partida decisiva pelo terceiro lugar acontece no próximo domingo...",
    autor: "Cauê Lopes",
    data: "19 de agosto de 2026",
    grupo: "A",
    tempoDeLeitura: "3 min",
    imagemCapa: News,
  },
  {
    id: "news-004",
    titulo: "Espanha domina, bate Argentina na prorrogação e é bicampeã da Copa do Mundo",
    subTitulo: "Seleção europeia venceu a equipe sul-americana por 1 a 0 e conquistou o seu segundo título na história.",
    corpoDaNoticia: "Em uma final equilibrada, a Espanha precisou da prorrogação para superar a Argentina...",
    autor: "Cauê Lopes",
    data: "20 de agosto de 2026",
    grupo: "D",
    tempoDeLeitura: "5 min",
    imagemCapa: News,
  },
];