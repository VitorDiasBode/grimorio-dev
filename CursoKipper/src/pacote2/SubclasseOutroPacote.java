package pacote2;

import pacote1.ClassePublica;

public class SubclasseOutroPacote extends ClassePublica{

    public SubclasseOutroPacote() {
        System.out.println("Subclasse em outro pacote criada");
    }

    public void testarAcessos() {
        System.out.println(atributoPublico);
        System.out.println(atributoProtected);
        //System.out.println(atributoDefault);
        //System.out.println(atributoPrivado);

        System.out.println("\n=====\n");

        metodoPublico();
        metodoProtected();
        //metodoDefault();
        //metodoPrivado();
    }

    public static void main(String[] args) {
        System.out.println("\n=== TESTE EM OUTRO PACOTE (pacote2) ===");

        ClassePublica obj = new ClassePublica();

        System.out.println("Public: " + obj.atributoPublico);
        //System.out.println("Protected: " + obj.atributoProtected);
        //System.out.println("Default: " + obj.atributoDefault);
        //System.out.println("Private: " + obj.atributoPrivado);

        System.out.println("\n=====\n");

        obj.metodoPublico();
        //obj.metodoDefault();
        //obj.metodoProtected();
        //obj.metodoPrivado();

        System.out.println("\n=====\n");

        SubclasseOutroPacote sub = new SubclasseOutroPacote();
        sub.testarAcessos();

        System.out.println("\n=====\n");

    }

}
