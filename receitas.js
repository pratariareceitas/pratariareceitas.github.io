// 1. Receitas Iniciais em Português (O site abre instantaneamente com estas)
let recipes = [
    {
        id: 1,
        title: "Bolo Merengue de Morango",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
        desc: "Bolo cremoso recheado com morangos frescos e creme de natas.",
        ingredients: ["3 latas de leite condensado", "10 colheres de leite em pó", "5 pacotes de natas", "Morangos frescos", "Suspiros"],
        prep: ["Prepare o recheio com leite condensado e leite em pó.", "Monte as camadas com morangos e suspiros.", "Decore com natas."],
        tip: "Sirva bem fresco."
    },
    {
        id: 2,
        title: "Pudim de Leite Condensado",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=600&q=80",
        desc: "O clássico pudim com calda de caramelo dourada.",
        ingredients: ["1 lata de leite condensado", "2 medidas de leite", "3 ovos", "1 chávena de açúcar"],
        prep: ["Faça o caramelo na forma.", "Bata os ingredientes no liquidificador.", "Asse em banho-maria por 1 hora."],
        tip: "Desenforme depois de frio."
    },
    {
        id: 3,
        title: "Mousse de Chocolate",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1511715282059-4186c3a2410b?auto=format&fit=crop&w=600&q=80",
        desc: "Mousse aveludada com intenso sabor a chocolate.",
        ingredients: ["200g de chocolate 70%", "4 claras em castelo", "4 gemas", "3 colheres de açúcar"],
        prep: ["Derreta o chocolate.", "Misture as gemas com açúcar.", "Envolva as claras em castelo e leve ao frigorífico."],
        tip: "Decore com raspas de chocolate."
    },
    {
        id: 4,
        title: "Cheesecake de Frutos Vermelhos",
        category: "doces",
        tag: "Doces e Sobremesas",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        desc: "Base crocante de bolacha com creme aveludado.",
        ingredients: ["200g de bolacha Maria", "100g de manteiga", "400g de cream cheese", "Doce de frutos vermelhos"],
        prep: ["Forre a forma com a bolacha.", "Bata o cream cheese com açúcar.", "Cubra com o doce."],
        tip: "Deixe no frigorífico de um dia para o outro."
    },
    {
        id: 5,
        title: "Lasanha à Bolonhesa",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80",
        desc: "Lasanha suculenta com molho bolonhesa e muito queijo.",
        ingredients: ["500g de carne picada", "Molho de tomate", "Massa de lasanha", "Queijo mozzarella"],
        prep: ["Refogue a carne com molho.", "Monte as camadas de massa, carne e queijo.", "Asse por 30 minutos."],
        tip: "Sirva bem quente."
    },
    {
        id: 6,
        title: "Esparguete à Carbonara",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
        desc: "Receita clássica com gemas, queijo e bacon.",
        ingredients: ["400g de esparguete", "150g de bacon", "4 gemas de ovo", "Queijo parmesão"],
        prep: ["Cozinhe a massa.", "Frite o bacon.", "Misture as gemas com o queijo e envolva na massa fora do lume."],
        tip: "Use a água da massa para dar cremosidade."
    },
    {
        id: 7,
        title: "Nhoque ao Molho Pesto",
        category: "massas",
        tag: "Massas",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        desc: "Gnocchi de batata com molho pesto de manjericão.",
        ingredients: ["500g de batatas", "Farinha de trigo", "Manjericão fresco", "Azeite e nozes"],
        prep: ["Faça a massa de batata e corte os nhoques.", "Cozinhe em água a ferver.", "Envolva no molho pesto."],
        tip: "Sirva com parmesão ralado."
    },
    {
        id: 8,
        title: "Estrogonofe de Frango",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
        desc: "Prato cremoso e clássico para toda a família.",
        ingredients: ["500g de peito de frango", "Natas", "Ketchup e mostarda", "Cogumelos"],
        prep: ["Grelhe o frango em cubos.", "Adicione ketchup, mostarda e cogumelos.", "Misture as natas."],
        tip: "Acompanhe com batata palha."
    },
    {
        id: 9,
        title: "Bacalhau com Natas",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        desc: "Prato tradicional português gratinado no forno.",
        ingredients: ["500g de bacalhau desfiado", "Batatas em cubos", "Molho bechamel", "Natas e queijo"],
        prep: ["Refogue o bacalhau.", "Junte as batatas e os molhos.", "Leve ao forno a gratinar."],
        tip: "Sirva com salada verde."
    },
    {
        id: 10,
        title: "Salmão Grelhado com Ervas",
        category: "principais",
        tag: "Pratos Principais",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        desc: "Lombo de salmão suculento temperado com limão e ervas.",
        ingredients: ["4 lombos de salmão", "Limão", "Ervas finas", "Azeite"],
        prep: ["Tempere o salmão.", "Grelhe na frigideira com azeite.", "Sirva com limão fresco."],
        tip: "Ótimo com legumes ao vapor."
    },
    {
        id: 11,
        title: "Hambúrguer Artesanal",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        desc: "Hambúrguer suculento com queijo cheddar e bacon.",
        ingredients: ["180g de carne picada", "Pão brioche", "Queijo cheddar", "Bacon"],
        prep: ["Grelhe a carne na frigideira.", "Derreta o queijo por cima.", "Monte no pão tostado."],
        tip: "Toste bem o pão."
    },
    {
        id: 12,
        title: "Tostada de Abacate e Ovo",
        category: "lanches",
        tag: "Lanches Rápidos",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
        desc: "Lanche saudável e rápido.",
        ingredients: ["Pão de massa mãe", "1 abacate", "2 ovos", "Azeite e sal"],
        prep: ["Toste o pão.", "Esmague o abacate com sal e limão.", "Coloque o ovo por cima."],
        tip: "Adicione pimenta preta."
    },
    {
        id: 13,
        title: "Caldo Verde Tradicional",
        category: "entradas",
        tag: "Entradas e Sopas",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
        desc: "Sopa reconfortante de batata e couve com chouriço.",
        ingredients: ["500g de batata", "Couve galega", "Chouriço", "Azeite"],
        prep: ["Cozinhe as batatas e triture.", "Junte a couve e o chouriço fatiado.", "Cozinhe por 10 min."],
        tip: "Sirva com broa de milho."
    },
    {
        id: 14,
        title: "Bruschetta de Tomate",
        category: "entradas",
        tag: "Entradas e Sopas",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80",
        desc: "Entrada crocante com tomate fresco e manjericão.",
        ingredients: ["Pão fatiado", "Tomates maduros", "Alho", "Manjericão e azeite"],
        prep: ["Toste o pão e esfregue alho.", "Cubra com tomate picado e azeite."],
        tip: "Sirva de imediato."
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

// 2. Função que força o teu site a atualizar a lista no ecrã
function updateWebsiteDisplay() {
    if (typeof renderRecipes === 'function') renderRecipes(recipes);
    if (typeof displayRecipes === 'function') displayRecipes(recipes);
    if (typeof mostrarReceitas === 'function') mostrarReceitas(recipes);
    
    // Força o clique no botão de filtro para re-desenhar a tela com as 300+ receitas
    const activeBtn = document.querySelector('button.active') || document.querySelector('.filter-btn') || document.querySelectorAll('button')[0];
    if (activeBtn) {
        activeBtn.click();
    }
}

// 3. Importa mais de 300 receitas da API pública em segundo plano
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
                        desc: `Receita especial de ${meal.strMeal} (${mapped.tag}).`,
                        ingredients: extractIngredients(meal),
                        prep: extractInstructions(meal.strInstructions),
                        tip: "Servir quente e bom apetite!"
                    });
                });
            }
        } catch (e) {
            console.error("Erro ao carregar letra " + letter, e);
        }
    }

    // Atualiza o ecrã do site assim que terminar o download!
    updateWebsiteDisplay();
}

// Inicia o download das centenas de receitas
setTimeout(fetchHundredsOfRecipes, 500);
