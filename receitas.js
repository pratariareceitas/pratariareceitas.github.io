 const recipes = [
    // --- DOCES E SOBREMESAS ---
    {
        id: 1,
        title: "Bolo Merengue de Morango",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
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
        tip: "Passe a mistura por um coador para obter um pudim bem liso."
    },
    {
        id: 3,
        title: "Mousse de Chocolate Tradicional",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1511715282059-4186c3a2410b?auto=format&fit=crop&w=600&q=80",
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
        id: 4,
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
    {
        id: 5,
        title: "Brownie de Chocolate com Nozes",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        desc: "Brownie denso, húmido no centro e com casquinha crocante por fora.",
        ingredients: [
            "200g de chocolate em tablete",
            "150g de manteiga",
            "1 e 1/2 chávena de açúcar",
            "3 ovos",
            "1 chávena de farinha de trigo",
            "100g de nozes picadas"
        ],
        prep: [
            "Derreta o chocolate com a manteiga.",
            "Misture o açúcar e os ovos até obter um creme fluido.",
            "Incorpore a farinha e as nozes picadas.",
            "Asse a 180°C por 25 minutos num tabuleiro forrado com papel vegetal."
        ],
        tip: "Não deixe assar demais para manter o interior húmido e cremoso."
    },

    // --- MASSAS ---
    {
        id: 6,
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
            "Placas de massa para lasanha"
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
        id: 7,
        title: "Carbonara Italiana Tradicional",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
        desc: "Receita autêntica romana feita com gemas, queijo Pecorino e pancetta.",
        ingredients: [
            "400g de esparguete",
            "150g de pancetta em cubos",
            "4 gemas de ovo",
            "100g de queijo Parmesão ralado",
            "Pimenta preta moída na hora"
        ],
        prep: [
            "Cozinhe o esparguete em água a ferver com sal até ficar al dente.",
            "Frite a pancetta numa frigideira até ficar crocante.",
            "Numa taça, misture as gemas com o queijo ralado e pimenta.",
            "Junte a massa quente à pancetta fora do lume e incorpore a mistura de gemas mexendo rapidamente."
        ],
        tip: "O segredo da cremosidade é a água da cozedura da massa misturada com as gemas fora do lume."
    },
    {
        id: 8,
        title: "Nhoque ao Molho Pesto",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        desc: "Gnocchi leve de batata servido com molho pesto caseiro de manjericão.",
        ingredients: [
            "500g de batatas cozidas e espremidas",
            "1 e 1/2 chávena de farinha de trigo",
            "1 gema de ovo",
            "1 chávena de folhas de manjericão fresco",
            "50g de nozes e azeite"
        ],
        prep: [
            "Misture a batata, farinha e gema até formar uma massa macia. Molde os gnocchis.",
            "Cozinhe em água a ferver até subirem à superfície.",
            "Triture o manjericão, nozes, alho, azeite e parmesão para o pesto.",
            "Envolva os gnocchis no molho pesto e sirva de imediato."
        ],
        tip: "Utilize batatas mais secas para a massa não precisar de muita farinha."
    },

    // --- PRATOS PRINCIPAIS ---
    {
        id: 9,
        title: "Estrogonofe de Frango",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
        desc: "Prato prático, cremoso e muito saboroso. A refeição perfeita para a família.",
        ingredients: [
            "500g de peito de frango em cubos",
            "1 cebola picada e 2 dentes de alho",
            "2 colheres (sopa) de ketchup e 1 de mostarda",
            "1 pacote de natas",
            "Cogumelos laminados"
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
        id: 10,
        title: "Bacalhau com Natas Tradicional",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        desc: "Um clássico da culinária portuguesa, cremoso e gratinado no forno.",
        ingredients: [
            "500g de bacalhau desfiado",
            "500g de batatas em cubinhos fritos",
            "1 cebola grande em rodelas finas",
            "400ml de molho bechamel",
            "200ml de natas e queijo ralado"
        ],
        prep: [
            "Refogue a cebola e o alho em azeite abundante e junte o bacalhau.",
            "Misture as batatas fritas em cubos com o bacalhau refogado.",
            "Envolva o bechamel e as natas na mistura.",
            "Coloque num refratário, cubra com queijo e leve ao forno a gratinar a 200°C."
        ],
        tip: "Não frite demasiado as batatas para que absorvam bem o creme no forno."
    },
    {
        id: 11,
        title: "Salmão Grelhado com Ervas",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        desc: "Lombo de salmão suculento grelhado na perfeição com limão e ervas finas.",
        ingredients: [
            "4 lombos de salmão",
            "2 colheres (sopa) de azeite",
            "Sumo de 1 limão",
            "Ervas finas (alecrim, tomilho e salsa)",
            "Sal e pimenta a gosto"
        ],
        prep: [
            "Tempere os lombos de salmão com sal, pimenta, sumo de limão e ervas.",
            "Aqueça o azeite numa frigideira antiaderente.",
            "Grelhe o salmão com a pele para baixo durante 4 minutos.",
            "Vire e grelhe por mais 2 minutos até ficar dourado."
        ],
        tip: "Sirva acompanhado de legumes salteados ou puré de batata."
    },

    // --- LANCHES RÁPIDOS ---
    {
        id: 12,
        title: "Hambúrguer Artesanal com Cheddar",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        desc: "Hambúrguer suculento grelhado na hora com queijo derretido e bacon.",
        ingredients: [
            "180g de carne de novilho picada",
            "Pão de hambúrguer brioche",
            "2 fatias de queijo cheddar",
            "Bacon crocante e molho especial"
        ],
        prep: [
            "Molde a carne e tempere com sal e pimenta.",
            "Grelhe numa frigideira bem quente por 3 minutos de cada lado.",
            "Coloque o queijo por cima para derreter.",
            "Toste o pão em manteiga e monte o hambúrguer."
        ],
        tip: "Tostar o pão impede que fique amolecido pelos sucos da carne."
    },
    {
        id: 13,
        title: "Tostada de Abacate e Ovo",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
        desc: "Opção saudável, rápida e perfeita para um pequeno-almoço ou lanche.",
        ingredients: [
            "2 fatias de pão de massa mãe",
            "1 abacate maduro esmagado",
            "2 ovos frescos",
            "Azeite, sumo de limão, sal e pimenta"
        ],
        prep: [
            "Toste o pão.",
            "Esmague o abacate com limão, azeite, sal e pimenta.",
            "Escalfe ou frite os ovos.",
            "Espalhe o abacate no pão e coloque os ovos por cima."
        ],
        tip: "Corte a gema do ovo ao meio para escorrer sobre a tosta."
    },

    // --- ENTRADAS E SOPAS ---
    {
        id: 14,
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
            "Azeite e sal"
        ],
        prep: [
            "Cozinhe as batatas, cebola, alho e chouriço. Retire o chouriço e triture a base.",
            "Junte a couve bem lavada e cozinhe por 10 minutos.",
            "Sirva bem quente com fatias de chouriço e um fio de azeite."
        ],
        tip: "Acompanhe com uma fatia de pão de broa de milho."
    },
    {
        id: 15,
        title: "Bruschetta de Tomate e Manjericão",
        category: "entradas",
        tag: "Entradas e Sopas",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80",
        desc: "Entrada italiana clássica com pão tostado, tomate fresco e azeite de alho.",
        ingredients: [
            "1 pão fatiado",
            "3 tomates maduros em cubinhos",
            "1 dente de alho",
            "Folhas de manjericão fresco",
            "Azeite virgem extra, sal e pimenta"
        ],
        prep: [
            "Toste as fatias de pão no forno.",
            "Esfregue o alho cru sobre o pão quente.",
            "Misture o tomate com azeite, manjericão, sal e pimenta.",
            "Coloque sobre o pão e sirva de imediato."
        ],
        tip: "Prepare a mistura de tomate 15 minutos antes para libertar todo o sabor."
    }
];
