// Base de dados de receitas atualizada e detalhada - PRATARIA RECEITAS
let recipes = [
    {
        id: 1,
        title: "Bolo Merengue de Morango",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
        desc: "Bolo cremoso em camadas de pão de ló, recheado com creme de leite em pó, morangos frescos e suspiros crocantes.",
        prepTime: "50 min (+2h de frigorífico)",
        servings: "10 a 12 fatias",
        nutrition: "Aprox. 410 kcal por fatia",
        substitutions: "As natas podem ser substituídas por chantilly vegetal ou creme de leite fresco com 35% de gordura.",
        ingredients: [
            "3 latas de leite condensado (395g cada)",
            "10 colheres (sopa) de leite em pó",
            "500ml de natas frescas (bem frias)",
            "500g de morangos frescos higienizados e fatiados",
            "200g de suspiros artesanais levemente partidos",
            "1 massa de pão de ló pronta (ou 200g de biscoito champanhe)",
            "100ml de leite integral para umedecer a massa"
        ],
        prep: [
            "Numa panela em lume brando, misture o leite condensado e o leite em pó. Mexa sem parar até obter um creme espesso em ponto de brigadeiro mole. Retire do lume e deixe arrefecer completamente.",
            "Bata as natas bem frias na batedeira em velocidade média-alta até atingir o ponto de chantilly firme.",
            "Para a montagem: num utilitário de vidro grande, faça uma camada base de pão de ló ligeiramente umedecido com leite.",
            "Espalhe uma camada generosa do creme de leite em pó frio por cima da massa.",
            "Adicione uma camada abundante de morangos fatiados e distribua metade dos suspiros partidos.",
            "Cubra com o chantilly e repita as camadas até preencher o recipiente.",
            "Finalize decorando o topo com morangos inteiros e suspiros.",
            "Leve ao frigorífico por no mínimo 2 horas antes de servir para apurar o sabor e ganhar consistência."
        ],
        tip: "Guarde alguns morangos com talo bonito para decorar o topo do bolo pouco antes de ir para a mesa."
    },
    {
        id: 2,
        title: "Pudim de Leite Condensado",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80",
        desc: "O clássico pudim aveludado com calda de caramelo dourada e textura irresistível.",
        prepTime: "20 min + 1h de forno (+4h frigorífico)",
        servings: "8 porções",
        nutrition: "Aprox. 320 kcal por fatia",
        substitutions: "Pode utilizar leite condensado e leite sem lactose mantendo exatamente as mesmas proporções.",
        ingredients: [
            "1 lata de leite condensado (395g)",
            "2 medidas da lata de leite integral (790ml)",
            "3 ovos inteiros grandes",
            "1 chávena (chá) de açúcar refinado (para a calda)",
            "1/2 chávena (chá) de água a ferver (para a calda)"
        ],
        prep: [
            "Para a calda: numa forma redonda com furo central (20cm), adicione o açúcar e leve ao lume brando até derreter e ficar com uma cor dourada.",
            "Adicione a água a ferver com cuidado e mexa até os grumos de açúcar dissolverem totalmente. Espalhe a calda pelo fundo e paredes da forma. Reserve.",
            "No liquidificador, bata o leite condensado, o leite e os ovos durante 3 minutos até obter uma mistura homogénea.",
            "Despeje a mistura na forma passando por um coador fino para evitar bolhas de ar e garantir um pudim lisinho.",
            "Cubra a forma com folha de alumínio e leve ao forno pré-aquecido a 180°C em banho-maria (coloque água quente na assadeira inferior) por 1 hora.",
            "Retire do forno, deixe arrefecer à temperatura ambiente e leve ao frigorífico por pelo menos 4 horas.",
            "Para desenformar, passe a base da forma rapidamente na boca do fogão para aquecer a calda e vire sobre um prato fundo."
        ],
        tip: "Se gosta de pudim com furinhos, bata a mistura por mais tempo no liquidificador e não use o coador."
    },
    {
        id: 3,
        title: "Mousse de Chocolate Aveludada",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1511715282059-4186c3a2410b?auto=format&fit=crop&w=800&q=80",
        desc: "Mousse leve, aerada e com sabor intenso a chocolate nobre.",
        prepTime: "25 min (+3h de frigorífico)",
        servings: "6 taças",
        nutrition: "Aprox. 280 kcal por porção",
        substitutions: "Substitua o chocolate 70% por chocolate ao leite se preferir uma sobremesa mais doce.",
        ingredients: [
            "200g de chocolate negro (50% a 70% cacau)",
            "4 ovos frescos (gema e clara separadas)",
            "3 colheres (sopa) de açúcar refinado",
            "1 colher (sopa) de manteiga sem sal",
            "1 pitada de sal",
            "Raspas de chocolate ou cacau em pó para decorar"
        ],
        prep: [
            "Pique o chocolate e derreta-o juntamente com a manteiga em banho-maria ou no micro-ondas (de 30 em 30 segundos, mexendo nos intervalos). Deixe mornar.",
            "Numa tigela, bata as gemas com o açúcar até formar um creme pálido e fofo.",
            "Adicione o chocolate derretido ao creme de gemas e misture bem até incorporar.",
            "Noutra tigela limpa, bata as claras em castelo com uma pitada de sal até ficarem bem firmes.",
            "Adicione um terço das claras ao creme de chocolate e misture vigorosamente para aliviar a massa.",
            "Incorpore o restante das claras com movimentos suaves de baixo para cima para não perder o ar da mousse.",
            "Distribua em taças individuais e leve ao frigorífico por no mínimo 3 horas antes de servir."
        ],
        tip: "Sirva com morangos frescos ou chantilly para contrastar com o amargor do chocolate."
    },
    {
        id: 4,
        title: "Cheesecake de Frutos Vermelhos",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
        desc: "Base crocante de bolacha com creme aveludado de queijo e cobertura artesanal de frutos vermelhos.",
        prepTime: "30 min + 45 min forno (+4h frio)",
        servings: "10 porções",
        nutrition: "Aprox. 390 kcal por fatia",
        substitutions: "A geleia de frutos vermelhos pode ser trocada por doce de leite ou goiabada cascão derretida.",
        ingredients: [
            "200g de bolacha Maria ou Maizena",
            "100g de manteiga sem sal derretida",
            "400g de cream cheese em temperatura ambiente",
            "1 lata de leite condensado (395g)",
            "200g de natas",
            "1 colher (sopa) de sumo de limão",
            "200g de frutos vermelhos (morangos, framboesas, mirtilos)",
            "1/2 chávena de açúcar para a calda"
        ],
        prep: [
            "Triture as bolachas no processador até obter uma farofa fina. Misture com a manteiga derretida até formar uma massa húmida.",
            "Forre o fundo de uma forma de fundo amovível (22cm) pressionando bem com as costas de uma colher. Leve ao forno pré-aquecido a 180°C por 10 minutos e deixe arrefecer.",
            "Na batedeira, bata o cream cheese, o leite condensado, as natas e o sumo de limão até formar um creme liso e homogéneo.",
            "Despeje o creme sobre a base de bolacha fria e leve ao forno a 160°C por cerca de 35 a 40 minutos (o centro deve abanar ligeiramente).",
            "Para a calda: numa panela, junte os frutos vermelhos e o açúcar. Cozinhe em lume brando por 10 minutos até reduzir ligeiramente.",
            "Deixe o cheesecake arrefecer no forno desligado com a porta entreaberta, cubra com a calda fria e leve ao frigorífico por 4 horas."
        ],
        tip: "Arrefecer o cheesecake gradualmente evita que a superfície rache."
    },
    {
        id: 5,
        title: "Lasanha Tradicional à Bolonhesa",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
        desc: "Lasanha reconfortante em camadas de massa fresca, molho bolonhesa encorpado e bastante queijo gratinado.",
        prepTime: "40 min + 35 min de forno",
        servings: "8 porções",
        nutrition: "Aprox. 520 kcal por porção",
        substitutions: "Substitua a carne de vaca por carne de frango picada ou cogumelos para uma opção vegetariana.",
        ingredients: [
            "500g de carne de vaca picada (patinho ou acém)",
            "500g de massa para lasanha pré-cozida",
            "400g de queijo mozzarella fatiado",
            "200g de queijo presunto fatiado (opcional)",
            "2 latas de molho de tomate picado (800g)",
            "1 cebola grande picada e 3 dentes de alho esmagados",
            "2 colheres (sopa) de azeite",
            "500ml de molho bechamel (molho branco)",
            "50g de queijo parmesão ralado",
            "Sal, pimenta-preta e orégãos a gosto"
        ],
        prep: [
            "Numa panela, aqueça o azeite e doure a cebola com o alho. Adicione a carne picada e refogue até perder a cor rosada.",
            "Tempere a carne com sal, pimenta e orégãos. Adicione o molho de tomate, tape e deixe apurar em lume brando por 15 minutos.",
            "Num refratário grande, comece com uma camada de molho bolonhesa no fundo.",
            "Adicione uma camada de massa de lasanha, seguida de molho bechamel, queijo presunto e mozzarella.",
            "Repita as camadas de massa, molhos e queijos até preencher o refratário, terminando com molho bechamel e mozzarella abundante.",
            "Polvilhe o queijo parmesão ralado por cima.",
            "Leve ao forno pré-aquecido a 180°C por 35 minutos até o queijo borbulhar e gratinar dourado.",
            "Deixe repousar 10 minutos antes de cortar para que as camadas fiquem firmes."
        ],
        tip: "Coloque bastante molho entre as camadas para garantir que a massa cozinha perfeitamente no forno."
    },
    {
        id: 6,
        title: "Esparguete à Carbonara Autêntico",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
        desc: "A receita clássica italiana sem natas: emulsão cremosa de gemas, queijo pecorino e guanciale crocante.",
        prepTime: "20 min",
        servings: "4 porções",
        nutrition: "Aprox. 480 kcal por porção",
        substitutions: "O guanciale pode ser substituído por bacon em cubos de boa qualidade ou pancetta.",
        ingredients: [
            "400g de massa esparguete de boa qualidade",
            "150g de guanciale ou bacon em cubos espessos",
            "4 gemas de ovo grandes + 1 ovo inteiro",
            "100g de queijo Pecorino Romano ou Parmesão ralado na hora",
            "Pimenta-preta moída na hora a gosto",
            "Sal para a água da cozedura"
        ],
        prep: [
            "Leve uma panela grande com água abundante e sal ao lume. Quando ferver, adicione o esparguete.",
            "Numa frigideira larga em lume médio, frite o guanciale/bacon na própria gordura até ficar crocante e dourado. Desligue o lume.",
            "Numa tigela, misture as gemas, o ovo inteiro, o queijo ralado e uma quantidade abundante de pimenta-preta moída até formar uma pasta espessa.",
            "Retire a massa 1 minuto antes do tempo indicado na embalagem (al dente), reservando 1 chávena da água do cozimento.",
            "Transfira a massa diretamente para a frigideira com o bacon e a sua gordura, misturando bem.",
            "Com a frigideira FORA DO LUME (passo essencial para o ovo não cozer e virar omelete), adicione a mistura de gemas e um pouco da água quente da massa.",
            "Envolva vigorosamente até formar um molho cremoso e brilhante que adere à massa.",
            "Sirva imediatamente com mais queijo e pimenta moída por cima."
        ],
        tip: "Nunca adicione natas! A cremosidade vem exclusivamente da emulsão das gemas com a gordura e a água da massa."
    },
    {
        id: 7,
        title: "Nhoque de Batata ao Molho Pesto",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        desc: "Nhoques artesanais de batata leves como uma nuvem, servidos com molho pesto fresco de manjericão.",
        prepTime: "50 min",
        servings: "4 porções",
        nutrition: "Aprox. 410 kcal por porção",
        substitutions: "As nozes podem ser substituídas por pinhões (pinoli), castanhas do Pará ou amêndoas torradas.",
        ingredients: [
            "1kg de batatas monalisa ou asterix (batata mais seca)",
            "1,5 a 2 chávenas de farinha de trigo",
            "1 gema de ovo",
            "1 colher (chá) de sal",
            "2 chávenas de folhas de manjericão fresco higienizadas",
            "1/2 chávena de azeite extra virgem",
            "50g de queijo parmesão ralado",
            "30g de nozes ou pinoli",
            "1 dente de alho sem o germe central"
        ],
        prep: [
            "Cozinhe as batatas inteiras com casca em água salgada até ficarem bem macias. Descasque ainda quentes e passe pelo espremedor.",
            "Deixe a batata espremida arrefecer completamente numa bancada para evaporar a humidade.",
            "Adicione a gema, o sal e adicione a farinha de trigo aos poucos, amassando delicadamente apenas até dar ponto (massa macia que não cola nas mãos).",
            "Faça rolinhos compridos na bancada enfarinhada e corte cubos de 2cm.",
            "Para o pesto: no processador ou liquidificador, bata o manjericão, o alho, as nozes, o parmesão e o azeite até obter um molho verde vibrante.",
            "Cozinhe os nhoques em água a ferver com sal. Assim que subirem à superfície, retire-os com uma escumadeira.",
            "Misture os nhoques quentes delicadamente com o molho pesto e sirva com queijo ralado fresco."
        ],
        tip: "Quanto menos farinha usar na massa, mais macio e leve será o seu nhoque."
    },
    {
        id: 8,
        title: "Estrogonofe de Frango Cremosíssimo",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        desc: "Tiras suculentas de peito de frango envolvidas num molho aveludado com cogumelos frescos.",
        prepTime: "30 min",
        servings: "5 porções",
        nutrition: "Aprox. 380 kcal por porção",
        substitutions: "Pode utilizar natas frescas, creme de leite de caixinha ou requeijão cremoso para finalizar.",
        ingredients: [
            "700g de peito de frango cortado em cubos ou tiras finas",
            "1 lata ou pacotinho de creme de leite (200g)",
            "2 colheres (sopa) de molho de tomate ou extrato",
            "2 colheres (sopa) de ketchup",
            "1 colher (sopa) de mostarda amarela ou dijon",
            "150g de cogumelos champignon fatiados",
            "1 cebola média picadinha e 2 dentes de alho esmagados",
            "2 colheres (sopa) de manteiga ou azeite",
            "Sal, pimenta-preta e cheiro-verde a gosto"
        ],
        prep: [
            "Tempere o frango com sal, pimenta-preta e um fio de azeite.",
            "Numa frigideira funda ou panela, derreta a manteiga em lume alto e doure o frango aos poucos para não acumular água. Reserve o frango.",
            "Na mesma panela, adicione a cebola e o alho, refogando até ficarem dourados e macios.",
            "Junte os cogumelos fatiados e refogue por 2 minutos.",
            "Volte o frango para a panela, adicione o ketchup, a mostarda e o molho de tomate, misturando bem.",
            "Reduza o lume para o mínimo e adicione o creme de leite. Misture delicadamente até aquecer sem deixar ferver.",
            "Ajuste o sal e finalize com cheiro-verde picado.",
            "Sirva bem quente acompanhado de arroz branco bem soltinho e batata palha estaladiça."
        ],
        tip: "Não deixe o creme de leite ferver para evitar que o molho corte e perca a textura aveludada."
    },
    {
        id: 9,
        title: "Bacalhau com Natas à Portuguesa",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        desc: "Receita icónica da culinária portuguesa: bacalhau desfiado com batata frita em cubos e molho bechamel gratinado.",
        prepTime: "45 min + 20 min de forno",
        servings: "6 porções",
        nutrition: "Aprox. 460 kcal por porção",
        substitutions: "Pode usar batata cozida em cubos em vez de frita para uma versão mais leve.",
        ingredients: [
            "600g de bacalhau demolhado e desfiado",
            "600g de batatas cortadas em cubinhos pequenos",
            "2 cebolas grandes cortadas em rodelas finas (meia-lua)",
            "3 dentes de alho fatiados",
            "200ml de natas frescas",
            "500ml de molho bechamel cremoso",
            "50ml de azeite extra virgem",
            "1 folha de louro",
            "Salsa fresca e noz-moscada a gosto",
            "Queijo ralado para gratinar"
        ],
        prep: [
            "Frite os cubos de batata em óleo bem quente até ficarem dourados (sem deixar ficar demasiado crocantes). Escorra em papel absorvente e reserve.",
            "Numa frigideira larga, adicione o azeite, as cebolas, o alho e a folha de louro. Refogue em lume brando até a cebola ficar bem transparente e macia.",
            "Junte o bacalhau desfiado e refogue durante 8 a 10 minutos para incorporar todos os sabores. Retire a folha de louro.",
            "Misture as batatas fritas ao refogado de bacalhau.",
            "Numa tigela, envolva o molho bechamel com as natas, temperando com pimenta e uma pitada de noz-moscada.",
            "Junte 2/3 deste molho cremoso ao preparado de bacalhau com batatas e envolva bem.",
            "Transfira tudo para uma assadeira de vidro, cubra com o restante molho e polvilhe queijo ralado por cima.",
            "Leve ao forno pré-aquecido a 200°C na função gratinar durante 20 minutos até dourar a superfície."
        ],
        tip: "Sirva acompanhado de uma boa salada de folhas verdes com azeite e vinagre balsâmico."
    },
    {
        id: 10,
        title: "Salmão Grelhado com Ervas e Limão",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
        desc: "Lombos de salmão com pele crocante, interior suculento e molho de manteiga de ervas cítrico.",
        prepTime: "20 min",
        servings: "4 porções",
        nutrition: "Aprox. 340 kcal por porção",
        substitutions: "Pode ser feito com truta ou robalo mantendo o mesmo molho de ervas.",
        ingredients: [
            "4 lombos de salmão fresco com pele (aprox. 180g cada)",
            "2 colheres (sopa) de manteiga sem sal",
            "2 colheres (sopa) de azeite",
            "Sumo e raspas de 1 limão siciliano",
            "2 colheres (sopa) de ervas frescas picadas (aneto/dill, salsa e tomilho)",
            "2 dentes de alho picados fino",
            "Sal grosso ou flor de sal e pimenta-preta a gosto"
        ],
        prep: [
            "Seque bem a superfície dos lombos de salmão com papel de cozinha. Tempere com sal e pimenta-preta.",
            "Aqueça uma frigideira antiaderente em lume médio-alto com o azeite.",
            "Coloque os lombos de salmão com a PELE VIRADA PARA BAIXO. Pressione delicadamente com uma espátula durante 10 segundos para a pele não enrolar.",
            "Deixe grelhar sem mexer por cerca de 4 a 5 minutos até a pele ficar extremamente crocante e o cozimento subir até metade do lombo.",
            "Vire os lombos com cuidado e grelhe por mais 2 minutos.",
            "Adicione a manteiga, o alho picado, as raspas e o sumo de limão à frigideira.",
            "Com uma colher, vá regando o topo do salmão com a manteiga derretida aromatizada durante 1 minuto.",
            "Polvilhe as ervas frescas e retire do lume imediatamente para manter a suculência."
        ],
        tip: "Não sobrecarregue a frigideira: se necessário, grelhe os lombos dois a dois."
    },
    {
        id: 11,
        title: "Hambúrguer Artesanal Smash com Bacon",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        desc: "Hambúrguer ultra suculento grelhado na chapa, queijo cheddar derretido e tiras crocantes de bacon em pão brioche.",
        prepTime: "25 min",
        servings: "2 hambúrgueres",
        nutrition: "Aprox. 580 kcal por hambúrguer",
        substitutions: "Utilize pão australiano e queijo prato se preferir um perfil de sabor diferente.",
        ingredients: [
            "360g de carne picada com 20% de gordura (ex: mistura de acém com peito)",
            "2 pães de hambúrguer estilo Brioche",
            "4 fatias de queijo Cheddar verdadeiro",
            "4 tiras de bacon crocante",
            "2 colheres (sopa) de maionese artesanal",
            "1 colher (sopa) de manteiga",
            "Sal grosso fino e pimenta-preta moída na hora"
        ],
        prep: [
            "Divida a carne em 2 bolas de 180g (ou 4 bolas de 90g para formato smash duplo) sem apertar muito.",
            "Corte os pães ao meio, passe manteiga na parte interna e toste na frigideira quente até dourar. Reserve.",
            "Aqueça bem uma frigideira de ferro ou chapa em lume bem alto até deitar fumo.",
            "Coloque as bolas de carne na chapa e pressione firmemente com uma espátula pesada para esmagar bem.",
            "Tempere o topo generosamente com sal e pimenta moída.",
            "Deixe criar uma crosta dourada e escura por cerca de 2 a 3 minutos. Vire o hambúrguer.",
            "Coloque as fatias de cheddar por cima da carne, tape a frigideira por 30 segundos para o queijo derreter completamente.",
            "Monte o hambúrguer: passe maionese na base do pão tostado, coloque a carne com queijo derretido, as tiras de bacon e feche com o topo do pão."
        ],
        tip: "Nunca aperte o hambúrguer depois de o virar na chapa para não expulsar os sucos da carne."
    },
    {
        id: 12,
        title: "Tostada de Abacate, Ovo Poché e Ervas",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        desc: "Pão artesanal tostado, creme temperado de abacate e ovo com gema cremosa aveludada.",
        prepTime: "15 min",
        servings: "2 tostadas",
        nutrition: "Aprox. 290 kcal por tostada",
        substitutions: "O ovo poché pode ser substituído por ovo estrelado ou cozido fatiado.",
        ingredients: [
            "2 fatias espessas de pão de massa mãe (Sourdough) ou pão rústico",
            "1 abacate maduro pequeno (ou 1/2 avocado)",
            "2 ovos frescos",
            "1 colher (sopa) de sumo de limão",
            "1 colher (sopa) de azeite extra virgem",
            "1 colher (sopa) de vinagre de vinho branco (para o cozimento do ovo)",
            "Flor de sal, pimenta em flocos (chilli) e sementes de sésamo"
        ],
        prep: [
            "Toste as fatias de pão numa frigideira com um fio de azeite até ficarem bem crocantes por fora e macias por dentro.",
            "Numa tigela, esmague o abacate com um garfo, mantendo alguma textura. Misture o sumo de limão, azeite, sal e pimenta.",
            "Para os ovos poché: aqueça água numa panela pequena até começar a formar pequenas bolhas no fundo (sem ferver intensamente). Adicione o vinagre.",
            "Com uma colher, faça um redemoinho no centro da água e deite o ovo previamente partido numa xícara.",
            "Cozinhe por 3 minutos exatos para garantir que a clara fique firme e a gema completamente líquida.",
            "Retire o ovo com uma escumadeira e seque delicadamente em papel absorvente.",
            "Monte espalhando a pasta de abacate sobre o pão tostado, coloque o ovo poché por cima e finalize com flor de sal, flocos de pimenta e sementes."
        ],
        tip: "O vinagre e o redemoinho na água ajudam a clara a envolver a gema sem se espalhar."
    },
    {
        id: 13,
        title: "Caldo Verde Tradicional Português",
        category: "entradas",
        tag: "Entradas e Sopas",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        desc: "Sopa aveludada de batata com rodelas de chouriço e couve galega cortada bem fina.",
        prepTime: "35 min",
        servings: "6 porções",
        nutrition: "Aprox. 230 kcal por tigela",
        substitutions: "Na falta de couve galega, pode utilizar couve manteiga fatiada o mais fino possível.",
        ingredients: [
            "600g de batatas descascadas e cortadas em cubos",
            "200g de couve galega cortada em caldo verde (tiras finíssimas)",
            "1 chouriço de carne de boa qualidade (fatiado em rodelas)",
            "1 cebola média e 2 dentes de alho",
            "1,5 litros de água ou caldo de legumes caseiro",
            "50ml de azeite extra virgem português",
            "Sal grosso a gosto",
            "Broa de milho para acompanhar"
        ],
        prep: [
            "Numa panela grande, junte as batatas, a cebola, o alho, a água e metade do azeite. Tempere com sal.",
            "Leve ao lume e cozinhe por 20 a 25 minutos até que as batatas fiquem extremamente macias.",
            "Entretanto, numa frigideira à parte, salteie as rodelas de chouriço até libertarem a sua gordura e ficarem ligeiramente douradas. Reserve.",
            "Passe a sopa de batata pelo passe-vite ou passe com a varinha mágica até obter um creme liso e aveludado.",
            "Leve o creme novamente ao lume e, quando ferver, adicione a couve galega bem lavada e escorrida.",
            "Deixe cozinhar com a panela destapada por apenas 3 a 5 minutos para que a couve fique macia sem perder a cor verde vibrante.",
            "Regue com o restante azeite cru e adicione as rodelas de chouriço reservadas.",
            "Sirva bem quente em tigelas de barro acompanhado de fatias de broa de milho."
        ],
        tip: "Cozinhar a couve com a panela destapada garante que o caldo verde mantenha a sua cor intensa."
    },
    {
        id: 14,
        title: "Bruschetta Crocante de Tomate e Manjericão",
        category: "entradas",
        tag: "Entradas e Sopas",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
        desc: "Fatias de pão italiano grelhado, esfregadas com alho e cobertas com tomates frescos marinados.",
        prepTime: "15 min",
        servings: "4 porções",
        nutrition: "Aprox. 180 kcal por porção",
        substitutions: "Adicione mini bolinhas de queijo mozzarella fresca ou vinagre balsâmico reduzido.",
        ingredients: [
            "1 pão italiano ou baguete rústica cortada em fatias de 2cm",
            "4 tomates maduros e firmes (tipo débora ou italiano) sem sementes e picados em cubos",
            "2 dentes de alho descascados (um inteiro e um picado fino)",
            "1/2 chávena de folhas frescas de manjericão picadas",
            "4 colheres (sopa) de azeite extra virgem de boa qualidade",
            "Sal marinho e pimenta-preta moída na hora"
        ],
        prep: [
            "Numa tigela, misture os tomates picados, o alho picado fino, as folhas de manjericão e 3 colheres de azeite.",
            "Tempere a mistura com sal e pimenta-preta a gosto. Deixe marinar à temperatura ambiente por 10 minutos para libertar os sumos.",
            "Grelhe as fatias de pão numa frigideira antiaderente ou grelha bem quente até ficarem douradas e crocantes.",
            "Esfregue delicadamente o dente de alho inteiro cru sobre a superfície quente de cada fatia de pão tostado.",
            "Distribua generosamente a mistura de tomate marinado sobre o pão.",
            "Regue com o restante azeite extra virgem e decore com folhas inteiras de manjericão.",
            "Sirva imediatamente enquanto o pão se mantém bem crocante."
        ],
        tip: "Monte as bruschettas apenas na hora de servir para evitar que o pão fique amolecido com o sumo do tomate."
    }
];

