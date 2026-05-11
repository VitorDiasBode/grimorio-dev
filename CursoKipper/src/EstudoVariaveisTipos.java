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

        // Tipo ponto flutuante (32 bits, usar com sufixo f)
        float preco = 19.99f;
        System.out.println("float Preço: " + preco);

    }
}
