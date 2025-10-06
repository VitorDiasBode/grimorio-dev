# 📖 grimorio-dev

Um **grimório** é um livro de feitiços, um lugar onde magos registram suas descobertas, encantamentos e experimentos.  
O **grimorio-dev** segue a mesma ideia, mas no mundo da programação: é o meu repositório de estudos, testes e experimentos em diferentes linguagens, frameworks e conceitos de desenvolvimento.

Cada branch funciona como um espaço de prática focado em um tema específico (React, Node, etc.).  
Quando finalizo um experimento, ele é registrado no `master`, dentro de uma pasta dedicada ao tema, como um novo feitiço adicionado ao grimório.

---

## 🎯 Objetivo

- Organizar meus estudos de programação de forma clara e acessível.  
- Consolidar experimentos em diferentes linguagens e frameworks.  
- Criar um **acervo pessoal de aprendizado**, que posso consultar e expandir ao longo do tempo.  
- Treinar não só código, mas também práticas de versionamento com Git.  

---

## 🔧 Estrutura

A branch `master` guarda os experimentos concluídos, cada um em sua própria pasta:  

/react/ → testes e projetos em React
/node/ → experimentos com Node.js
/python/ → estudos com Python

Cada branch secundária é usada como **laboratório** para desenvolvimento e aprendizado.  
Depois, o conteúdo é integrado ao `master`, formando o grimório.

---

## 🚀 Fluxo de Trabalho

1. Criar uma branch para o tema:
```bash
git checkout -b nome-do-tema
```
	
2. Desenvolver os experimentos dentro da pasta correspondente.
	
3. Registrar no master quando concluído:
```bash
git checkout master
git merge nome-do-tema
```

Assim, o master é a versão organizada e atualizada do meu grimório.

# ✨ Visão
O grimorio-dev é mais do que um repositório de testes:
é uma **biblioteca pessoal de conhecimento em constante evolução**, onde cada commit é uma nova página escrita e cada projeto é um novo feitiço aprendido.