// Mapeamento de categorias da API para o teu site
const categoryMapping = {
    "Beef": { category: "principais", tag: "Carne de Vaca" },
    "Chicken": { category: "principais", tag: "Aves" },
    "Dessert": { category: "doces", tag: "Doces e Sobremesas" },
    "Lamb": { category: "principais", tag: "Carne de Cordeiro" },
    "Miscellaneous": { category: "lanches", tag: "Diversos" },
    "Pasta": { category: "massas", tag: "Massas" },
    "Pork": { category: "principais", tag: "Carne de Porco" },
    "Seafood": { category: "principais", tag: "Peixes e Mariscos" },
    "Side": { category: "entradas", tag: "Acompanhamentos" },
    "Starter": { category: "entradas", tag: "Entradas e Sopas" },
    "Vegan": { category: "principais", tag: "Vegetariano / Vegan" },
    "Vegetarian": { category: "principais", tag: "Vegetariano" },
    "Breakfast": { category: "lanches", tag: "Pequeno-Almoço" },
    "Goat": { category: "principais", tag: "Carnes" }
};

function extractIngredients(meal) {
    const ing = [];
    for (let i = 1; i <= 20; i++) {
        const name = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (name && name.trim() !== "") {
            ing.push(measure ? `${measure.trim()} de ${name.trim()}` : name.trim());
        }
    }
    return ing;
}

