const recipes = [
    // --- DOCES E SOBREMESAS ---
    {
        id: 1,
        title: "Bolo Merengue de Morango",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80",
        desc: "Bolo cremoso, leve e irresistível recheado com morangos frescos e creme de natas.",
        ingredients: [
            "3 latas de leite condensado",
            "10 colheres (sopa) de leite em pó",
            "5 pacotes de natas",
            "Morangos frescos picados",
            "Massa de pão de ló",
            "Suspiros partidos"
        ],
        prep: [
            "Prepare o recheio levando ao lume o leite condensado e leite em pó até ao ponto de brigadeiro mole.",
            "Humedeça a massa com calda de leite condensado.",
            "Monte camadas de massa, recheio e morangos picados com suspiros.",
            "Finalize cobrindo com natas batidas e decore com morangos inteiros."
        ],
        tip: "Utilize morangos bem firmes e maduros para garantir maior durabilidade e textura."
    },
    {
        id: 2,
        title: "Doce de Leite Caseiro",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
        desc: "Receita tradicional e super fácil feita com apenas 1 litro de leite.",
        ingredients: [
            "1 litro de leite integral",
            "250g de açúcar",
            "1 pitada de bicarbonato de sódio"
        ],
        prep: [
            "Num tacho grande, misture o leite, o açúcar e o bicarbonato.",
            "Leve a lume médio até ferver, depois reduza o lume e mexa de vez em quando.",
            "À medida que o leite reduzir, mexa com mais frequência para não pegar ao fundo.",
            "Cozinhe até atingir o ponto de caramelo cremoso. Deixe arrefecer."
        ],
        tip: "Guarde num frasco de vidro no frigorífico até 7 dias."
    },
    {
        id: 3,
        title: "Bolo Red Velvet",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80",
        desc: "Bolo fofinho, húmido e elegante com recheio cremoso de cream cheese.",
        ingredients: [
            "3 ovos",
            "1 e 1/2 chávena de açúcar",
            "1/2 chávena de manteiga",
            "1 chávena de leite",
            "2 e 1/2 chávenas de farinha de trigo",
            "1 colher (sopa) de corante vermelho em gel",
            "300g de cream cheese para a cobertura"
        ],
        prep: [
            "Bata os ovos com o açúcar até formar um creme claro.",
            "Adicione a manteiga, o leite e o corante vermelho.",
            "Incorpore a farinha e o fermento suavemente.",
            "Asse a 180°C por 35 minutos. Deixe arrefecer e recheie com o cream cheese batido com açúcar."
        ],
        tip: "Adicione uma colher de vinagre à massa para reagir com o bicarbonato e deixar o bolo extra fofo."
    },
    {
        id: 4,
        title: "Mousse de Chocolate Tradicional",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
        desc: "Mousse aveludada com intenso sabor a chocolate e textura aerada.",
        ingredients: [
            "200g de chocolate preto 70%",
            "4 claras em castelo",
            "4 gemas de ovo",
            "3 colheres (sopa) de açúcar",
            "1 colher (sopa) de manteiga"
        ],
        prep: [
            "Derreta o chocolate com a manteiga em banho-maria.",
            "Bata as gemas com o açúcar até obter um creme esbranquiçado e junte ao chocolate.",
            "Envolva delicadamente as claras em castelo.",
            "Leve ao frigorífico por no mínimo 4 horas antes de servir."
        ],
        tip: "Sirva com raspas de chocolate branco ou frutos vermelhos por cima."
    },
    {
        id: 5,
        title: "Pudim de Leite Condensado",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=600&q=80",
        desc: "O clássico pudim com calda de caramelo dourada e textura aveludada.",
        ingredients: [
            "1 lata de leite condensado",
            "2 medidas da lata de leite",
            "3 ovos inteiros",
            "1 chávena de açúcar para a calda"
        ],
        prep: [
            "Derreta o açúcar na forma de pudim até formar um caramelo dourado.",
            "Bata o leite condensado, o leite e os ovos no liquidificador por 3 minutos.",
            "Despeje na forma e asse em banho-maria no forno a 180°C por 1 hora.",
            "Deixe arrefecer completamente antes de desenformar."
        ],
        tip: "Passe a mistura por um coador para evitar bolhas e obter um pudim bem liso."
    },
    {
        id: 6,
        title: "Cheesecake de Frutos Vermelhos",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        desc: "Sobremesa fresca com base crocante de bolacha e cobertura aveludada.",
        ingredients: [
            "200g de bolacha Maria moída",
            "100g de manteiga derretida",
            "400g de cream cheese",
            "200g de natas",
            "1/2 chávena de açúcar",
            "Doce de frutos vermelhos para cobrir"
        ],
        prep: [
            "Misture a bolacha com a manteiga e forre o fundo de uma forma amovível.",
            "Bata o cream cheese, as natas e o açúcar até obter um creme homogéneo.",
            "Despeje sobre a base de bolacha e leve ao frigorífico por 6 horas.",
            "Cubra com a compota de frutos vermelhos antes de servir."
        ],
        tip: "Deixe repousar no frigorífico de um dia para o outro para garantir a firmeza ideal."
    },

    // --- MASSAS ---
    {
        id: 7,
        title: "Lasanha à Bolonhesa",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80",
        desc: "Lasanha suculenta com molho à bolonhesa tradicional e bastante queijo derretido.",
        ingredients: [
            "500g de carne picada",
            "1 cebola e 2 dentes de alho",
            "2 chávenas de molho de tomate",
            "200g de fiambre e 300g de mozzarella",
            "Placas de massa para lasanha",
            "Sal e orégãos a gosto"
        ],
        prep: [
            "Refogue a cebola, o alho e a carne picada.",
            "Adicione o molho de tomate e os temperos. Cozinhe até apurar.",
            "Monte camadas alternadas de molho, massa, fiambre e queijo.",
            "Leve ao forno pré-aquecido a 180°C por 30 minutos."
        ],
        tip: "Acrescente uma camada de molho bechamel para um resultado ainda mais cremoso!"
    },
    {
        id: 8,
        title: "Carbonara Italiana Tradicional",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
        desc: "Receita autêntica romana feita com gemas, queijo Pecorino e pancetta.",
        ingredients: [
            "400g de esparguete",
            "150g de guanciale ou pancetta em cubos",
            "4 gemas de ovo",
            "100g de queijo Pecorino ou Parmesão ralado",
            "Pimenta preta moída na hora"
        ],
        prep: [
            "Cozinhe o esparguete em água a ferver com sal até ficar al dente.",
            "Frite o guanciale numa frigideira até ficar crocante.",
            "Numa taça, misture as gemas com o queijo ralado e pimenta.",
            "Junte a massa quente ao guanciale fora do lume e incorpore a mistura de gemas mexendo rapidamente."
        ],
        tip: "Nunca adicione natas! O segredo da cremosidade é a água da cozedura da massa misturada com as gemas."
    },
    {
        id: 9,
        title: "Nhoque / Gnocchi ao Molho Pesto",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        desc: "Gnocchi leve de batata servido com molho pesto caseiro de manjericão.",
        ingredients: [
            "500g de batatas cozidas e espremidas",
            "1 e 1/2 chávena de farinha de trigo",
            "1 gema de ovo",
            "1 chávena de folhas de manjericão fresco",
            "50g de pinhões ou nozes",
            "1/2 chávena de azeite e alho"
        ],
        prep: [
            "Misture a batata, farinha e gema até formar uma massa macia. Molde os gnocchis.",
            "Cozinhe em água a ferver até subirem à superfície.",
            "Triture o manjericão, nozes, alho, azeite e parmesão para o pesto.",
            "Envolva os gnocchis no molho pesto e sirva de imediato."
        ],
        tip: "Utilize batatas mais secas (como a batata rosa) para a massa não precisar de muita farinha."
    },
    {
        id: 10,
        title: "Ravioli de Espinafres e Ricota",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1587740896339-96a76170508d?auto=format&fit=crop&w=600&q=80",
        desc: "Massa fresca recheada com ricota suave e espinafres temperados.",
        ingredients: [
            "300g de farinha de trigo",
            "3 ovos",
            "200g de ricota fresca",
            "150g de espinafres salteados e picados",
            "Noz-moscada, sal e manteiga de salvia"
        ],
        prep: [
            "Prepare a massa fresca com farinha e ovos. Deixe descansar 30 minutos e estenda.",
            "Misture a ricota com os espinafres e tempere com noz-moscada e sal.",
            "Recheie e corte os raviolis.",
            "Cozinhe por 4 minutos e finalize salteando em manteiga e folhas de salvia."
        ],
        tip: "Polvilhe com bastante queijo parmesão ralado na hora."
    },

    // --- PRATOS PRINCIPAIS ---
    {
        id: 11,
        title: "Estrogonofe de Frango",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80",
        desc: "Prato prático, cremoso e muito saboroso. A refeição perfeita para a família.",
        ingredients: [
            "500g de peito de frango em cubos",
            "1 cebola picada e 2 dentes de alho",
            "2 colheres (sopa) de ketchup e 1 de mostarda",
            "1 pacote de natas ou queijo creme",
            "Cogumelos laminados",
            "Sal, pimenta e salsa picada"
        ],
        prep: [
            "Salteie a cebola e o alho em azeite, junte o frango e doure bem.",
            "Adicione os cogumelos, o ketchup e a mostarda.",
            "Incorpore as natas e misture em lume brando até aquecer sem ferver.",
            "Sirva acompanhado de arroz branco e batata palha."
        ],
        tip: "Adicione um toque de molho inglês para enriquecer o sabor."
    },
    {
        id: 12,
        title: "Bacalhau com Natas Tradicional",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        desc: "Um clássico da culinária portuguesa, cremoso e gratinado no forno.",
        ingredients: [
            "500g de bacalhau demolhado e desfiado",
            "500g de batatas cortadas em cubinhos fritos",
            "1 cebola grande em rodelas finas",
            "400ml de molho bechamel",
            "200ml de natas",
            "Queijo ralado para gratinar"
        ],
        prep: [
            "Refogue a cebola e o alho em azeite abundante até amolecer e junte o bacalhau.",
            "Misture as batatas fritas em cubos com o bacalhau refogado.",
            "Envolva o bechamel e as natas na mistura.",
            "Coloque num refratário, cubra com queijo ralado e leve ao forno a gratinar a 200°C por 20 minutos."
        ],
        tip: "Não frite demasiado as batatas para que absorvam bem o creme no forno."
    },
    {
        id: 13,
        title: "Salmão Grelhado com Molho de Maracujá",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        desc: "Lombo de salmão suculento com molhoagridoce refrescante.",
        ingredients: [
            "4 lombos de salmão",
            "Polpa de 2 maracujás frescos",
            "2 colheres (sopa) de mel",
            "1 colher (sopa) de manteiga",
            "Sal, pimenta e sumo de limão"
        ],
        prep: [
            "Tempere o salmão com sal, pimenta e sumo de limão.",
            "Numa frigideira com manteiga e mel, reduza a polpa do maracujá até engrossar ligeiramente.",
            "Grelhe os lombos de salmão com a pele para baixo até ficarem dourados.",
            "Sirva o salmão coberto com o molho quente e legumes ao vapor."
        ],
        tip: "Mantenha a pele do salmão bem seca antes de grelhar para que fique super crocante."
    },
    {
        id: 14,
        title: "Carne de Porco à Alentejana",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        desc: "Combinação perfeita de carne marinhada, amêijoas frescas e batatas em cubos.",
        ingredients: [
            "600g de lombo de porco em cubos",
            "500g de amêijoas frescas",
            "1/2 garrafa de vinho branco",
            "3 dentes de alho e massa de pimentão",
            "Batatas fritas em cubos",
            "Coentros frescos picados e pickles"
        ],
        prep: [
            "Marine a carne em vinho branco, alho, massa de pimentão e louro por 4 horas.",
            "Frite a carne em banha ou azeite até dourar.",
            "Adicione as amêijoas e tape até abrirem completamente.",
            "Misture as batatas fritas, polvilhe com coentros frescos e sirva."
        ],
        tip: "Lave bem as amêijoas em água com sal para remover toda a areia antes de cozinhar."
    },

    // --- LANCHES RÁPIDOS ---
    {
        id: 15,
        title: "Pastel Chinês Crocante",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        desc: "Massa leve e crocante recheada com legumes e carne temperada.",
        ingredients: [
            "1 e 1/2 chávena de farinha de trigo",
            "1 colher (chá) de fermento em pó",
            "2 colheres (sopa) de manteiga",
            "1 ovo e água morna",
            "Recheio de legumes salteados ou carne picada"
        ],
        prep: [
            "Misture os ingredientes secos com a manteiga e o ovo.",
            "Adicione água morna até dar o ponto de massa homogénea e deixe descansar 20 minutos.",
            "Estenda a massa bem fina e corte em retângulos.",
            "Recheie, feche os rebordos com um garfo e frite em óleo bem quente."
        ],
        tip: "Servir imediatamente quente para manter a textura crocante."
    },
    {
        id: 16,
        title: "Cachorro-Quente de Forno",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80",
        desc: "Excelente opção para lanches de grupo, fácil de preparar no forno.",
        ingredients: [
            "1 pacote de pão de forma sem côdea",
            "500g de salsichas picadas",
            "1 pacote de molho de tomate",
            "300g de queijo mozzarella ralado",
            "Queijo creme e batata palha"
        ],
        prep: [
            "Faça um refogado com o molho de tomate e as salsichas.",
            "Numa travessa, forre o fundo com fatias de pão.",
            "Cubra com o molho de salsichas, queijo creme e mozzarella.",
            "Faça mais uma camada e leve ao forno a gratinar a 180°C por 20 minutos."
        ],
        tip: "Polvilhe com batata palha assim que retirar do forno."
    },
    {
        id: 17,
        title: "Hambúrguer Artesanal com Queijo Cheddar",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        desc: "Hambúrguer suculento grelhado na hora com bacon crocante.",
        ingredients: [
            "180g de carne de novilho picada (com 20% de gordura)",
            "Pão de hambúrguer tipo brioche",
            "2 fatias de queijo cheddar",
            "2 fatias de bacon crocante",
            "Molho especial e alface"
        ],
        prep: [
            "Molde a carne sem apertar muito e tempere com sal e pimenta na hora de grelhar.",
            "Grelhe numa frigideira bem quente por 3 a 4 minutos de cada lado.",
            "Coloque o queijo cheddar por cima nos últimos minutos para derreter.",
            "Toste o pão em manteiga e monte o hambúrguer com o bacon e o molho."
        ],
        tip: "Tostar o pão impede que os sucos da carne o deixem mole."
    },
    {
        id: 18,
        title: "Tostada de Abacate e Ovo Escalfado",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
        desc: "Opção saudável, rápida e perfeita para um pequeno-almoço reforçado.",
        ingredients: [
            "2 fatias de pão de massa mãe (sourdough)",
            "1 abacate maduro esmagado",
            "2 ovos frescos",
            "Azeite, sumo de limão, sal e piripiri"
        ],
        prep: [
            "Toste as fatias de pão de massa mãe.",
            "Esmague o abacate com sumo de limão, azeite, sal e pimenta.",
            "Escalfe os ovos em água a ferver suavemente com um pingo de vinagre por 3 minutos.",
            "Espalhe o abacate no pão e disponha os ovos por cima."
        ],
        tip: "Corte a gema do ovo ao meio para escorrer sobre a tosta."
    },

    // --- ENTRADAS E SOPAS ---
    {
        id: 19,
        title: "Caldo Verde Tradicional",
        category: "entradas",
        tag: "Entradas e Sopas",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
        desc: "Sopa reconfortante de batata com couve galega bem fina e rodelas de chouriço.",
        ingredients: [
            "500g de batatas",
            "200g de couve galega cortada em caldo verde",
            "1 cebola e 2 dentes de alho",
            "1 chouriço de carne",
            "Azeite virgem extra e sal"
        ],
        prep: [
            "Cozinhe as batatas, cebola e alho com o chouriço. Retire o chouriço e passe a base com a varinha mágica.",
            "Leve o puré de novo ao lume e junte a couve bem lavada.",
            "Cozinhe por 10 minutos até a couve ficar macia.",
            "Sirva bem quente com fatias de chouriço e um fio de azeite."
        ],
        tip: "Acompanhe com uma fatia de pão de broa de milho."
    },
    {
        id: 20,
        title: "Creme de Abóbora com Gengibre",
        category: "entradas",
        tag: "Entradas e Sopas",
        image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=600&q=80",
        desc: "Sopa cremosa, aveludada e com um toque aromático de gengibre.",
        ingredients: [
            "600g de abóbora menina limpa",
            "1 cenoura grande",
            "1 cebola",
            "1 pedaço pequeno de gengibre fresco ralado",
            "Azeite, sal e sementes de abóbora para decorar"
        ],
        prep: [
            "Refogue a cebola em azeite, junte a abóbora e a cenoura em cubos.",
            "Cubra com água e adicione o gengibre ralado e sal.",
            "Cozinhe por 20 minutos até os legumes ficarem macios.",
            "Triture tudo até obter um creme sedoso. Decore com sementes tostadas."
        ],
        tip: "Adicione um fio de leite de coco para um toque ainda mais aveludado."
    }
];
