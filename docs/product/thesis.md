# Postable — Product Thesis v3
**March 2026**

> *"Transformar tendência em conteúdo estratégico que gera leads para SMBs — automaticamente, sem depender de agência."*

---

## 1. O Problema

Pequenas e médias empresas sabem que precisam estar presentes nas redes para atrair clientes, fortalecer a marca e gerar oportunidades de venda. Na prática, a maioria não consegue manter consistência, estratégia ou qualidade na produção de conteúdo — dependendo de boca a boca e WhatsApp, canais que não escalam nem são previsíveis.

O problema real não é apenas "não postar". É uma cadeia conectada:

- Não sabem o que postar nem como conectar conteúdo a geração de leads
- Não têm tempo para pesquisar tendências ou manter frequência
- Não possuem visibilidade sobre o que seus concorrentes locais fazem — e o que está funcionando para eles

A consequência: marca fraca, negócio não escalável, CAC alto e dependência de canais informais.

> **Dado de contexto:** O Instagram registrou queda de 28% no engajamento médio entre 2024 e 2025 (Socialinsider, análise de 125 milhões de posts). O algoritmo penaliza contas inativas e favorece aquelas com histórico consistente de engajamento — o custo de não postar com qualidade está aumentando.
>
> ↳ *Fonte: Socialinsider 2025 Social Media Benchmarks Report — socialinsider.io/social-media-benchmarks*

---

## 2. A Solução

A Postable é uma plataforma de inteligência e automação de conteúdo orientada à geração de leads. A diferença para qualquer gerador de post genérico está na camada de análise competitiva e contextual que precede cada publicação.

### O que a plataforma entrega

- Análise automática de gap de conteúdo vs. concorrentes locais: o que eles postam, com que frequência, e o que está faltando
- Geração de posts (texto + imagem/carrossel) guiada por tendências locais e lacunas identificadas
- Plano estratégico de conteúdo personalizado por nicho, região e momento de mercado
- Calendário editorial com formatos, legendas e CTAs específicos
- Publicação automatizada nas plataformas-alvo com aprovação prévia do cliente
- Sugestão automática de campanhas sazonais

### Como o conteúdo se transforma em lead

A Postable opera no topo do funil: sua função é transformar tráfego orgânico em atenção qualificada. Posts consistentes e contextuais constroem reconhecimento de marca, autoridade de nicho e senso de comunidade. Isso é a infraestrutura que torna o inbound possível.

Na prática, atenção qualificada converte em lead via:

- Link na bio conectado a landing page ou formulário
- CTAs direcionando para WhatsApp — canal de vendas primário das SMBs
- DMs espontâneos de audiência aquecida pelo conteúdo

---

## 3. Diferencial Central — Análise de Gap Competitivo Local

O ângulo que diferencia a Postable de todas as ferramentas existentes não está na geração de conteúdo em si — está em *de onde vem a estratégia* por trás do conteúdo.

> **O insight central:** O cliente informa nicho e cidade. A Postable identifica os 3 principais concorrentes locais, analisa a frequência e os temas de conteúdo que eles publicam, encontra o gap — o que nenhum deles está cobrindo — e prioriza exatamente esse tema no plano de conteúdo.
>
> *"Seus 3 concorrentes em Belo Horizonte postam muito sobre preço e promoção. Nenhum fala sobre resultado. Seus próximos 4 posts vão dominar esse tema."*

### Por que isso é diferente de todas as ferramentas existentes

- **Buffer, Mlabs, Later:** precisam que o cliente já saiba o que postar. Não fazem análise de concorrentes.
- **Jasper, Copy.ai:** geram texto, mas sem inteligência de mercado local.
- **Predis.ai:** tem análise de concorrentes, mas não é focado em SMBs locais brasileiras nem faz gap estratégico de tema.

A Postable parte de uma pergunta diferente: não "o que devo postar?", mas **"o que meus concorrentes não estão postando que minha audiência quer ouvir?"**. Isso é estratégia de conteúdo automatizada — não geração de post.

---

## 4. Arquitetura Técnica

A Postable é construída sobre uma stack deliberadamente escolhida para máximo custo-benefício, velocidade de iteração e capacidade de processamento de contexto complexo.

### Modelo de linguagem — Gemini 2.5 Flash

O modelo central é o Gemini 2.5 Flash, escolhido por três razões específicas para este caso de uso:

- **Janela de contexto de 1 milhão de tokens:** permite injetar o histórico completo de posts dos concorrentes, tendências locais e perfil da empresa em um único prompt — sem necessidade de chunking ou RAG complexo
- **Custo por token competitivo:** $0,50/1M tokens input e $3,00/1M tokens output (paid tier) — viabiliza margem bruta alta em escala
- **Suporte nativo a multimodalidade:** análise de imagens de posts de concorrentes sem pipeline adicional

> **Nota técnica:** O Gemini 2.0 Flash foi oficialmente depreciado pelo Google e será desligado em 1 de junho de 2026. O Gemini 2.5 Flash é o substituto estável com capacidades superiores a custo semelhante.
>
> ↳ *Fonte: Google AI for Developers — Gemini API Pricing, atualizado 12/03/2026 — ai.google.dev/gemini-api/docs/pricing*

