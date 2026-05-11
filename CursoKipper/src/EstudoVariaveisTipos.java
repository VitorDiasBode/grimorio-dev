import java.awt.datatransfer.SystemFlavorMap;

public class EstudoVariaveisTipos {
    static void main(String[] args) {

        // =============================================
        // 1. TIPOS PRIMITIVOS (valores simples)
        // =============================================

        // Tipo inteiro: byte (8 bits, -128 a 127)
        byte idade = 25;
        System.out.println("byte idade: " + idade);

        // Tipo inteiro: short (16 bits)
        short ano = 2026;
        System.out.println("short ano: " + ano);

        // Tipo inteiro: int(32 bits, mais comum)
        int populacaoCidade = 1_500_000; // underline para legibilidade
        System.out.println("int população: " + populacaoCidade);

        // Tipo inteiro: long (64 bits, usar sufixo L)
        long populacaoMundial = 8_000_000_000L;
        System.out.println("long população Mundial: " + populacaoMundial);

        // Tipo ponto flutuante: (32 bits, usar com sufixo f)
        float preco = 19.99f;
        System.out.println("float Preço: " + preco);

        // Tipo ponto flutuante: (64 bits, padrão para decimais)
        double nota =  7.141592653589793;
        System.out.println("double nota: " + nota);

        // Tipo caractere: (16 bits, aspas simples)
        char inicial = 'b';
        System.out.println("char inicial: " + inicial);

        // Tipo booleano: boolean
        boolean ativo = true;
        System.out.println("boolean ativo: " + ativo);

        // =============================================
        // 2. TIPOS POR REFERÊNCIA
        // =============================================

        // String (sequência de caracteres)

        String nome = "Bode";
        System.out.println("String nome: " + nome);

        // Array de inteiros
        int[] numeros = {10, 20, 30 ,40};
        System.out.print("int[] numeros: ");
        for (int num : numeros) {
            System.out.print(num + ", ");
        }
        System.out.println();

        // Array de Strings
        String[] frutas = {"Maçã", "Abacate", "Banana"};
        System.out.print("string[] frutas: ");
        for (String fruta:frutas) {
            System.out.print(fruta + ", ");
        }
        System.out.println();

        // =============================================
        // 3. CONSTANTES
        // =============================================

        final double PI = 3.1215;
        System.out.println("final double PI: " + PI);

        // =============================================
        // 4. INFERÊNCIA DE TIPO COM 'var' (JAVA 10+)
        // =============================================
        var mensagem = "Olá Mundo";
        var temperatura = 36.5;
        var ativado = false;

        System.out.println("var mensagem: " + mensagem);
        System.out.println("var temperatura: " + temperatura);
        System.out.println("var ativado: " + ativado);

        // =============================================
        // 5. CASTING(conversão de tipos)
        // =============================================

        // Conversão implícita (widening) - de menor para maior capacidade
        int valorInt = 100;
        long valorLong = valorInt; // int -> long automático
        double valorDouble = valorLong; // int -> double automático
        System.out.println("Conversão implícita: int " + valorInt + " -> long " + valorLong);
        System.out.println("Conversão implícita: long " + valorLong + " -> double " + valorDouble);

        // Conversão explícita (narrowing) - pode perder dados
        double numeroGrande = 123.456;
        int numeroInteiro = (int) numeroGrande;
        System.out.println("Conversão explícita: double " + numeroGrande + " -> int " + numeroInteiro);

        // Cast entre char e int
        char letra = 'a';
        int codigoAscii = (int) letra;
        char proximaLetra = (char) (codigoAscii + 1);
        System.out.println("Conversão explícita: char " + letra + " -> int " + codigoAscii);
        System.out.println("Conversão explícita: int " + codigoAscii + "+1" + " -> char " + proximaLetra);

        // =============================================
        // 6. OPERAÇÕES BÁSICAS COM VARIÁVEIS
        // =============================================

        int numA = 10, numB = 4;
        int soma = numA + numB;
        int subtracao = numA - numB;
        int multiplicacao = numA * numB;
        int divisao = numA / numB;
        double divisaoDouble = (double) numA / numB;
        int resto = numA % numB;
        System.out.println("OPERAÇÕES BÁSICAS");
        System.out.println("int Soma: " + soma);
        System.out.println("int Subtração: " + subtracao);
        System.out.println("int multipicação: " + multiplicacao);
        System.out.println("int divisão: " + divisao);
        System.out.println("double divisao: " + divisaoDouble);
        System.out.println("int resto: " + resto);

        // =============================================
        // 7. ESCOPO DE VARIÁVEL
        // =============================================

        int x = 7;
        if (x > 0) {
            int y = 10; // APENAS DENTRO DO IF
            System.out.println("Dentro do if: x=" + x + ", y=" + y);
        }
    }
}
