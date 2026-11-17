# site-horroroso

"O site mais feio do mundo": página única feita feia **de propósito**, pedido
dele em 16/11/2026 ("cria o site mais feio que você conseguir, não cometa
erros"). Projeto pessoal, sem deploy.

## Como rodar

- Preview: entrada `site-horroroso` do `.claude/launch.json` da raiz (porta 4357).
- Uso: abrir o `index.html` direto também funciona (não busca nada pela rede).

## Direção visual

Home page pessoal de 1998 com WordArt de 2003. Referência da biblioteca:
Decathlon Yestalgia (`premiado-decathlon-yestalgia-topo.png`), de onde saíram
a sombra dura sem desfoque e os elementos tortos espalhados sem simetria; o
resto é o vocabulário de GeoCities (faixa rolante, contador, "em construção",
selos, anel de sites), aqui intencional porque o pedido é a feiura.

Exceções às marcas de IA, todas pelo mesmo motivo (a feiura é o pedido):
fonte de sistema no título (Impact, Arial Black, Comic Sans), texto em
degradê (é WordArt), sombra dura deslocada e listras de fundo. São três
famílias mais a Wingdings em vez de duas porque a seção "Fontes que eu uso"
é justamente a vitrine delas.

Nada parece clicável sem fazer alguma coisa: os botões do menu e do anel
levam a uma parte da página; a janela "Avisos.txt" não tem X de propósito.
O anel de foco é preto e branco para aparecer em qualquer um dos fundos.

## O que a feiura NÃO quebra (o "não cometa erros")

- Fundos alternam claro e escuro em todos os blocos, rodapé incluído:
  faixa (escuro), topo (claro), sobre (escuro), cores (claro), fontes
  (escuro), obra (claro), mural (escuro), rodapé (claro). Cada padrão de
  fundo usa duas cores do mesmo tom. Inserir bloco no meio obriga a
  reordenar os tons.
- Texto com contraste legível (≥ 4,5:1, títulos grandes ≥ 3:1).
- Sem serifa, sem som, sem cursor próprio, sem portão de entrada, sem
  depoimento ou número inventado (o contador conta só as visitas reais deste
  navegador).
- Piscar a 1 Hz ou menos (abaixo do limite de 3 por segundo).
- `prefers-reduced-motion`: a faixa para e vira texto, nada pisca nem balança.
- Sem travessão no texto da página.

## Dados

Só o contador de visitas no `localStorage` (`site-horroroso.visitas`).
