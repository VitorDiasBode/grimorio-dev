package pacote1;

public class ClasseDefault {

    public ClasseDefault() {
        System.out.println("Construtor da classe default (package-private)");
    }

    public void mostrarMensagem() {
        System.out.println("Classe default acessível apenas no pacote pacote1");
    }
}