### Estratégia de prompt engineering

A qualidade do output da Postable depende diretamente da estrutura do prompt. O fluxo de geração segue três camadas:

```
CAMADA 1 — Contexto de mercado (injetado via Google Trends + análise de concorrentes):
  Tendências em alta na cidade/estado do cliente esta semana
  Top 3 concorrentes locais: temas postados, frequência, engajamento estimado
  Gap identificado: [tema X] tem alta busca mas baixa cobertura pelos concorrentes

CAMADA 2 — Identidade da marca (definida no onboarding):
  Nicho, produto/serviço, público-alvo, tom de voz, identidade visual
  Canal primário de vendas (WhatsApp / LP / DM)

CAMADA 3 — Output estruturado (JSON):
  { post, cta, hashtags, formato_sugerido, justificativa_estratégica }
```

O few-shot examples no system prompt calibra o tom para o nicho específico. O output em JSON estruturado permite que o frontend renderize posts prontos para aprovação sem processamento adicional.

### Fonte de dados de tendência — Google Trends via pytrends

A injeção de dados de mercado em tempo real é o que distingue a Postable de um wrapper de LLM. A integração usa pytrends (Python) para buscar volume de busca por palavra-chave no estado ou cidade do cliente na última semana:

```python
from pytrends.request import TrendReq

pytrends = TrendReq(hl='pt-BR', tz=180)
pytrends.build_payload(
    [keyword_do_nicho],
    geo='BR-MG',          # estado do cliente (ex: MG = Minas Gerais)
    timeframe='now 7-d'   # últimos 7 dias
)
trend_data = pytrends.interest_over_time()
# resultado injetado como contexto no prompt da Camada 1
```

Isso garante que cada post gerado referencia o que está em alta especificamente na região do cliente — não tendências nacionais genéricas.

---

## 5. Público-Alvo

O padrão de dor se repete em todo o espectro de SMBs digitais: tempo escasso, falta de estratégia, inconsistência de postagem e ausência de conexão entre conteúdo e resultado comercial. O comprador natural é o próprio dono do negócio ou um pequeno time interno de marketing.

### Beachhead proposto — três perfis com dor aguda

- **SaaS early-stage (seed a série A):** precisam de presença digital consistente para construir autoridade e gerar pipeline orgânico — mas raramente têm budget para agência ou social media dedicado
- **Micro-empreendedores digitais (coaches, consultores, infoprodutos):** vendem pelo Instagram e WhatsApp, sabem que precisam postar mais, mas não têm método nem tempo para executar
- **Pequenas empresas de serviço (clínicas, escritórios, academias):** dependem de reputação local mas ainda não exploram o orgânico como canal de aquisição previsível

**Critério de qualificação transversal:** já vende no digital ou por WhatsApp, tem entre 1 e 30 funcionários, e o dono já disse internamente "precisamos postar mais" — mas não executa.

---

## 6. Viabilidade e Unit Economics

### Custo de API por cliente/mês

Com Gemini 2.5 Flash-Lite ($0,10/1M tokens input, $0,40/1M tokens output — a camada mais econômica da família):

```
Tokens por post gerado (prompt completo + output JSON):
  Input:  ~1.200 tokens (contexto de tendência + concorrentes + perfil + instrução)
  Output: ~400 tokens (post + CTA + hashtags + justificativa)

Volume por cliente (plano básico — 20 posts/mês):
  Input:  1.200 × 20 = 24.000 tokens → $0,0024/mês
  Output: 400 × 20  =  8.000 tokens → $0,0032/mês
  Total de API: ~$0,006/cliente/mês (menos de R$0,04)

Plano básico: R$97/mês
Custo de API estimado: < R$0,05/cliente/mês
Margem bruta estimada: > 99%
```

> **Comparativo com o substituto direto:** Um freelancer de social media no Brasil custa R$800–2.500/mês para entrega parcial, sem consistência garantida e sem inteligência de dados. A Postable entrega estratégia + geração + publicação automática a R$97–297/mês com margem bruta acima de 95%. O payback para o cliente é imediato no primeiro mês.

### Modelo de monetização

- Assinatura mensal com limites de postagens por plano (básico: 20 posts, avançado: 50 posts, agência: ilimitado)
- Trial de 7 dias — conversão por valor percebido no onboarding
- Integrações com landing pages e formulários disponíveis a partir do plano avançado

### Retenção

- **Memória de marca acumulada:** a plataforma constrói perfil proprietário de cada cliente — tom de voz calibrado, formatos de alta performance, padrões sazonais. Quanto mais tempo o cliente usa, mais difícil é recriar esse ativo em outro lugar
- **Praticidade estrutural:** o cliente para de se preocupar com redes sociais. A postagem acontece automaticamente, com sua aprovação. Esse alívio cognitivo é, por si só, motivo de renovação — independente de ROI mensurável no curto prazo

---

## 7. Competidores e Posicionamento