function extractInstructions(text) {
    if (!text) return ["Siga o modo de preparação tradicional."];
    return text.split(/\r?\n|\./).map(s => s.trim()).filter(s => s.length > 5);
}

// Atualização da lista no ecrã
function updateWebsiteDisplay() {
    if (typeof renderRecipes === 'function') renderRecipes(recipes);
    if (typeof displayRecipes === 'function') displayRecipes(recipes);
    if (typeof mostrarReceitas === 'function') mostrarReceitas(recipes);
    
    const activeBtn = document.querySelector('button.active') || document.querySelector('.cat-btn') || document.querySelectorAll('button')[0];
    if (activeBtn && typeof filterCategory === 'function') {
        const category = activeBtn.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 'all';
        filterCategory(category, activeBtn);
    }
}

// Importação das centenas de receitas adicionais com estrutura compatível
async function fetchHundredsOfRecipes() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w'];
    
    for (const letter of letters) {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
            const data = await res.json();
            if (data.meals) {
                data.meals.forEach((meal, idx) => {
                    const mapped = categoryMapping[meal.strCategory] || { category: "principais", tag: "Geral" };
                    recipes.push({
                        id: 1000 + recipes.length + idx,
                        title: meal.strMeal,
                        category: mapped.category,
                        tag: mapped.tag,
                        image: meal.strMealThumb,
                        desc: `Receita internacional de ${meal.strMeal} (${mapped.tag}).`,
                        prepTime: "35 min",
                        servings: "4 porções",
                        nutrition: "Informação nutricional variável conforme os ingredientes.",
                        substitutions: "Adapte os temperos e ervas de acordo com a sua preferência.",
                        ingredients: extractIngredients(meal),
                        prep: extractInstructions(meal.strInstructions),
                        tip: "Servir bem quente e desfrutar!"
                    });
                });
            }
        } catch (e) {
            console.error("Erro ao carregar letra " + letter, e);
        }
    }

    updateWebsiteDisplay();
}

setTimeout(fetchHundredsOfRecipes, 500);
