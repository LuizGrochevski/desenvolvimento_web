# desenvolvimento_web

Repositório de estudos práticos de desenvolvimento web com exercícios de **HTML, CSS e JavaScript** em diferentes níveis (`basico`, `intermediario`, `avançado`) e mini-projetos isolados (ex.: jogo da velha).

## Objetivo
Este projeto foi usado como laboratório de aprendizado para praticar fundamentos de front-end sem build tools, sem framework e com arquivos estáticos.

## Tecnologias
- HTML5
- CSS3
- JavaScript (ES5/ES6)
- Bootstrap 5 (exemplo isolado)

## Como rodar
Como é um conjunto de páginas estáticas, abra qualquer arquivo `.html` diretamente no navegador.

Exemplos:
- `basico/index.html`
- `intermediario/index.html`
- `intermediario/Página de Sorteio/index.html`
- `avançado/CSS/animações/index.html`
- `jogo_da_velha/index.html`

Opcionalmente, use um servidor local simples:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` e navegue pelas pastas.

## Arquitetura / Estrutura
```text
basico/                # exercícios iniciais de HTML/CSS/JS
intermediario/         # formulários, eventos DOM, responsividade e layout
avançado/              # demos de CSS avançado, canvas, JS assíncrono
jogo_da_velha/         # mini-jogo funcional em JS puro
jogo_da_memoria/       # protótipo visual (incompleto)
bootstrap/             # experimento de navbar com Bootstrap
portifolio/            # página de currículo/portfólio estático
```

## Funcionalidades implementadas
- Demonstrações de tags HTML, listas, tabelas, links e imagens.
- Exemplos de CSS (box model, pseudo-classes, pseudo-elementos, flexbox, grid, animações e media queries).
- Manipulação de DOM e eventos (`click`, `mouseover`, `oninput`, `onload`).
- Sorteio simples de número e pessoa por `Math.random`.
- Jogo da velha com estado em memória e verificação de vitória.
- Exemplos de JavaScript com callback, Promise, `async/await`, `filter`, `map` e `reduce`.

## Estado atual
- **Projeto de estudo/treino**, não produto.
- Estrutura em múltiplas páginas independentes.
- Qualidade heterogênea (partes funcionais e partes incompletas).

## Limitações
- Sem testes automatizados.
- Sem backend/API, autenticação ou persistência de dados.
- Inconsistências de organização e nomenclatura entre pastas.
- Alguns exemplos incompletos (ex.: `jogo_da_memoria/script/script.js` vazio).
- Há código de demonstração com bugs pequenos e duplicidades.

## Melhorias futuras (pequenas e realistas)
1. Criar índice inicial (`index.html`) com links para todos os exemplos.
2. Corrigir bugs evidentes (ex.: função duplicada no jogo da velha, typo de `fillStyle`, variáveis não usadas).
3. Padronizar nomes de pastas/arquivos e remover artefatos não utilizados.
4. Adicionar README por subpasta com objetivo e status de cada exercício.
5. Incluir checklist mínimo de qualidade (formatação, validação HTML/CSS, lint JS).

## Aprendizados
Este repositório demonstra evolução de conceitos essenciais de front-end: marcação, estilização, manipulação de eventos, organização básica de estado em jogos e uso de recursos modernos de JavaScript. Também evidencia pontos típicos de maturidade em projetos iniciantes (manutenção, consistência e qualidade).