Os concorrentes diretos não são Canva — que é uma ferramenta de design, não de estratégia. Os competidores reais são:

| Ferramenta | O que faz | O que não faz |
|---|---|---|
| Mlabs, Postgrain | Agendamento + IA básica (BR) | Não analisa concorrentes, não identifica gaps |
| Later, Buffer | Scheduling global + IA pontual | Input humano é pré-requisito |
| Predis.ai | Análise de concorrentes | Sem foco em SMBs locais BR, sem gap de tema |
| Freelancers | Estratégia + criação | R$800–2.500/mês, sem consistência garantida |

> **Frame de posicionamento:** *"Mlabs e Later assumem que você já sabe o que postar. A Postable descobre o que seus concorrentes locais não estão cobrindo, gera o conteúdo para você dominar esse espaço, e publica automaticamente. O cliente só precisa aprovar."*

---

## 8. Hipótese do MVP

> **Hipótese central:** SMBs que recebem conteúdo gerado a partir de análise de gap competitivo local conseguem diferenciar sua comunicação dos concorrentes — aumentando engajamento orgânico e fluxo de clientes — sem precisar se envolver na produção de conteúdo.

Para provar essa hipótese em 30–60 dias com 10–20 clientes piloto, o MVP precisa entregar:

- Onboarding: nicho, cidade, perfil da empresa, tom de voz, canal primário de vendas
- Análise de gap: identificação dos top 3 concorrentes locais e dos temas que não estão sendo cobertos
- Geração contextual: posts com referência à tendência local (via pytrends) + gap identificado + CTA específico
- Plano editorial semanal com aprovação pelo cliente antes da publicação

**Para uma segunda fase:**

- Publicação automatizada via API nas plataformas
- Dashboard de performance (engajamento, alcance, leads capturados)
- Integrações com landing pages e formulários

**Métrica de sucesso do MVP:** movimento visível — aumento no fluxo de mensagens, DMs de potenciais clientes, perfil visitado. Isso é suficiente para provar valor e garantir renovação no segundo mês.

---

## 9. Riscos e Mitigações

### Risco 1 — Conteúdo genérico (risco existencial)

Se a análise de gap não for suficientemente específica ao contexto local, a Postable vira mais um gerador de post genérico. O coração do produto é a camada de análise — não a camada de geração.

**Mitigação:** onboarding rico, dados de tendência regional via pytrends, análise de concorrentes reais e refinamento iterativo por cliente são inegociáveis desde o MVP.

### Risco 2 — Dependência de API de plataformas

Meta, Instagram e outras redes deprecam APIs regularmente. Em fevereiro de 2024, a Meta desativou a Groups API do Facebook com 90 dias de aviso. Em janeiro de 2025, a Instagram Basic Display API chegou ao fim da vida útil. Em novembro de 2025, métricas de Page Insights foram deprecadas.

↳ *Fonte: TechCrunch — fev/2024 | Meta for Developers changelog — jan/2025, nov/2025*

**Mitigação:** arquitetura com camada de publicação desacoplada. Fallback: geração + aprovação + publicação manual assistida — o valor do produto está na inteligência, não no botão de publish.

---

## 10. A Tese

Pequenas e médias empresas não precisam de uma agência tradicional para crescer digitalmente. Precisam de uma camada de inteligência que entenda o mercado local, identifique onde existe espaço de voz não ocupado pelos concorrentes, e transforme isso em conteúdo estratégico e recorrente — operando de forma autônoma, sem exigir tempo ou expertise do dono.

**O que mudou para tornar isso possível agora:**

- LLMs com janela de contexto de 1M tokens permitem processar dados de concorrentes + tendências + perfil de marca em um único prompt — sem arquitetura complexa
- Pressão crescente por leads qualificados em canais orgânicos: tráfego pago ficou mais caro e menos previsível
- SMBs brasileiras reconhecem que redes sociais são canal de venda — mas ainda não operam isso sistematicamente

**O que o mercado subestima:** a vantagem competitiva em conteúdo local não está em postar mais — está em postar sobre o que os concorrentes estão ignorando. A Postable é a primeira ferramenta que automatiza essa inteligência estratégica para o mercado de SMBs.

---

## Referências

1. Socialinsider — *2025 Social Media Benchmarks Report* (125 milhões de posts, 2023–2024)
   socialinsider.io/social-media-benchmarks

2. SMK Digital — *Instagram Brand Engagement Down 28%* (fev/2025)
   smk.co/new-study-instagram-brand-engagement-down-28

3. Google AI for Developers — *Gemini API Pricing*, atualizado 12/03/2026
   ai.google.dev/gemini-api/docs/pricing

4. TechCrunch — *Meta cuts off third-party access to Facebook Groups* (fev/2024)
   techcrunch.com/2024/02/05/meta-cuts-off-third-party-access-to-facebook-groups

5. LLM Practical Experience Hub — *Gemini 2.5 Flash-Lite vs GPT-4o mini Pricing* (set/2025)
   langcopilot.com/gemini-2.5-flash-lite-vs-gpt-4o-mini-pricing