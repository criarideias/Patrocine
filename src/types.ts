export type ClassificacaoIndicativa = 0 | 10 | 12 | 14 | 16 | 18;

export interface IFilme {
    id: string;
    nome: string;
    classificacao: ClassificacaoIndicativa;
    link: string;
    sinopse: string;
    dataDeInicio: string;
    dataDeTermino: string;
}

export interface IFilmeComum extends IFilme {
    banner: string;
    disponivel?: boolean;
    elenco: string;
    retrato: string;
    slider: "0";
}

export interface IHorario {
    filme: string;
    horario: string;
    sala: string;
}

export interface IFilmeSlider extends IFilme {
    titulo: string;
    sinopse: string;
    retrato: string;
    trailer: string;
    link: string;
    slider: "1";
}