package pacote2;

import pacote1.ClassePublica;

public class ClasseAvulsa {
    public static void main(String[] args) {
        System.out.println("\n=== CLASSE EM OUTRO PACOTE (SEM HERANÇA) ===");
        ClassePublica obj = new ClassePublica();

        System.out.println(obj.atributoPublico);
        obj.metodoPublico();
    }
}
