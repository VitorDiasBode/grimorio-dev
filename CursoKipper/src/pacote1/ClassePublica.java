package pacote1;

public class ClassePublica {
    public String atributoPublico = "Público";
    protected String atributoProtected = "Protegido";
    String atributoDefault = "Padrão (package-private)";
    private String atributoPrivado = "Privado";

    public ClassePublica() {
        System.out.println("Construtor público criando ClassePública");
    }

    public void metodoPublico() {
        System.out.println("Método público: " + atributoPublico);
        metodoPrivado();
    }

    protected void metodoProtected() {
        System.out.println("Método protected: " + atributoProtected);
    }

    void metodoDefault() {
        System.out.println("Método default (package-private): " + atributoDefault);
    }

    private void metodoPrivado() {
        System.out.println("Método privado (só dentro da classe): " + atributoPrivado);
    }

    public String getAtributoPrivado() {
        return atributoPrivado;
    }

}