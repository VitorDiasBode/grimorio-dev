package pacote1;

public class Principal {

    public static void main(String[] args) {
        System.out.println("=== TESTE DENTRO DO MESMO PACOTE (pacote1) ===");

        ClassePublica obj = new ClassePublica();

        System.out.println("Public: " + obj.atributoPublico);
        System.out.println("Protected: " + obj.atributoProtected);
        System.out.println("Default: " + obj.atributoDefault);
        //System.out.println("Private: " + obj.atributoPrivado);

        System.out.println("\n=====\n");

        obj.metodoPublico();
        obj.metodoDefault();
        obj.metodoProtected();
        //obj.metodoPrivado();

        System.out.println("\n=====\n");

        System.out.println("Acesando atributo privado via getter public: " + obj.getAtributoPrivado());

        System.out.println("\n=====\n");

        ClasseDefault classeDefault = new ClasseDefault();
        classeDefault.mostrarMensagem();
    }
}
