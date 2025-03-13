// Em um sistema de controle de usuários, há três tipos de perfis: Administrador, Gerente e Funcionário. Todos compartilham atributos básicos como nome, e-mail e senha, mas possuem permissões diferentes. Como a herança pode ser utilizada para evitar repetição de código e garantir a reutilização de funcionalidades?

export class Collaborators{
    public name :string
    private email :string
    private password :string  

    public your_acess(name:string){
        console.log(name)
    }  

}