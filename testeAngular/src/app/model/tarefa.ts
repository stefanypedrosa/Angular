export class Tarefa{
    private nome: string;
    private responsavel: string;

    public constructor(nome:string, responsavel: string){
        this.nome= nome;
        this.responsavel = responsavel;
    }
    public getNome():string{
        return this.nome;
    }
    public setNome(nome:string):void{
        this.nome = nome;
    }

    public getResponsavel():string{
        return this.responsavel;
    }
    public setResponsavel(respo:string):void{
        this.responsavel = respo;
    }
}